import { Skeleton } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import ReactPaginate from 'react-paginate'
import { OutStandingPosition } from '../../API'
import Footer from '../../components/footer'
import Header from '../../components/header'
import OutStandingPositionMobile from '../../components/table_skeleton/OutStandingPositionMobile'

const ReportOS = () => {
  const [page, SetPage] = useState(0)
  const pageHandle = event => {
    SetPage(event.selected)
  }
  const [isSkeleton, setIsSkeleton] = useState(true)
  const curDate = new Date().toLocaleDateString('sv-SE').split('-').join('')
  const [cookies] = useCookies(['token'])
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const result = await OutStandingPosition(cookies.token, curDate)
      setData(result.data)
      setIsSkeleton(false)
    }
    getData()
  }, [])
  return (
    <div className='report-parent'>
      <style>
        {`.reports {
                margin-bottom: -3px;
                border-bottom: 3px solid #516DAB;
                }`}
      </style>
      <Header />

      {/* Outstanding Title */}
      <div className='container report-top-container'>
        <div className='row report-os-row'>
          <div className='left col-6'>
            <h2>Outstanding</h2>
          </div>
          <div className='right col-6'>
            <button className='button1'>
              Get Report
            </button>
          </div>
        </div>
      </div>
      {/* Outstanding Title End */}

      {/* Outstanding Table */}

      <div className='container os-table d-none d-lg-block'>
        <table>
          <tr className='table-head'>
            <th>Type</th>
            <th>ShortName</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Net</th>
            <th>CESCD</th>
            <th>AvgRate</th>
            <th>Closeprice</th>
            <th>Closing</th>
            <th>SortOrder</th>
            <th>ExchSeg</th>
          </tr>
          {data.map((curVal, index) => {
            if (parseInt(`${page}0`) <= index && index < parseInt(`${page}1`) + 10) {
              return (
                <tr>
                  <td>{curVal.Type}</td>
                  <td>{curVal.ShortName}</td>
                  <td>{curVal.Buy}</td>
                  <td>{curVal.Sell}</td>
                  <td>{curVal.Net}</td>
                  <td>{curVal.CESCD}</td>
                  <td>{curVal.AvgRate}</td>
                  <td>{curVal.Closeprice}</td>
                  <td>{curVal.Closing}</td>
                  <td>{curVal.SortOrder}</td>
                  <td>{curVal.ExchSeg}</td>
                </tr>
              )
            }
            return null
          })}
        </table>

        <div className='tablew4-p'>
          <div className='pagination'>
            {isSkeleton ? (
              <Skeleton width={'130px'} height='20px' />
            ) : data.length > 10 ? (
              <ReactPaginate
                previousLabel={'<'}
                breakLabel={'...'}
                nextLabel={'>'}
                pageCount={Math.floor(data.length / 10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={pageHandle}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      <div className='container dp-mob-t'>
        <div className='body d-block d-lg-none'>
          {isSkeleton ? (
            <OutStandingPositionMobile />
          ) : (
            data.map((curVal, index) => {
              if (parseInt(`${page}0`) <= index && index < parseInt(`${page}1`) + 10) {
                return (
                  <div className='mob-table-parent'>
                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>Type</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.Type}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>ShortName</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.ShortName}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>Buy</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.Buy}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>Sell</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.Sell}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>Net</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.Net}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>CESCD</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.CESCD}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>AvgRate</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.AvgRate}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>Closeprice</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.Closeprice}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>Closing</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.Closing}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>SortOrder</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.SortOrder}</p>
                        </div>
                      </div>
                    </div>

                    <div className='mob-table'>
                      <div className='row'>
                        <div className='col-6 left'>
                          <h6>ExchSeg</h6>
                        </div>
                        <div className='col-6 right'>
                          <p>{curVal.ExchSeg}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })
          )}
        </div>
        <div className='tablew4-p'>
          <div className='pagination'>
            {isSkeleton ? (
              <Skeleton width={'130px'} height='20px' />
            ) : data.length > 10 ? (
              <ReactPaginate
                previousLabel={'<'}
                breakLabel={'...'}
                nextLabel={'>'}
                pageCount={Math.floor(data.length / 10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={pageHandle}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      {/* Outstanding Table End*/}

      <Footer />
    </div>
  )
}

export default ReportOS
