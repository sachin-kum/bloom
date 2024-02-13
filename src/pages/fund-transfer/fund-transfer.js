import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import $ from 'jquery';


export default class FundTransfer extends Component {

    jQueryCode = () => {

        $(".select").click(function () {
            var is_open = $(this).hasClass("open");
            if (is_open) {
                $(this).removeClass("open");
            } else {
                $(this).addClass("open");
            }
        });

        if (matchMedia('only screen and (max-width: 767px)').matches) {
            $(".select li").click(function () {

                var selected_value = $(this).html();
                var first_li = $(".select li:first-child").html();

                $(".select li:first-child").html(selected_value);
                $(this).html(first_li);

            });
        }

        // if($(window).width() >= 991){
        // }

        $(document).mouseup(function (event) {

            var target = event.target;
            var select = $(".select");

            if (!select.is(target) && select.has(target).length === 0) {
                select.removeClass("open");
            }

        });


        $('.btnNext').click(function () {
            $('.nav-tabs > .active').next('button').find('p').trigger('click');
        });

    }
    componentDidMount() {
        this.jQueryCode()
    }

    render() {
        return (

            <div className="fund-transfer">
                <style>
                    {
                        `.fund {
                            margin-bottom: -3px;
                            border-bottom: 3px solid #516DAB;
                        }`
                    }
                </style>
                <Header />
                {/* Fund Transfer Title */}
                <div className="container report-top-container">
                    <div className="row">
                        <div className="col-lg-6 left"><h2>Fund Transfer</h2></div>
                    </div>
                </div>
                {/* Fund Transfer Title End */}

                {/* Widget1*/}
                <div className="container widget rl-widget1">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='fund-bluewidget'>
                                <p>Closing Balance</p>
                                <h3><span>₹</span>50,27,423</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='fund-bluewidget'>
                                <p>Withdrawable Balance</p>
                                <h3><span>₹</span>50,27,423</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Widget1 End*/}

                {/* Widget2*/}
                <div className="container widget ft-widget2">
                    <div className="row rol">
                        <div className="col-lg-3 ncp">
                            <ul className="nav nav-tabs ft-tab select" id="myTab" role="tablist">
                                <li className="nav-item ft-tab-item" role="presentation">
                                    <button className="nav-link ft-tab-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#net-banking" type="button" role="tab" aria-controls="net-banking" aria-selected="true">Net Banking Transfer</button>
                                </li>
                                <li className="nav-item ft-tab-item" role="presentation">
                                    <button className="nav-link ft-tab-link" id="cheque-tab" data-bs-toggle="tab" data-bs-target="#cheque" type="button" role="tab" aria-controls="cheque" aria-selected="false">Cheque</button>
                                </li>
                                <li className="nav-item ft-tab-item" role="presentation">
                                    <button className="nav-link ft-tab-link" id="payout-tab" data-bs-toggle="tab" data-bs-target="#payout" type="button" role="tab" aria-controls="payout" aria-selected="false">Payout Request</button>
                                </li>
                                <span></span>
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane show active" id="net-banking" role="tabpanel" aria-labelledby="all-tab">
                                    <div className="row rol">
                                        <div className="col-lg-6 left">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="nse-tab" data-bs-toggle="tab" data-bs-target="#nse" type="button" role="tab" aria-controls="nse" aria-selected="true">NSE</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="bse-tab" data-bs-toggle="tab" data-bs-target="#bse" type="button" role="tab" aria-controls="bse" aria-selected="false">BSE</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane show active" id="nse" role="tabpanel" aria-labelledby="nse-tab">

                                            {/* All Table */}
                                            <div className='container nse-bse dp-table d-lg-block'>

                                                <div className="nse-bse-cont">
                                                    <h2>Normal Account</h2>
                                                    <div className="border"></div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Holder Name</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>For Commodities (MCX) Cheque & Online - A C Agarwal</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Bank Name </h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>HDFC Bank LTD. (Raopura Branch)</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>IFSC Code</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>HDFC0000429</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Account Number</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>04290340001265</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="nse-bse-cont">
                                                    <h2>Virtual Account</h2>
                                                    <div className="border"></div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Holder Name</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>For NSE F&O- A C Agarwal Share Brokers Pvt. Ltd.</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Bank Name </h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>HDFC Bank LTD. (Sandoz Branch,Mumbai)</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>IFSC Code</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>HDFC0000340</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Account Number</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>ACANFNO0704</p>
                                                        </div>
                                                    </div>
                                                    <div className="border"></div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Holder Name</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>For NSE F&O- A C Agarwal Share Brokers Pvt. Ltd.</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Bank Name </h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>HDFC Bank LTD. (Sandoz Branch,Mumbai)</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>IFSC Code</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>HDFC0000340</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Account Number</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>ACANFNO0704</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* All Table End*/}

                                        </div>
                                        <div className="tab-pane" id="bse" role="tabpanel" aria-labelledby="bse-tab">

                                            {/* Credit Table */}
                                            <div className='container nse-bse dp-table d-lg-block'>

