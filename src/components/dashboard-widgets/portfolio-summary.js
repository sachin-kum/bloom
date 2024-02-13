import React, { useEffect, useState } from 'react'
import Loss from '../../assets/arrow-loss.svg'
import Profit from '../../assets/arrow-profit.svg'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { oneyear } from '../../variables/dashboardvar'
import { Holding_Broker_Ason, getTotalArray, ProfitLoss_Cash_Summary } from '../../API'
import { useDispatch } from 'react-redux'
import { LoginAuth } from '../../redex/action';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
const CustomizedDot = () => {
  return (<svg ></svg>
  );
};
let toDayDate = new Date().toLocaleDateString("en-ZA").split("/").join("") // Today
let ytrDate = new Date(new Date() - 86400000).toLocaleDateString("en-ZA").split("/").join("") // yesterday

const year = new Date().getFullYear()
const month = new Date().getMonth()
const getDateForYear = () => {
  if (month <= 2) {
    return { fromDate: parseInt(`${year - 1}0401`) }
  } else {
    return { fromDate: parseInt(`${year}0401`) }
  }
}

const Widget1 = () => {
  const Navigate = useNavigate()
  const Dispatch = useDispatch()
  const [cookies, , removeCookie] = useCookies(["token"]);
  const CheckCookie = (value) => {
    if (value.status !== true && value.status !== 200) {
      removeCookie('token')
      Dispatch(LoginAuth(''))
      Navigate('/login')
    }
  }
  const { token } = cookies
  //Holding_Broker_Ason
  const [Today_PnL, SetToday_PnL] = useState()  // Today invest
  const [yesterday_PnL, setyesterday_PnL] = useState() // yesterday invest

  // ProfitLoss_Cash_Summary
  const [YstrReazdPnL, SetYstrReazdPnL] = useState()
  const [TodayReazdPnL, SetTodayReazdPnL] = useState()
  const [isSketan, setIsSketan] = useState(true)
  useEffect(() => {
    const { fromDate } = getDateForYear()
    const dataFun = async () => {
      // total invest value :  Holding_Broker_Ason
      // ToDay 
      const Broker_Ason_invest1 = await Holding_Broker_Ason(token, toDayDate)
      CheckCookie(Broker_Ason_invest1)
      SetToday_PnL(getTotalArray(Broker_Ason_invest1.data, 'Value'))
      // Yesterday 
      const Broker_Ason_invest2 = await Holding_Broker_Ason(token, ytrDate)
      CheckCookie(Broker_Ason_invest2)
      setyesterday_PnL(getTotalArray(Broker_Ason_invest2.data, 'Value'))

      // ProfitLoss_Cash_Summary :-UnRealized_PnL
      //today

      const Cash_Summary = await ProfitLoss_Cash_Summary(token, fromDate, toDayDate)
      SetTodayReazdPnL(await getTotalArray(Cash_Summary.data, 'UnRealized_PL'))

      //Yesterday
      // console.log(token);
      const Cash_Summary2 = await ProfitLoss_Cash_Summary(token, fromDate, ytrDate)
      CheckCookie(Cash_Summary2)
      SetYstrReazdPnL(await getTotalArray(Cash_Summary2.data, 'UnRealized_PL'))
      setIsSketan(false)
    }
    dataFun()
  }, [])
  // Holding_Broker_Ason
  const compaire = (((Today_PnL - (yesterday_PnL)) / yesterday_PnL) * 100).toFixed(2)
  // ProfitLoss_Cash_Summary
  const compaire_Cash_Summary = (((TodayReazdPnL - YstrReazdPnL) / YstrReazdPnL) * 100).toFixed(2)

  return (
    <div className="container widget widget1">
      <div className='row'>
        <div className='col-lg-2 blueparent'>
          <div className='row'>
            <div className='col-lg-12'>
              {
                isSketan ? <Skeleton className='bluewidget' variant="rectangular" height={'110px'} /> : <div className='bluewidget'>
                  {
                    Today_PnL ? <>
                      <h3><span>₹</span>
                        {`${(yesterday_PnL / 10000000).toFixed(2)}cr`}
                      </h3>
                      <p>Total Invested</p>
                      <div className='d-flex justify-content-center'>
                        {
                          (Today_PnL >= yesterday_PnL) ? <>
                            <img alt=" " src={Profit} />
                            <h6> {compaire}% more than yesterday</h6>
                          </> : <>
                            <img alt=" " src={Loss} />
                            <h6> {compaire}% less than yesterday</h6>
                          </>
                        }
                      </div>
                    </> : <p>no data found</p>
                  }
                </div>
              }

            </div>

            <div className='col-lg-12'>
              {
                isSketan ? <Skeleton className='bluewidget' variant="rectangular" height={'110px'} /> : <div className='bluewidget'>
                  <h3><span>₹</span>162.9cr</h3>
                  <p>Present Earnings</p>
                  <div className='d-flex justify-content-center'>
                    <img alt=" " src={Profit} />
                    <h6> 15% more than yesterday</h6>
                  </div>
                </div>
              }

            </div>

            <div className='col-lg-12'>
              {isSketan ? <Skeleton className='bluewidget' variant="rectangular" height={'110px'} /> : <div className='bluewidget' style={{ "marginBottom": "0px", }}>
                {
                  (TodayReazdPnL !== undefined && YstrReazdPnL !== undefined) ? <>
                    <h3>
                      <span>₹</span>
                      {`${(TodayReazdPnL / 10000000).toFixed(2)}cr`}
                    </h3>
                    <p>Unrealized P&L</p>
                    {
                      (0 <= compaire_Cash_Summary) ? <div className='d-flex justify-content-center'>
                        <img alt=" " src={Profit} />
                        <h6>  {compaire_Cash_Summary}% more than yesterday</h6>
                      </div> : <div className='d-flex justify-content-center'>
                        <img alt=" " src={Loss} />
                        <h6>  {compaire_Cash_Summary}% less than yesterday</h6>
                      </div>
                    }
                  </> : <p>no data found</p>
                }
              </div>}
            </div>
          </div>
        </div>
        <div className='col-lg-10'>
          <div className='w1chartside'>
            <div className='w1metas'>
              <h2>
                Portfolio Summary
              </h2>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li role="presentation">
                  <button className="d-lg-block d-md-block d-none" id="pills-week-tab" data-bs-toggle="pill" data-bs-target="#pills-week" type="button" role="tab" aria-controls="pills-week" aria-selected="false">1 Week</button>
                  <button className="d-lg-none d-md-none d-block" id="pills-week-tab" data-bs-toggle="pill" data-bs-target="#pills-week" type="button" role="tab" aria-controls="pills-week" aria-selected="false">1 W</button>
                </li>
                <li role="presentation">
                  <button className="d-lg-block d-md-block d-none" id="pills-month-tab" data-bs-toggle="pill" data-bs-target="#pills-month" type="button" role="tab" aria-controls="pills-month" aria-selected="false">1 Month</button>
                  <button className="d-lg-none d-md-none d-block" id="pills-month-tab" data-bs-toggle="pill" data-bs-target="#pills-month" type="button" role="tab" aria-controls="pills-month" aria-selected="false">1 M</button>
                </li>
                <li role="presentation">
                  <button className="active d-lg-block d-md-block d-none" id="pills-year-tab" data-bs-toggle="pill" data-bs-target="#pills-year" type="button" role="tab" aria-controls="pills-year" aria-selected="true">1 Year</button>
                  <button className="d-lg-none d-md-none d-block" id="pills-year-tab" data-bs-toggle="pill" data-bs-target="#pills-year" type="button" role="tab" aria-controls="pills-year" aria-selected="true">1 Y</button>
                </li>
                <li role="presentation">
                  <button className="d-lg-block d-md-block d-none" id="pills-years-tab" data-bs-toggle="pill" data-bs-target="#pills-years" type="button" role="tab" aria-controls="pills-years" aria-selected="false">5 Years</button>
                  <button className="d-lg-none d-md-none d-block" id="pills-years-tab" data-bs-toggle="pill" data-bs-target="#pills-years" type="button" role="tab" aria-controls="pills-years" aria-selected="false">5 Ys</button>
                </li>
                <li role="presentation">
                  <button className="d-lg-block d-md-block d-none" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="false">All Time</button>
                  <button className="d-lg-none d-md-none d-block" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="false">All</button>
                </li>
                <li className='w1gstock'><div></div>Stocks</li>
              </ul>
            </div>

            <div className="tab-pane fade" id="pills-week" role="tabpanel" aria-labelledby="pills-week-tab">
              <ResponsiveContainer width="100%" height="89%">
                <LineChart width={500} height={300} data={oneyear} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid />
                  <XAxis dataKey="month" />
                  <YAxis tickCount={8} />
                  <Tooltip />
                  <Line type="monotone" dataKey="Earnings" stroke="#87AA63" activeDot={{ r: 8 }} dot={<CustomizedDot />} strokeWidth="2.5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="tab-pane fade" id="pills-month" role="tabpanel" aria-labelledby="pills-month-tab">                                  <ResponsiveContainer width="100%" height="89%">
              <LineChart width={500} height={300} data={oneyear} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid />
                <XAxis dataKey="month" />
                <YAxis tickCount={8} />
                <Tooltip />
                <Line type="monotone" dataKey="Earnings" stroke="#87AA63" activeDot={{ r: 8 }} dot={<CustomizedDot />} strokeWidth="2.5" />
              </LineChart>
            </ResponsiveContainer></div>
            <div className="tab-pane fade show active" id="pills-year" role="tabpanel" aria-labelledby="pills-year-tab">
              <ResponsiveContainer width="100%" height="89%">
                <LineChart width={500} height={300} data={oneyear} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid />
                  <XAxis dataKey="month" />
                  <YAxis tickCount={8} />
                  <Tooltip />
                  <Line type="monotone" dataKey="Earnings" stroke="#87AA63" activeDot={{ r: 8 }} dot={<CustomizedDot />} strokeWidth="2.5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="tab-pane fade " id="pills-years" role="tabpanel" aria-labelledby="pills-years-tab">
              <ResponsiveContainer width="100%" height="89%">
                <LineChart width={500} height={300} data={oneyear} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid />
                  <XAxis dataKey="month" />
                  <YAxis tickCount={8} />
                  <Tooltip />
                  <Line type="monotone" dataKey="Earnings" stroke="#87AA63" activeDot={{ r: 8 }} dot={<CustomizedDot />} strokeWidth="2.5" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="tab-pane fade" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
              <ResponsiveContainer width="100%" height="89%">
                <LineChart width={500} height={300} data={oneyear} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid />
                  <XAxis dataKey="month" />
                  <YAxis tickCount={8} />
                  <Tooltip />
                  <Line type="monotone" dataKey="Earnings" stroke="#87AA63" activeDot={{ r: 8 }} dot={<CustomizedDot />} strokeWidth="2.5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Widget1;