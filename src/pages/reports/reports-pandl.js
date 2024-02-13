import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { ProfitLoss_Cash_Summary, ProfitLoss_Commodity_Summary1, ProfitLoss_FO_Summary1 } from '../../API'
import Footer from '../../components/footer'
import Header from '../../components/header'
import OutStandingPositionMobile from '../../components/table_skeleton/OutStandingPositionMobile'
import ReportsPandlTable1 from '../../components/table_skeleton/reportsPandlTable1'
import { LoginAuth } from '../../redex/action'
const ReportPandL = () => {
  const [page, SetPage] = useState(0)
  const pageHandle = event => {
    SetPage(event.selected)
  }
  const Navigate = useNavigate()
  const Dispatch = useDispatch()

  const [cookies, , removeCookie] = useCookies(['token'])
  const CheckCookie = value => {
    if (!value.status) {
      removeCookie('token')
      Dispatch(LoginAuth(''))
      Navigate('/')
    }
  }

  // date state
  const today = new Date().toLocaleDateString('sv-SE').split('-').join('')
  const yesterday = new Date(new Date().getTime() - (86400000)).toLocaleDateString('sv-SE').split('-').join('')
  const lastYesterday = new Date(new Date().getTime() - (86400000 * 2)).toLocaleDateString('sv-SE').split('-').join('')
  const sevenDay = new Date(new Date().getTime() - (86400000 * 7)).toLocaleDateString('sv-SE').split('-').join('')
  const thirtyDay = new Date(new Date().getTime() - (86400000 * 30)).toLocaleDateString('sv-SE').split('-').join('')

  const dd = `${new Date(new Date().getTime() - (86400000)).toLocaleDateString('fr-BE')}-${new Date().toLocaleDateString('fr-BE')}`
  const [displayDate, setDisplayDate] = useState(dd)
  // custom date 
  const [isCustomDate, setIsCustomDate] = useState(false)
  // UI date 
  const [disCustomDate, setdisCustomDate] = useState({
    fromDate: new Date(new Date().getTime() - (86400000 * 365)).toLocaleDateString('sv-SE'),
    toDate: new Date().toLocaleDateString('sv-SE')
  })

  const [dateRange, setDateRange] = useState({
    fromDate: yesterday,
    toDate: today
  })


  const customDateHandal = (event) => {
    const { value, name } = event.target
    setdisCustomDate({
      ...disCustomDate,
      [name]: new Date(value).toLocaleDateString('sv-SE')
    })
    setDateRange({
      ...dateRange,
      [name]: new Date(value).toLocaleDateString('sv-SE').split('-').join("")
    })
  }

  const customDateRange = (event) => {
    setIsCustomDate(event)
    setDateRange({
      fromDate: new Date(disCustomDate.fromDate).toLocaleDateString('sv-SE').split('-').join(''),
      toDate: new Date(disCustomDate.toDate).toLocaleDateString('sv-SE').split('-').join('')
    })
  }

  const dateHandal = (payload) => {
    const dd2 = `${new Date().toLocaleDateString('fr-BE')}`
    setIsSkeleton(true)
    // today 
    if (payload === 'today') {
      setDisplayDate(dd)
      setDateRange({
        fromDate: yesterday,
        toDate: today
      })
    }
    // yesterday 
    if (payload === 'yesterday') {
      const dd1 = `${new Date(new Date().getTime() - (86400000 * 2)).toLocaleDateString('fr-BE')}`
      setDisplayDate(`${dd1}-${dd2}`)
      setDateRange({
        fromDate: lastYesterday,
        toDate: yesterday
      })
    }
    // sevenDay
    if (payload === 'sevenDay') {
      const dd1 = `${new Date(new Date().getTime() - (86400000 * 7)).toLocaleDateString('fr-BE')}`
      setDisplayDate(`${dd1}-${dd2}`)
      setDateRange({
        fromDate: sevenDay,
        toDate: today
      })
    }
    // thirtyDay
    if (payload === 'thirtyDay') {
      const dd1 = `${new Date(new Date().getTime() - (86400000 * 30)).toLocaleDateString('fr-BE')}`
      setDisplayDate(`${dd1}-${dd2}`)
      setDateRange({
        fromDate: thirtyDay,
        toDate: today
      })
    }
    // this month 
    if (payload === 'thisMonth') {
      // starting date 
      const month = new Date().getMonth() + 1
      const newMonth = (month < 10) ? `0${month}` : month
      const year = new Date().getFullYear()
      const fromDate = `${year}${newMonth}01`
      setDisplayDate(`01/${newMonth}/${year}-${dd2}`)
      setDateRange({
        fromDate,
        toDate: today
      })
    }
    // last month 
    if (payload === 'lastMonth') {
      // starting date 
      const date = new Date()
      let month = ((date.getMonth() + 1) < 10) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
      let year = date.getFullYear()
      const getFromDate = new Date(new Date(`${year}-${month}-04`).getTime() - (86400000 * 30))
      const FromNewMonth = (getFromDate.getMonth() + 1) < 10 ? `0${getFromDate.getMonth() + 1}` : `${getFromDate.getMonth() + 1}`

      const fromDate = new Date(`${getFromDate.getFullYear()}-${FromNewMonth}-01`).toLocaleDateString('sv-SE').split('-').join('')
      const to = new Date(`${year}-${month}-01`).toLocaleDateString('sv-SE').split('-').join('')

      setDisplayDate(`01/${FromNewMonth}/${getFromDate.getFullYear()}-01/${month}/${year}`)
      setDateRange({
        fromDate,
        toDate: to,
      })
    }
    // this  financial year 
    if (payload === 'thisYear') {
      const month = new Date().getMonth()
      const year = new Date().getFullYear()
      const fromDate = (month > 2) ? `${year}0401` : `${year - 1}0401`
      const toDate = today
      const dd1 = (month > 2) ? `01/04/${year} ` : `01/04/${year - 1}`
      setDisplayDate(`${dd1}-${dd2}`)
      setDateRange({
        fromDate,
        toDate
      })
    }
    // last financial year 
    if (payload === 'lastYear') {
      const month = new Date().getMonth()
      const year = new Date().getFullYear()
      const fromDate = (month > 2) ? `${year - 1}0401` : `${year - 2}0401`
      const toDate = (month > 2) ? `${year}0331` : `${year - 1}0331`
      const d1 = (month > 2) ? `01/04/${year - 1}` : `01/04/${year - 2}`
      const d2 = (month > 2) ? `31/03/${year}` : `31/03/${year - 1}`
      setDisplayDate(`${d1}-${d2}`)
      setDateRange({
        fromDate,
        toDate
      })
    }
  }

  const [tableData, setTableData] = useState([])
  const [isSkeleton, setIsSkeleton] = useState(true)

  const segmentList = {
    Commodity: ['MCX', 'NCDEX'],
    Cash: '',
    Fo: ['NSE', 'BSE', 'MCX'],
    Currency: ['NSE', 'BSE', 'MCX']
  }
  const [exchangeList, setExchangeList] = useState()
  const [exchange, setExchange] = useState('')
  const [segment, setSegment] = useState('Cash')
  // exchange
  const exchangeHandal = (payload) => {
    setExchange(payload)
    setIsSkeleton(true)
  }
  // segment state 

  const segmentHandal = (payload) => {
    setSegment(payload)
    setExchangeList(segmentList[payload])
    setExchange(segmentList[payload][0])
    setIsSkeleton(true)
  }

  const [tableHeaders, setTableHeaders] = useState()

  const looping = (payload) => {
    const result = payload[0]
    const newList = []
    for (const key in result) {
      newList.push(key)
    }
    setTableHeaders(newList)
  }
  // filter data  state
  const [dataList, setDataList] = useState([])
  const [showList, setShowList] = useState([])
  const filterData = (payload) => {
    let list = []
    payload.map((val) => {
      list.push(val.ScripName ? val.ScripName : val.SeriesName)
      return null;
    })
    const newList = [...new Set(list)]
    setDataList(newList)
  }


  const handalfilter = (event) => {
    const list = tableData.filter((item) => {
      if (item.ScripName) {
        if (item.ScripName.includes(event.target.value)) {
          return item
        }
      } else {
        if (item.SeriesName.includes(event.target.value)) {
          return item
        }
      }
      return null;
    })
    setShowList(list)
  }

  const [bfOptionPL, setBfOptionPL] = useState('Closiong Premium')
  const [bfOptionPLPara, setBfOptionPLPara] = useState(0)

  const [includeBfOptions, setIncludeBfOptions] = useState(true)

  const optionPLHandal = (payload, para) => {
    setBfOptionPL(payload)
    setBfOptionPLPara(para)
    setIsSkeleton(true)
  }
  const optionHandal = (payload) => {
    setIncludeBfOptions(payload)
    setIsSkeleton(true)
  }
  // fetch data 
  useEffect(() => {
    const getData = async () => {
      if (segment === 'Cash') {
        const result = await ProfitLoss_Cash_Summary(cookies.token, dateRange.fromDate, dateRange.toDate)
        CheckCookie(result)
        filterData(result.data ? result.data : [])
        setTableData(result.data)
        setShowList(result.data)
        looping(result.data)
        setIsSkeleton(false)
      }
      if (segment === 'Fo') {
        const result = await ProfitLoss_FO_Summary1(cookies.token, dateRange.fromDate, dateRange.toDate, 'F', exchange, includeBfOptions, bfOptionPLPara)

        setTableData(result.data)
        filterData(result.data ? result.data : [])
        setIsSkeleton(false)
        looping(result.data)
        setShowList(result.data)
      }
      if (segment === 'Currency') {
        const result = await ProfitLoss_FO_Summary1(cookies.token, dateRange.fromDate, dateRange.toDate, 'K', exchange, includeBfOptions, bfOptionPLPara)

        setTableData(result.data)
        filterData(result.data ? result.data : [])
        looping(result.data)
        setShowList(result.data)
        setIsSkeleton(false)
      }
      if (segment === 'Commodity') {
        const result = await ProfitLoss_Commodity_Summary1(cookies.token, dateRange.fromDate, dateRange.toDate, exchange)

        setTableData(result.data)
        filterData(result.data ? result.data : [])
        setShowList(result.data)
        looping(result.data)
        setIsSkeleton(false)
      }
    }
    getData()
  }, [dateRange, segment, exchange, isCustomDate, bfOptionPLPara, includeBfOptions])

  return (
    <div className='report-parent'>
      <style>
        {
          `.reports {
                        margin-bottom: -3px;
                        border-bottom: 3px solid #516DAB;
                    }`
        }
      </style>
      <Header />

      {/* P and L Title */}
      <div className='container report-top-container rep-top-pl'>
        <div className='row'>
          <div className='left col-lg-6'>
            <h2>Profit & Loss</h2>
          </div>
          <div className='right col-lg-6'>
            <NavLink to='/reports-profit-and-loss-calendar'>
              <div className='form-check form-switch'>
                <p>List</p>
                <input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' disabled />
                <p>Calender</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* P and L Title End */}

      {/* Widget1 */}
      <div className='container rpandl-list'>
        <div className='row'>
          <div className='col-lg-9 left flexbox-container flex-column flex-sm-column flex-md-column flex-lg-row '>
            <div className='flexBox'>
              <div className='one'>
                <label>Segment</label>
                <div className='dropdown'>
                  <a href='/reports-profit-and-loss'
                    className='btn dropdown-toggle'
                    role='button'
                    id='dropdownMenuLink'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    {segment}
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                    <li className='dropdown-item' onClick={() => segmentHandal('Cash')}>Cash</li>
                    <li className='dropdown-item' onClick={() => segmentHandal('Fo')}>Fo</li>
                    <li className='dropdown-item' onClick={() => segmentHandal('Currency')}>Currency</li>
                    <li className='dropdown-item' onClick={() => segmentHandal('Commodity')}>Commodity</li>
                  </ul>
                </div>
              </div>

              {
                exchangeList ? <div className='one'>
                  <label>exchange</label>
                  <div className='dropdown'>
                    <a href='/reports-profit-and-loss' className='btn dropdown-toggle' role='button' id='dropdownMenuLink'
                      data-bs-toggle='dropdown' aria-expanded='false'>{exchange}</a>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                      {
                        exchangeList.map((curVal) => {
                          return <li className='dropdown-item' onClick={() => exchangeHandal(curVal)}>{curVal}</li>
                        })
                      }
                    </ul>
                  </div>
                </div> : ''
              }

              {
                (segment === 'Fo' || segment === 'Currency') ? <div className="one">
                  <label>Open Option P/L On :</label>
                  <div className='dropdown'>
                    <a href='/reports-profit-and-loss' className='btn dropdown-toggle' role='button' id='dropdownMenuLink' data-bs-toggle='dropdown' aria-expanded='false' >{bfOptionPL}</a>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink' >
                      <li className='dropdown-item' onClick={() => { optionPLHandal('Closiong Premium', 0) }}>Closiong Premium</li>
                      <li className='dropdown-item' onClick={() => { optionPLHandal('Underlying Close Price', 1) }}>Underlying Close Price</li>
                      <li className='dropdown-item' onClick={() => { optionPLHandal('Average Price', 2) }}>Average Price</li>
                      <li className='dropdown-item' onClick={() => { optionPLHandal('Do not valuate', 3) }}>Do not valuate</li>
                    </ul>
                  </div>
                </div> : ''
              }

              <div className='one'>
                <label>Search by symbol</label>
                <input list="browsers" name="browser" id="browser" placeholder='search' onChange={handalfilter}

                />
                <datalist id="browsers" className='dropdown'>
                  {
                    dataList.map((item) => {
                      return <option className='dropdown-item' >{item}</option>
                    })
                  }
                </datalist>
              </div>

            </div>
            <div className='flexBox'>
              {
                isCustomDate ? <div className='date-range'>
                  <div className='one'>
                    <label>From Date</label>
                    <input type={'date'} onChange={customDateHandal} name="fromDate" value={disCustomDate.fromDate} />
                  </div>
                  <div className='one'>
                    <label>To Date</label>
                    <input type={'date'} onChange={customDateHandal} name="toDate" value={disCustomDate.toDate} />
                  </div>
                  <div className='one-button'>
                    <button href='#' className='button1' style={{ background: '#d32b2b' }} onClick={() => customDateRange(false)}>exit</button>
                  </div>
                </div> : <div className='one'>
                  <label>Date</label>
                  <div className='dropdown'>
                    <a href='/reports-profit-and-loss' className='btn dropdown-toggle' role='button' id='dropdownMenuLink' data-bs-toggle='dropdown' aria-expanded='false' >{displayDate}</a>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink' >
                      <li className='dropdown-item'>Today</li>
                      <li className='dropdown-item' onClick={() => { dateHandal('yesterday') }}>Yesterday</li>
                      <li className='dropdown-item' onClick={() => { dateHandal('sevenDay') }}>Last 7 day</li>
                      <li className='dropdown-item' onClick={() => { dateHandal('thirtyDay') }}>Last 30 day</li>
                      <li className='dropdown-item' onClick={() => { dateHandal('thisMonth') }}>This Month</li>
                      <li className='dropdown-item' onClick={() => { dateHandal('lastMonth') }}>Last Month</li>
                      <li className='dropdown-item' onClick={() => { dateHandal('thisYear') }}>This Financial Year</li>
                      <li className='dropdown-item' onClick={() => { dateHandal('lastYear') }}>last Financial Year</li>
                      <li className='dropdown-item' onClick={() => { customDateRange(true) }}>Custom Range</li>
                    </ul>
                  </div>
                </div>
              }
              <div className='one-button'>
                <a href='/reports-profit-and-loss' className='button1'>Download Report</a>
              </div>
            </div>
          </div>
        </div>

        {
          (segment === 'Fo' || segment === 'Currency') ? <div className="chech-report">
            <input type="checkbox" id="check-input" checked={includeBfOptions} onChange={() => optionHandal(!includeBfOptions)} />
            <label htmlFor="check-input" className="lebel-check">
              Consider Option Transactions Before Report Period
            </label>
          </div> : ''
        }


      </div>


      <div className='container d-none d-lg-block rpandl-list'>
        <div className='dp-table pnl-table'>
          <table style={{ maxWidth: '100%!important', }}>

            <tr className='table-head'>
              {
                isSkeleton ? '' : tableHeaders.map((curVal) => {
                  return (curVal !== "Settlement") ? (curVal !== "Flag") ? (curVal !== "Ord") ? (curVal !== 'SeriesID') ? (curVal !== 'Symbol') ? (curVal !== 'ListOrder') ? <th>{curVal}</th> : '' : '' : '' : '' : '' : ''
                })
              }
            </tr>{
              isSkeleton ? <ReportsPandlTable1 /> : showList.map((curElem, index) => {
                if (parseInt(`${page}0`) <= index && index < parseInt(`${page}1`) + 10) {
                  return (
                    (segment === 'Cash') ? <NavLink to={`/reports-portfolio-details/${curElem.ScripCode}`} state={{
                      ScripName: curElem.ScripName,
                      fromDate: dateRange.fromDate,
                      toDate: dateRange.toDate,
                    }} key={index}>
                      <tr>
                        {
                          Object.keys(curElem).map(value => {
                            return (value !== "Settlement") ? (value !== "Flag") ? (value !== "Ord") ? (value !== 'SeriesID') ? (value !== 'Symbol') ? (value !== 'ListOrder') ? <td>{curElem[value]}</td> : '' : '' : '' : '' : '' : ''
                          })
                        }
                      </tr>
                    </NavLink> :
                      <NavLink key={index} style={{ textDecoration: 'none', cursor: 'auto' }}>
                        <tr>
                          {
                            Object.keys(curElem).map(value => {
                              return (value !== "Settlement") ? (value !== "Flag") ? (value !== "Ord") ? (value !== 'SeriesID') ? (value !== 'Symbol') ? (value !== 'ListOrder') ? <td>{curElem[value]}</td> : '' : '' : '' : '' : '' : ''
                            })
                          }
                        </tr>
                      </NavLink>
                  )
                }
                return null;
              })
            }
          </table>
        </div>

        <div className='tablew4-p'>
          <div className='pagination'>
            {isSkeleton ? (<Skeleton width={'130px'} height='20px' />) : (showList.length > 11) ? (
              <ReactPaginate
                previousLabel={'<'}
                breakLabel={'...'}
                nextLabel={'>'}
                pageCount={Math.floor(showList.length / 10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={pageHandle}
              />
            ) : ''}
          </div>
        </div>

      </div>

      <div className='dp-mob-t'>
        <div className='container body d-block d-lg-none'>
          {
            isSkeleton ? <OutStandingPositionMobile /> : showList.map((curVal, index) => {
              if (parseInt(`${page}0`) <= index && index < parseInt(`${page}1`) + 10) {
                return (
                  <div className='mob-table-parent'>
                    {
                      Object.keys(curVal).map((curElem) => {

                        return (curElem !== "Settlement") ? (curElem !== "Flag") ? (curElem !== "Ord") ? (
                          <div className='mob-table'>
                            <div className='row'>
                              <div className='col-6 left'>
                                <h6>{curElem}</h6>
                              </div>
                              <div className='col-6 right'>
                                <p>{curVal[curElem]}</p>
                              </div>
                            </div>
                          </div>
                        ) : '' : '' : ''

                      })
                    }
                  </div>
                )
              }
              return null;
            })
          }
          <div className='tablew4-p'>
            <div className='pagination'>
              {isSkeleton ? (<Skeleton width={'130px'} height='20px' />) : (showList.length > 11) ? (
                <ReactPaginate
                  previousLabel={'<'}
                  breakLabel={'...'}
                  nextLabel={'>'}
                  pageCount={Math.floor(showList.length / 10)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  onPageChange={pageHandle}
                />
              ) : ''}
            </div>
          </div>
        </div>
      </div>
      {/* Widget1 End*/}
      <Footer />
    </div >
  )
}

export default ReportPandL