                                                <div className="nse-bse-cont">
                                                    <h2>Virtual Account</h2>
                                                    <div className="border"></div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Holder Name</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>BSE Cash</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Bank Name</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>HDFC Bank</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>IFSC Code</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>HDFC0000240</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <h4>Account Number</h4>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p>ACABSEC1172</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* Credit Table End*/}

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="cheque" role="tabpanel" aria-labelledby="cheque-tab">
                                    {/* Credit Table */}
                                    <div className='container nse-bse dp-table d-lg-block'>

                                        <div className="nse-bse-cont">
                                            <h2>NSE Cash & Currency (Online - NEFT/RTGS/IMPS)</h2>
                                            <div className="border"></div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Holder Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>AC Agarwal Share Brokers Pvt. Ltd.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Bank Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>HDFC Bank Sandoz Branch, Mumbai</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>IFSC Code</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>HDFC0000240</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Account Number</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>ACANSEC0696</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="nse-bse-cont">
                                            <h2>NSE FO: AC Agarwal Share Brokers Pvt Ltd. (Online- NEFT/RTGS/IMPS)</h2>
                                            <div className="border"></div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Holder Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>AC Agarwal Share Brokers Pvt. Ltd.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Bank Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>HDFC BANK RAOPURA BRANCH</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Account Number</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>04290340000696</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="nse-bse-cont">
                                            <h2>NSE Cheque deposit : Cash</h2>
                                            <div className="border"></div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Holder Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>AC Agarwal Share Brokers Pvt. Ltd.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Bank Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>HDFC BANK RAOPURA BRANCH</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Account Number</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>04290340000696</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="nse-bse-cont">
                                            <h2>NSE Cheque deposit : FO</h2>
                                            <div className="border"></div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Holder Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>AC Agarwal Share Brokers Pvt. Ltd.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Bank Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>HDFC BANK RAOPURA BRANCH</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Account Number</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>04290340000696</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="nse-bse-cont">
                                            <h2>NSE CASH & CURRENCY (Online - NEFT/RTGS/IMPS)</h2>
                                            <div className="border"></div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Holder Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>AC Agarwal Share Brokers Pvt. Ltd.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Bank Name</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>HDFC Bank Sandoz Branch, Mumbai</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Account Number</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>04290340001265</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>RTGS CODE</h4>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p>HDFC0000240</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Credit Table End*/}
                                </div>
                                <div className="tab-pane" id="payout" role="tabpanel" aria-labelledby="payout-tab">

                                    <div className="row rp-input">
                                        <h2>Request Payout</h2>

                                        <div className="cg-input-box col-lg-6">
                                            <label htmlFor="how-much">How Much?</label>
                                            <input type="text" name="how-much" placeholder="₹ Enter Amount"></input>
                                        </div>
                                        <div className="col-lg-2 rp-btn-col">
                                            <a href="#/" className="rp-btn">Request</a>
                                        </div>
                                    </div>

                                    {/* --- Deposit & Withdrawl Tables --- */}
                                    <div className="row rol dw-table">
                                        <div className="col-lg-6 left">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="deposits-tab" data-bs-toggle="tab" data-bs-target="#deposits" type="button" role="tab" aria-controls="deposits" aria-selected="true">Deposits</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="withdrawl-tab" data-bs-toggle="tab" data-bs-target="#withdrawl" type="button" role="tab" aria-controls="withdrawl" aria-selected="false">Withdrawl</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane show active" id="deposits" role="tabpanel" aria-labelledby="deposits-tab">

                                                {/* Credit Table */}
                                                <div className='container ft-table d-none d-lg-block'>

                                                    <table>
                                                        <tr className='table-head'>
                                                            <th>Deposit Initiated On</th>
                                                            <th>Amount</th>
                                                            <th>Payment Method </th>
                                                            <th>Bank</th>
                                                            <th>Status</th>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div className='tablew4-p'>
                                                        <div className="pagination">
                                                            <a href="##">&lt;</a>
                                                            <a href="##" className="active">1</a>
                                                            <a href="##">2</a>
                                                            <a href="##">3</a>
                                                            <a href="##">4</a>
                                                            <a href="##">5</a>
                                                            <a href="##">6</a>
                                                            <a href="##">&gt;</a>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* Credit Table End*/}

                                                <div className='dp-mob-t'>
                                                    <div className='body d-block d-lg-none'>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Deposit Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Deposit Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Deposit Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Deposit Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Deposit Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="tab-pane" id="withdrawl" role="tabpanel" aria-labelledby="withdrawl-tab">

                                                {/* Credit Table */}
                                                <div className='container ft-table d-none d-lg-block'>

                                                    <table>
                                                        <tr className='table-head'>
                                                            <th>Withdrawl Initiated On</th>
                                                            <th>Amount</th>
                                                            <th>Payment Method </th>
                                                            <th>Bank</th>
                                                            <th>Status</th>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03-08-2022 6:00 PM</td>
                                                            <td>₹2200.00</td>
                                                            <td>UPI</td>
                                                            <td>HDFC Bank</td>
                                                            <td>
                                                                <a href="#/" className="button1">Success</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div className='tablew4-p'>
                                                        <div className="pagination">
                                                            <a href="##">&lt;</a>
                                                            <a href="##" className="active">1</a>
                                                            <a href="##">2</a>
                                                            <a href="##">3</a>
                                                            <a href="##">4</a>
                                                            <a href="##">5</a>
                                                            <a href="##">6</a>
                                                            <a href="##">&gt;</a>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* Credit Table End*/}

                                                <div className='dp-mob-t'>
                                                    <div className='body d-block d-lg-none'>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Withdrawl Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Withdrawl Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Withdrawl Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Withdrawl Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='mob-table-parent'>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Withdrawl Initiated On</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>03-08-2022 6:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Amount</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>₹2200.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Payment Method</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>UPI</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Bank</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>HDFC Bank</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='mob-table'>
                                                                <div className='row'>
                                                                    <div className='col-6 left'>
                                                                        <h6>Status</h6>
                                                                    </div>
                                                                    <div className='col-6 right'>
                                                                        <p>
                                                                            <a href="#/" className="button1">Success</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* --- Deposit & Withdrawl Tables End --- */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Widget2 End*/}
                <Footer />
            </div>
        );
    }
}

// export default FundTransfer;