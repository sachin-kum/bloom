import axios from 'axios'

export const getTotalArray = (list, payload) => {
  let { total } = list ? list.reduce(
    (accum, carElem) => {
      accum.total += carElem[payload]
      return accum
    },
    { total: 0 }
  )
    : 0
  return total
}

// ###############################     Main    ##############################
export const UserProfile = async token => {
  try {
    let profile //today
    await axios
      .post(`https://upi.acagarwal.com/tradewebapi/api/Main/UserProfile`, '', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(result => {
        profile = result
      })
      .catch(error => {
        throw error.response
      })
    console.log(profile.data.data)
    // if (profile) {
    //   await axios.get(`https://urlsdemo.xyz/tradeweb/api/treadUser/${profile.data[0].ClientCode}`).then((res) => {
    //     console.log(res)
    //     // setProfile(res.data.data.image_url)
    //   })
    // }
    return {
      data: await profile.data.data,
      status: await profile.status
    }
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }
}

// ---------------------------   OutStanding Position  ---------------------------
export const OutStandingPosition = async (token, payload) => {
  try {
    let OutStanding_Position
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/Main/OutStandingPosition?AsOnDt=${payload}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(result => {
        OutStanding_Position = result.data
      })
      .catch(error => {
        throw error.response
      })
    return OutStanding_Position
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }
}
// url='https://upi.acagarwal.com/tradewebapi/api/Main/OutStandingPosition?AsOnDt=20221212'
// ----------------------------------- Ledger_Summary -----------------------------------
export const Ledger_Summary = async (token, fromDate, toDate) => {
  try {
    let Ledger_Trading
    let Ledger_Commodity
    let Ledger_MTF
    let Ledger_NBFC
    let Ledger
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/Main/Ledger_Summary?type=1&fromDate=${fromDate}&toDate=${toDate}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(result => {
        if (result) {
          Ledger = result
          Ledger_Trading = result.data.data
        }
      })
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/Main/Ledger_Summary?type=2&fromDate=${fromDate}&toDate=${toDate}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(result => {
        if (result) {
          Ledger_Commodity = result.data.data
        }
      })
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/Main/Ledger_Summary?type=3&fromDate=${fromDate}&toDate=${toDate}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(result => {
        if (result) {
          Ledger_MTF = result.data.data
        }
      })
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/Main/Ledger_Summary?type=4&fromDate=${fromDate}&toDate=${toDate}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(result => {
        if (result) {
          Ledger_NBFC = result.data.data
        }
      })
    return {
      status: Ledger.status,
      data: [
        ...Ledger_Trading,
        ...Ledger_Commodity,
        ...Ledger_MTF,
        ...Ledger_NBFC
      ]
    }
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }
}

//#############################  Holding API ###################################
// Holding_Broker_Ason
export const Holding_Broker_Ason = async (token, Date) => {
  try {
    let Broker_Ason_invest //today
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/Holding/Holding_Broker_Ason?AsOnDt=${Date}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(result => {
        Broker_Ason_invest = result
      })
      .catch(error => {
        throw error.response
      })
    return {
      data: await Broker_Ason_invest.data.data,
      status: await Broker_Ason_invest.status
    }
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }
}

// ###########################  ProfiltAndLoss API   ############################
//  ------------------------ ProfitLoss_Cash_Summary -----------------------
export const ProfitLoss_Cash_Summary = async (token, fromDate, toDate) => {
  try {
    let Cash_Summary
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_Cash_Summary?fromDate=${fromDate}&toDate=${toDate}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(result => {
        Cash_Summary = result
      })
      .catch(error => {
        throw error.response
      })
    return {
      status: Cash_Summary.data.status,
      data: Cash_Summary.data.data
    }
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }
}
// -------------------------------ProfitLoss_Cash_Detail-------------------------------

export const ProfitLoss_Cash_Detail = async (token, fromDate, toDate, scriptCode) => {
  try {
    let result;
    await axios.get(`https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_Cash_Detail?fromDate=${fromDate}&toDate=${toDate}&scripCode=${scriptCode}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((item) => {
        result = item
      })

    return {
      ...result.data
    }
  } catch (error) {
  }
}

// -----------------------      ProfitLoss_FO_Summary    ----------------------------
export const ProfitLoss_FO_Summary = async (token, fromDate, toDate) => {
  const exchange = ['N', 'M', 'B']
  const segment = ['F', 'K']
  let MTM_NF
  let MTM_NK
  let MTM_MF
  let MTM_MK
  let MTM_BF
  let MTM_BK
  // N-F
  if (!MTM_NF) {
    const result = await axios.get(
      `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_FO_Summary?exchange=${exchange[0]}&segment=${segment[0]}&fromDate=${fromDate}&toDate=${toDate}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    MTM_NF = await result.data.data
  }
  // N - K
  if (!MTM_NK) {
    const result = await axios.get(
      `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_FO_Summary?exchange=${exchange[0]}&segment=${segment[1]}&fromDate=${fromDate}&toDate=${toDate}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    MTM_NK = await result.data.data
  }
  // M-F
  if (!MTM_MF) {
    const result = await axios.get(
      `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_FO_Summary?exchange=${exchange[1]}&segment=${segment[0]}&fromDate=${fromDate}&toDate=${toDate}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    MTM_MF = await result.data.data
  }
  // M-K
  if (!MTM_MK) {
    const result = await axios.get(
      `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_FO_Summary?exchange=${exchange[1]}&segment=${segment[1]}&fromDate=${fromDate}&toDate=${toDate}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    MTM_MK = await result.data.data
  }
  // B-F
  if (!MTM_BF) {
    const result = await axios.get(
      `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_FO_Summary?exchange=${exchange[2]}&segment=${segment[0]}&fromDate=${fromDate}&toDate=${toDate}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    MTM_BF = await result.data.data
  }
  // B-K
  if (!MTM_BK) {
    const result = await axios.get(
      `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_FO_Summary?exchange=${exchange[2]}&segment=${segment[1]}&fromDate=${fromDate}&toDate=${toDate}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    MTM_BK = await result.data.data
  }
  return {
    MTM_NF,
    MTM_NK,
    MTM_MF,
    MTM_MK,
    MTM_BF,
    MTM_BK
  }
}

export const ProfitLoss_FO_Summary1 = async (token, fromDate, toDate, segment, exchange, includeBfOptions, bfOptionPL) => {
  const exch = exchange.slice(0, 1)
  let result;
  try {
    await axios.get(`https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_FO_Summary?exchange=${exch}&segment=${segment}&fromDate=${fromDate}&toDate=${toDate}&includeBfOptions=${includeBfOptions}&bfOptionPL=${bfOptionPL}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((value) => {
        result = value.data
      }).catch(error => {
        throw error.response
      })
    return result
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }
}

//  ----------------------------------- ProfitLoss_Commodity_Summary --------------------------------
export const ProfitLoss_Commodity_Summary = async (token, fromDate, toDate) => {
  const exchange = ['M', 'N']
  let result_M
  let result_N
  try {
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_Commodity_Summary?exchange=${exchange[0]}&fromDate=${fromDate}&toDate=${toDate}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(result => {
        result_M = result
      })
      .catch(error => {
        throw error.response
      })
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }
  try {
    await axios
      .get(
        `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_Commodity_Summary?exchange=${exchange[1]}&fromDate=${fromDate}&toDate=${toDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(result => {
        result_N = result
      })
      .catch(error => {
        throw error.response
      })
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }

  const Commodity_Summary_M = await result_M.data.data
  const Commodity_Summary_N = await result_N.data.data
  return {
    Commodity_Summary_M,
    Commodity_Summary_N
  }
}

export const ProfitLoss_Commodity_Summary1 = async (token, fromDate, toDate, exchange) => {
  const ex = exchange.slice(0, 1)
  try {
    let dataList;
    await axios.get(`https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_Commodity_Summary?exchange=${ex}&fromDate=${fromDate}&toDate=${toDate}`,
      { headers: { Authorization: `Bearer ${token}` } })
      .then(result => {
        dataList = result.data
      })
      .catch(error => {
        throw error.response
      })
    return dataList
  } catch (error) {
    return {
      status: false,
      status_code: error.status,
      data: error.error ? error.error : ''
    }
  }
}


// ----------------------------{     Request     }----------------------------

export const Request_Get_PledgeForMargin = async (token, dematActNo) => {
  try {
    const respoce = await axios.get(`https://upi.acagarwal.com/tradewebapi/api/Request/Request_Get_PledgeForMargin?dematActNo=${dematActNo}`, { headers: { Authorization: `Bearer ${token}` } })
    return respoce.data.data
  } catch (error) {
    return {
      status: false
    }
  }
}

export const Request_Post_PledgeForMargin = async (token, list) => {
  const data = {
    "data": list
  }
  try {
    const respoce = await axios.post(`https://upi.acagarwal.com/tradewebapi/api/Request/Request_Post_PledgeForMargin`, data, { headers: { Authorization: `Bearer ${token}` } })
    console.log(respoce)
    return respoce
  } catch (error) {
    console.log('eroorr')
  }
}