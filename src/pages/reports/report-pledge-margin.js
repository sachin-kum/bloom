import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { getTotalArray, Request_Get_PledgeForMargin, Request_Post_PledgeForMargin, UserProfile } from "../../API";
import Footer from "../../components/footer";
import Header from "../../components/header";


const ReportDPPM = () => {
  const [cookies] = useCookies(['token'])
  const [curDemat, setCurDemat] = useState()
  const Navigate = useNavigate()
  const [DematAccountList, setDematAccountList] = useState()

  const [isData, setIsData] = useState(true)
  const [marginData, setmarginData] = useState([])

  const [requestQty, setRequestQty] = useState({})
  const [totalRequestQty, setTotalRequestQty] = useState(0)
  const request_QtyHandle = event => {
    const { name, value, id } = event.target
    if (Number(id) >= value) {
      setRequestQty({
        ...requestQty,
        [name]: value
      })
    } else {
      setRequestQty({
        ...requestQty,
        [name]: Number(id)
      })
    }
  }

  useEffect(() => {
    if (cookies.token) {
      UserProfile(cookies.token).then((value) => {
        setCurDemat(value.data[0].DematAccountNo)
        const responce = value.data.map((curUser) => {
          return curUser.DematAccountNo
        })
        setDematAccountList(responce)
      })
    } else {
      Navigate('/login')
    }
  }, [])

  useEffect(() => {
    if (curDemat) {
      Request_Get_PledgeForMargin(cookies.token, curDemat).then((responce) => {
        setIsData(false)
        setmarginData(responce)
        let list = {}
        responce.map((curItem, index) => {
          list[`request_Qty${index}`] = '0'
          return curItem
        })
        setRequestQty(list)

      })
    }
  }, [curDemat])

  useEffect(() => {
    let total = 0
    for (const key in requestQty) {
      total = total + parseInt(requestQty[key])
      setTotalRequestQty(total)
    }
  })

  const SaveData = async () => {
    const Data = marginData.map((curItem, index) => {
      return {
        dematActNo: curDemat,
        securities_Code: curItem.ScripCode,
        request_Qty: `${requestQty[`request_Qty${index}`]}`
      }
    })

    Request_Post_PledgeForMargin(cookies.token, Data).then((respomce) => {
      if (respomce.data.data) {
        Navigate('/reports-dp-holdings')
      }
    })
  }
  const submitMobile = (ScripCode, request_Qty) => {
    const Data = [{
      dematActNo: curDemat,
      securities_Code: ScripCode,
      request_Qty: `${request_Qty}`
    }]
    Request_Post_PledgeForMargin(cookies.token, Data).then((respomce) => {
      if (respomce.data.data) {
        Navigate('/reports-dp-holdings')
      }
    })
  }
  return (
    <div className="report-parent">
      <style>
        {`.pledge-for-margin {
                margin-bottom: -3px;
                border-bottom: 3px solid #516DAB;
                }`}
      </style>
      <Header />
      {/* Pledge Margin Title */}
      <div className="container report-top-container">
        <div className="row report-dp-row">
          <div className="left col-lg-6">
            <h2>Pledge For Margin</h2>
          </div>
        </div>
      </div>
      {/* Pledge Margin Title End */}

      {/* Pledge Margin Widget1 */}
      {
        (isData) ? <div className="container pm-tables"> <Skeleton width={'300px'} height={30} /></div> : <div className="container pm-tables">
          <div className="filter">
            <label>Demat Account Number:</label>
            <div className="dropdown">
              <a
                className="btn dropdown-toggle"
                href='/pledge-for-margin'
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {curDemat}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {
                  DematAccountList.map((curAc, index) => {
                    return <li key={index}>
                      <button className="dropdown-item">{curAc}</button>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
          <table className="table1 d-none d-lg-table pm-table2">
            <tr>
              <th colSpan={3}>Securities</th>
              <th colSpan={5}>Holding</th>
              <th colSpan={2}>Pledge Request</th>
            </tr>
            <tr>
              {/* Securities */}
              <th>Code</th>
              <th>Name</th>
              <th>ISIN</th>
              {/* Holding */}
              <th>Rate</th>
              <th>Qty</th>
              <th>Value</th>
              <th>Haircut</th>
              <th>Net Value</th>
              {/* Pledge Request */}
              <th>Qty</th>
              <th>Value</th>
            </tr>
            {
              marginData.map((curItem, index) => {
                return <tr>
                  <td>{curItem.ScripCode}</td>
                  <td>{curItem.ScripName}</td>
                  <td>{curItem.ISIN}</td>

                  <td>{curItem.Holding_Rate}</td>
                  <td>{curItem.Holding_Qty}</td>
                  <td>{curItem.Holding_Value}</td>
                  <td>{curItem.HairCut}</td>
                  <td>{curItem.Holding_NetValue}</td>

                  <td className="qtyinput">
                    <input type="number" placeholder="0" name={`request_Qty${index}`} id={curItem.Holding_Qty} value={requestQty[`request_Qty${index}`]} onChange={request_QtyHandle} />
                  </td>
                  <td>
                    {(requestQty[`request_Qty${index}`] * curItem.Holding_NetValue / curItem.Holding_Qty).toFixed(2)}
                  </td>
                </tr>
              })
            }<tr>
              <td></td>
              <td></td>
              <td></td>

              <td>total</td>
              <td>{getTotalArray(marginData, 'Holding_Qty')}</td>
              <td>{getTotalArray(marginData, 'Holding_Value').toFixed(2)}</td>
              <td></td>
              <td>{getTotalArray(marginData, 'Holding_NetValue')}</td>

              <td>{totalRequestQty}</td>
              <td>{(totalRequestQty * getTotalArray(marginData, 'Holding_NetValue') / getTotalArray(marginData, 'Holding_Qty')).toFixed(2)}</td>
            </tr>
          </table>
          <div className="container tableselect d-none d-lg-block">
            <div className="row">
              <div className="col-lg-6 left">
                {/* <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Select All
                  </label>
                </div> */}
              </div>
              <div className="col-lg-6 right">
                <button className="button1" onClick={SaveData}>Save</button>
                <button className="button2">Cancel</button>
              </div>
            </div>
          </div>

          <div className="body d-block d-lg-none">
            {
              marginData ? marginData.map((curItem, index) => {
                return (
                  <div className="mob-table-parent" key={index}>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Code</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{curItem.ScripCode}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Name</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{curItem.ScripName}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>ISIN</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{curItem.ISIN}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Rate</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{curItem.Holding_Rate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Qty</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{curItem.Holding_Qty}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Value</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{curItem.Holding_Value}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Haircut</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{curItem.HairCut}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Net Value</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{curItem.Holding_NetValue}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Qty</h6>
                        </div>
                        <div className="col-6 right">
                          <p>
                            <input type="number" className="mob-input-pm" placeholder="0" name={`request_Qty${index}`} id={curItem.Holding_Qty} value={requestQty[`request_Qty${index}`]} onChange={request_QtyHandle} />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table">
                      <div className="row">
                        <div className="col-6 left">
                          <h6>Value</h6>
                        </div>
                        <div className="col-6 right">
                          <p>{(requestQty[`request_Qty${index}`] * curItem.Holding_NetValue / curItem.Holding_Qty).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mob-table buttons-mob">
                      <div className="row">
                        <div className="col-5 left">
                          {/* <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Select All
                          </label> */}
                        </div>
                        <div className="col-7 right">
                          <button className="button1" onClick={() => { submitMobile(curItem.ScripCode, requestQty[`request_Qty${index}`]) }}>Save</button>
                          <button className="button2">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }) : ''
            }
          </div>
        </div>
      }
      <Footer />
    </div >
  );
};

export default ReportDPPM;
