import React, { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Back from "../../assets/back-icon.svg";
import { getTotalArray, ProfitLoss_Cash_Detail } from "../../API";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { LoginAuth } from "../../redex/action";
import { useState } from "react";
import ReportDetails from "../../components/table_skeleton/reportDetails";
import { Skeleton } from "@mui/material";

const ReportPD = () => {
    const { state } = useLocation()
    const { ScripCode } = useParams()
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const [list, setList] = useState([])
    const [isSkeleton, setIsSkeleton] = useState(true)

    const [cookies, , removeCookie] = useCookies(['token'])

    const CheckCookie = value => {
        if (!value.status) {
            removeCookie('token')
            Dispatch(LoginAuth(''))
            Navigate('/')
        }
    }
    useEffect(() => {
        const getData = async () => {
            if (state === null) {
                Navigate('/reports-profit-and-loss')
            } else {
                const result = await ProfitLoss_Cash_Detail(cookies.token, state.fromDate, state.toDate, ScripCode)
                CheckCookie(result)
                setList(result.data)
                setIsSkeleton(false)
            }
        }
        getData()
    }, [state, ScripCode, cookies])

    return (
        <div className="report-parent">
            <style>
                {
                    `.reports {
                margin-bottom: -3px;
                border-bottom: 3px solid #516DAB;
                }`
                }
            </style>
            <Header />


            {/* Portfolio Details Title */}
            <div className="container report-top-container">
                <div className="row report-dp-row">
                    <div className="left col-lg-6 pfdetail-btn-txt">
                        <NavLink to="/reports-profit-and-loss" className="button2 btn-spacing" ><img alt=" " src={Back} /></NavLink>
                        <h2>Portfolio Details</h2>
                    </div>
                </div>
            </div>
            {/* Portfolio Details Title End */}

            {/* Portfolio Details Widget1 */}
            <div className="container pm-tables">
                {
                    !isSkeleton ? <div className="filter script-n">
                        <label>Script Name:</label>
                        <p>{state.ScripName}</p>
                    </div> : <div className="filter script-n">
                        <Skeleton width={'300px'} />
                    </div>
                }
            </div>

            <div className="container rpandl-list">
                {!isSkeleton ? <table className="table1 d-none d-lg-table">
                    <tr className='table-head'>
                        <th>Date</th>
                        <th>Stlmnt</th>
                        <th>Trade Type</th>
                        <th>Buy Qty</th>
                        <th>Buy Rate</th>
                        <th>Buy Value</th>
                        <th>Sell Qty</th>
                        <th>Sell Rate</th>
                        <th>Sell Value</th>
                    </tr>
                    {
                        list.map((item) => {
                            return <tr>
                                <td>{item.td_dt}</td>
                                <td>{item.Settlement}</td>
                                <td>{item.TradeType}</td>
                                <td>{item.BuyQty}</td>
                                <td>{item.BuyRate}</td>
                                <td>{item.BuyValue}</td>
                                <td>{item.SellQty}</td>
                                <td>{item.SellRate}</td>
                                <td>{item.SellValue}</td>
                            </tr>
                        })
                    }
                    <tr className='table-head table-data-value'>
                        <th>Total</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>{getTotalArray(list, 'BuyQty').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'BuyRate').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'BuyValue').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'SellQty').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'SellRate').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'SellValue').toFixed(2)}</th>
                    </tr>
                    <tr className='table-head table-data-value'>
                        <th>Grand Total:</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>{getTotalArray(list, 'BuyQty').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'BuyRate').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'BuyValue').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'SellQty').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'SellRate').toFixed(2)}</th>
                        <th>{getTotalArray(list, 'SellValue').toFixed(2)}</th>
                    </tr>
                </table> : <ReportDetails />}
                {
                    !isSkeleton ?
                        <div className='body d-block d-lg-none'>
                            {
                                list.map((item) => {
                                    return (
                                        <div className='mob-table-parent'>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Date</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.td_dt}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Stlmnt</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.Settlement} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Trade Type</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.TradeType} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Buy Qty</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.BuyQty} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Buy Rate</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.BuyRate} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Buy Value</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.BuyValue} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Sell Qty</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.SellQty} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Sell Rate</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.SellRate} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mob-table'>
                                                <div className='row'>
                                                    <div className='col-6 left'>
                                                        <h6>Sell Value</h6>
                                                    </div>
                                                    <div className='col-6 right'>
                                                        <p>{item.SellValue} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <div className='mob-table-parent'>
                                <div className='mob-table mob-table-bg'>
                                    <div className='row'>
                                        <div className='col-12 text-center'>
                                            <h6>Total</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Buy Qty</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'BuyQty').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Buy Rate</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'BuyRate').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Buy Value</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'BuyValue').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Sell Qty</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'SellQty').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Sell Rate</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'SellRate').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Sell Value</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'SellValue').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='mob-table-parent'>
                                <div className='mob-table mob-table-bg'>
                                    <div className='row'>
                                        <div className='col-12 text-center'>
                                            <h6>Grand Total</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Buy Qty</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'BuyQty').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Buy Rate</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'BuyRate').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Buy Value</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'BuyValue').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Sell Qty</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'SellQty').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Sell Rate</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'SellRate').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mob-table'>
                                    <div className='row'>
                                        <div className='col-6 left'>
                                            <h6>Sell Value</h6>
                                        </div>
                                        <div className='col-6 right'>
                                            <p>{getTotalArray(list, 'SellValue').toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ''
                }
            </div>
            <Footer />
        </div>
    );
}

export default ReportPD