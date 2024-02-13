import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import {
  getTotalArray,
  Ledger_Summary,
} from '../../API'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginAuth } from '../../redex/action'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Skeleton from '@mui/material/Skeleton'
import TableSkeleton from '../../components/table_skeleton'
import DpHoldMobile from '../../components/table_skeleton/Dp_hold_mo'
const ReportLedger = () => {
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
  const [LedgerState, setLedgerState] = useState([])
  const [typeList, setTypeList] = useState([])
  const [curBtn, setCurBtn] = useState('All')
  const listType = payload => {
    setCurBtn(payload)

    const list = LedgerState.filter(curVal => {
      if (payload === 'All') {
        return curVal
      }
      if (curVal.Type === payload) {
        return curVal
      }
      return null;
    })
    setTypeList(list)
  }
  const fdate = new Date(new Date() - (86400000 * 365)).toLocaleDateString('sv-SE')
  const ldate = new Date().toLocaleDateString('sv-SE')
  const fromDate = fdate.split('-').join('') //
  const toDate = ldate.split('-').join('')
  const [opBlc, SetOpBlc] = useState()
  const [TotalCredit, SetTotalCredit] = useState()
  const [TotalDebit, SetTotalDebit] = useState()
  const [date, setDate] = useState(toDate)
  const DateHandal = event => {
    setDate(event.target.value.split('/').join(''))
  }
  const [skeleton, setSkeleton] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const result = await Ledger_Summary(cookies.token, fromDate, date)
      CheckCookie(result)
      setTypeList(result.data)
      setLedgerState(result.data)

      const TotalResult = await Ledger_Summary(cookies.token, fromDate, toDate)
      const Credit = await getTotalArray(TotalResult.data, 'Credit')
      const Debit = await getTotalArray(TotalResult.data, 'Debit')
      SetTotalCredit(Credit)
      SetTotalDebit(Debit)
      // Opening Balance
      const tdDate = new Date().toLocaleDateString('sv-SE')
      const yrtDate = new Date(new Date() - 86400000).toLocaleDateString(
        'sv-SE'
      )
      const OpeningResult = await Ledger_Summary(cookies.token, yrtDate, tdDate)
      const balance = await getTotalArray(OpeningResult.data, 'OpeningBalance')
      SetOpBlc(balance)
      setSkeleton(false)
    }
    fetchData()
  }, [date, fdate])

  const [listMenu, setListmenu] = useState([])
  useEffect(() => {
    const list = LedgerState.map(curVal => {
      return curVal.Type
    })
    const newList = [...new Set(list)]
    setListmenu(['All', ...newList])
  }, [LedgerState])

  return (
    <div className='report-parent'>
      <style>
        {`.reports {
            margin-bottom: -3px;
            border-bottom: 3px solid #516DAB;
            }`}
      </style>
      <Header />
      {/* Ledger Title */}
      <div className='container report-top-container'>
        <div className='row'>
          <div className='left col-lg-6'>
            <h2>Ledger</h2>
          </div>
        </div>
      </div>
      {/* Ledger Title End */}
      {/* Widget1*/}
      <div className='container widget rl-widget1'>
        <div className='row'>
          <div className='col-lg-4'>
            {opBlc ? (
              <div className='report-bluewidget'>
                <p>Opening Balance</p>
                <h3>
                  <span>₹</span>
                  {opBlc.toFixed(3)}
                </h3>
              </div>
            ) : (
              <Skeleton className='report-bluewidget' variant='rectangular' />
            )}
          </div>
          <div className='col-lg-4'>
            {TotalDebit ? (
              <div className='report-bluewidget'>
                <p>Total Debit</p>
                <h3>
                  <span>₹</span>
                  {`${(TotalDebit / 10000000).toFixed(3)}Cr`}
                </h3>
              </div>
            ) : (
              <Skeleton className='report-bluewidget' variant='rectangular' />
            )}
          </div>
          <div className='col-lg-4'>
            {TotalCredit ? (
              <div className='report-bluewidget'>
                <p>Total Credit</p>
                <h3>
                  <span>₹</span>
                  {`${(TotalCredit / 10000000).toFixed(3)}Cr`}
                </h3>
              </div>
            ) : (
              <Skeleton className='report-bluewidget' variant='rectangular' />
            )}
          </div>
        </div>
      </div>
      {/* Widget1 End*/}

      {/* Widget2*/}
      <div className='container widget rl-widget2 '>
        <div className='row rol'>
          <div className='col-lg-6 left'>
            <ul className='nav nav-tabs' id='myTab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button className='nav-link active' id='all-tab' data-bs-toggle='tab' data-bs-target='#all' type='button' role='tab' aria-controls='all' aria-selected='true'>
                  All
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link' id='credit-tab' data-bs-toggle='tab' data-bs-target='#credit' type='button' role='tab' aria-controls='credit' aria-selected='false'>
                  Credit
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link' id='debit-tab' data-bs-toggle='tab' data-bs-target='#debit' type='button' role='tab' aria-controls='debit' aria-selected='false'>
                  Debit
                </button>
              </li>
            </ul>
          </div>
          <div className='col-lg-6 right'>
            <button className='button1'>
              Download Report
            </button>
            <div className='dropdown'>
              <a className='dropdown-toggle' href='/reports-ledger' role='button' id='dropdownMenuLink' data-bs-toggle='dropdown' aria-expanded='false'>
                {curBtn}
              </a>
              <ul className='dropdown-menu'>
                {listMenu.map((CurVal, index) => {
                  return (
                    <li key={index}>
                      <button className='dropdown-item' onClick={() => listType(CurVal)}>{CurVal}</button>
                    </li>
                  )
                })}
              </ul>
            </div>
            <input type='date' id='ledger-date' name='ledger-date' onChange={DateHandal} min={fdate} max={ldate}
            />
          </div>
        </div>
        <div className='tab-content' id='myTabContent'>
          <div
            className='tab-pane show active'
            id='all'
            role='tabpanel'
            aria-labelledby='all-tab'
          >
            {/* All Table */}
            <div className='container dp-table d-none d-lg-block'>
              <table>
                <>
                  <tr className='table-head'>
                    <th>Opening Balance</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th>Balance </th>
                    <th>Exchange</th>
                    <th>CESCD</th>
                  </tr>
                </>
                {!skeleton ? (
                  <tbody>
                    {typeList.map((curElem, index) => {
                      if (
                        parseInt(`${page}0`) <= index &&
                        index < parseInt(`${page}1`) + 10
                      ) {
                        return (
                          <tr key={index}>
                            <td>{curElem.OpeningBalance}</td>
                            <td>{curElem.Debit}</td>
                            <td>{curElem.Credit}</td>
                            <td>{curElem.Balance}</td>
                            <td>{curElem.ExchSeg}</td>
                            <td>{curElem.CESCD}</td>
                          </tr>
                        )
                      } else {
                        return null
                      }
                    })}
                  </tbody>
                ) : (
                  <TableSkeleton />
                )}
              </table>
            </div>
            {/* All Table End*/}

            <div className='dp-mob-t'>
              <div className='body d-block d-lg-none'>
                {skeleton ? (
                  <DpHoldMobile />
                ) : (
                  typeList.map((CurVal, index) => {
                    if (
                      parseInt(`${page}0`) <= index &&
                      index < parseInt(`${page}1`) + 10
                    ) {
                      return (
                        <div className='mob-table-parent' key={index}>
                          <div className='mob-table'>
                            <div className='row'>
                              <div className='col-6 left'>
                                <h6>Opening Balance</h6>
                              </div>
                              <div className='col-6 right'>
                                <p>{CurVal.OpeningBalance}</p>
                              </div>
                            </div>
                          </div>
                          <div className='mob-table'>
                            <div className='row'>
                              <div className='col-6 left'>
                                <h6>Debit</h6>
                              </div>
                              <div className='col-6 right'>
                                <p>{CurVal.Debit}</p>
                              </div>
                            </div>
                          </div>
                          <div className='mob-table'>
                            <div className='row'>
                              <div className='col-6 left'>
                                <h6>Credit</h6>
                              </div>
                              <div className='col-6 right'>
                                <p>{CurVal.Credit}</p>
                              </div>
                            </div>
                          </div>
                          <div className='mob-table'>
                            <div className='row'>
                              <div className='col-6 left'>
                                <h6>Balance</h6>
                              </div>
                              <div className='col-6 right'>
                                <p>{CurVal.Balance}</p>
                              </div>
                            </div>
                          </div>
                          <div className='mob-table'>
                            <div className='row'>
                              <div className='col-6 left'>
                                <h6>Exchseg</h6>
                              </div>
                              <div className='col-6 right'>
                                <p>{CurVal.ExchSeg}</p>
                              </div>
                            </div>
                          </div>
                          <div className='mob-table'>
                            <div className='row'>
                              <div className='col-6 left'>
                                <h6>CESCD</h6>
                              </div>
                              <div className='col-6 right'>
                                <p>{CurVal.CESCD}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null;
                  })
                )}
              </div>
              <div className='tablew4-p'>
                <div className='pagination'>
                  {skeleton ? (
                    <Skeleton width={'130px'} height='20px' />
                  ) :
                    (listType.length > 10) ? <ReactPaginate
                      previousLabel={'<'}
                      breakLabel={'...'}
                      nextLabel={'>'}
                      pageCount={Math.floor(typeList.length / 10)}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={2}
                      onPageChange={pageHandle}
                    /> : ''
                  }
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane'
            id='credit'
            role='tabpanel'
            aria-labelledby='credit-tab'
          >
            {/* Credit Table */}
            <div className='container dp-table d-none d-lg-block'>
              <table>
                <thead>
                  <tr className='table-head'>
                    <th>Opening Balance</th>
                    <th>Credit</th>
                    <th>Balance </th>
                    <th>Exchange</th>
                    <th>CESCD</th>
                  </tr>
                </thead>
                <tbody>
                  {typeList.map((curElem, index) => {
                    return (
                      <tr key={index}>
                        <td>{curElem.OpeningBalance}</td>
                        <td>{curElem.Credit}</td>
                        <td>{curElem.Balance}</td>
                        <td>{curElem.ExchSeg}</td>
                        <td>{curElem.CESCD}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <div className='tablew4-p'>
                <div className='pagination'>
                  <ReactPaginate
                    previousLabel={'<'}
                    breakLabel={'...'}
                    nextLabel={'>'}
                    pageCount={Math.floor(typeList.length / 10)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={pageHandle}
                  />
                </div>
              </div>
            </div>

            {/* Credit Table End*/}
            <div className='dp-mob-t'>
              <div className='body d-block d-lg-none'>
                {typeList.map((CurVal, index) => {
                  return (
                    <div className='mob-table-parent' key={index}>
                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>Opening Balance</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.OpeningBalance}</p>
                          </div>
                        </div>
                      </div>

                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>Credit</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.Credit}</p>
                          </div>
                        </div>
                      </div>
                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>Balance</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.Balance}</p>
                          </div>
                        </div>
                      </div>
                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>Exchseg</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.ExchSeg}</p>
                          </div>
                        </div>
                      </div>
                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>CESCD</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.CESCD}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div
            className='tab-pane'
            id='debit'
            role='tabpanel'
            aria-labelledby='debit-tab'
          >
            {/* Debit Table */}
            <div className='container dp-table d-none d-lg-block'>
              <table>
                <thead>
                  <tr className='table-head'>
                    <th>Opening Balance</th>
                    <th>Debit</th>
                    <th>Balance </th>
                    <th>Exchange</th>
                    <th>CESCD</th>
                  </tr>
                </thead>
                <tbody>
                  {typeList.map((curElem, index) => {
                    return (
                      <tr key={index}>
                        <td>{curElem.OpeningBalance}</td>
                        <td>{curElem.Debit}</td>
                        <td>{curElem.Balance}</td>
                        <td>{curElem.ExchSeg}</td>
                        <td>{curElem.CESCD}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <div className='tablew4-p'>
                <div className='pagination'>
                  <ReactPaginate
                    previousLabel={'<'}
                    breakLabel={'...'}
                    nextLabel={'>'}
                    pageCount={Math.floor(typeList.length / 10)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={pageHandle}
                  />
                </div>
              </div>
            </div>

            <div className='dp-mob-t'>
              <div className='body d-block d-lg-none'>
                {typeList.map((CurVal, index) => {
                  return (
                    <div className='mob-table-parent' key={index}>
                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>Opening Balance</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.OpeningBalance}</p>
                          </div>
                        </div>
                      </div>

                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>Debit</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.Debit}</p>
                          </div>
                        </div>
                      </div>
                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>Balance</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.Balance}</p>
                          </div>
                        </div>
                      </div>
                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>Exchseg</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.ExchSeg}</p>
                          </div>
                        </div>
                      </div>
                      <div className='mob-table'>
                        <div className='row'>
                          <div className='col-6 left'>
                            <h6>CESCD</h6>
                          </div>
                          <div className='col-6 right'>
                            <p>{CurVal.CESCD}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Debit Table End*/}
          </div>
        </div>
      </div>
      {/* Widget2 End*/}
      <Footer />
    </div>
  )
}

export default ReportLedger
