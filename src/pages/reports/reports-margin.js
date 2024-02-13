import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Reporti from '../../assets/margin-report.svg';

const ReportMargin = () => {
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

            {/* Margin Report Title */}
            <div className="container report-top-container">
                <div className="row report-os-row">
                    <div className="left col-6"><h2>Margin Report</h2></div>
                    <div className="right col-6">
                    </div>
                </div>
            </div>
            {/* Margin Report Title End */}

            {/* Margin Report Table */}

            <div className='container os-table d-none d-lg-block'>

                <div className="row rpandl-list">
                    <div className="col-lg-9 left">
                        <div>
                            <label>Segment</label>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle" href="/reports-margin" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">All</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><button className="dropdown-item">All</button></li>
                                    <li><button className="dropdown-item">Combined</button></li>
                                </ul>
                            </div>

                        </div>
                        <div className="one">
                            <label>Financial Year</label>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle" href="/reports-margin" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">2021 - 2022</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><button className="dropdown-item" >2021 - 2022</button></li>
                                    <li><button className="dropdown-item" >2021 - 2022</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="one">
                            <label>Report Type</label>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle" href="/reports-margin" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Margin Report</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><button className="dropdown-item" >Margin Report</button></li>
                                    <li><button className="dropdown-item" >Margin Report</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="one-button">
                            <button className="button1" >Get Report</button>
                        </div>


                    </div>
                </div>
                <table className="margin-report-table">
                    <tr className='table-head'>
                        <th>Trade Date</th>
                        <th>Report Type</th>
                        <th>Preview Signed File</th>
                        <th>Download Signed File</th>
                    </tr>
                    <tr>
                        <td>02-11-2021</td>
                        <td>MARGIN REPORT</td>
                        <td>MG_6JAFTJ_20221102_FON.PDF</td>
                        <td><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></td>
                    </tr>
                    <tr>
                        <td>02-11-2021</td>
                        <td>MARGIN REPORT</td>
                        <td>MG_6JAFTJ_20221102_FON.PDF</td>
                        <td><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></td>
                    </tr>
                    <tr>
                        <td>02-11-2021</td>
                        <td>MARGIN REPORT</td>
                        <td>MG_6JAFTJ_20221102_FON.PDF</td>
                        <td><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></td>
                    </tr>
                    <tr>
                        <td>02-11-2021</td>
                        <td>MARGIN REPORT</td>
                        <td>MG_6JAFTJ_20221102_FON.PDF</td>
                        <td><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></td>
                    </tr>
                    <tr>
                        <td>02-11-2021</td>
                        <td>MARGIN REPORT</td>
                        <td>MG_6JAFTJ_20221102_FON.PDF</td>
                        <td><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></td>
                    </tr>
                    <tr>
                        <td>02-11-2021</td>
                        <td>MARGIN REPORT</td>
                        <td>MG_6JAFTJ_20221102_FON.PDF</td>
                        <td><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></td>
                    </tr>
                    <tr>
                        <td>02-11-2021</td>
                        <td>MARGIN REPORT</td>
                        <td>MG_6JAFTJ_20221102_FON.PDF</td>
                        <td><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></td>
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

            <div className="container dp-mob-t">
                <div className='body d-block d-lg-none'>
                    <div className='mob-table-parent'>
                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Trade Date</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>02-11-2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Report Type</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>MARGIN REPORT</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Preview Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p style={{ "lineBreak": "anywhere" }}>MG_6JAFTJ_20221102_FON.PDF</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Download Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mob-table-parent'>
                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Trade Date</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>02-11-2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Report Type</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>MARGIN REPORT</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Preview Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p style={{ "lineBreak": "anywhere" }}>MG_6JAFTJ_20221102_FON.PDF</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Download Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mob-table-parent'>
                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Trade Date</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>02-11-2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Report Type</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>MARGIN REPORT</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Preview Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p style={{ "lineBreak": "anywhere" }}>MG_6JAFTJ_20221102_FON.PDF</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Download Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mob-table-parent'>
                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Trade Date</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>02-11-2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Report Type</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>MARGIN REPORT</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Preview Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p style={{ "lineBreak": "anywhere" }}>MG_6JAFTJ_20221102_FON.PDF</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Download Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mob-table-parent'>
                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Trade Date</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>02-11-2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Report Type</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>MARGIN REPORT</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Preview Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p style={{ "lineBreak": "anywhere" }}>MG_6JAFTJ_20221102_FON.PDF</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Download Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mob-table-parent'>
                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Trade Date</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>02-11-2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Report Type</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>MARGIN REPORT</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Preview Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p style={{ "lineBreak": "anywhere" }}>MG_6JAFTJ_20221102_FON.PDF</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Download Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mob-table-parent'>
                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Trade Date</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>02-11-2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Report Type</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>MARGIN REPORT</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Preview Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p style={{ "lineBreak": "anywhere" }}>MG_6JAFTJ_20221102_FON.PDF</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Download Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mob-table-parent'>
                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Trade Date</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>02-11-2021</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Report Type</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>MARGIN REPORT</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Preview Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p style={{ "lineBreak": "anywhere" }}>MG_6JAFTJ_20221102_FON.PDF</p>
                                </div>
                            </div>
                        </div>

                        <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Download Signed File</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p><a href="##"><img alt=" " className="img-fluid" src={Reporti} /></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Margin Report Table End*/}

            <Footer />
        </div>
    );
}

export default ReportMargin;