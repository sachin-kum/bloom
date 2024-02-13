import React from 'react'
import Loss from '../../assets/arrow-loss.svg'
import Profit from '../../assets/arrow-profit.svg'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { oneyear } from '../../variables/dashboardvar'
import { NavLink } from 'react-router-dom';
const CustomizedDot = () => {
  return (
    <svg >

    </svg>
  );
};
const WidgetRP1 = () => {
  return (
    <div className="container widget widget1">
      <div className='reports-extra'>
        <ul className="nav mb-3" id="pills-tab" role="tablist">
          <li className="" role="presentation">
            <button className="active" id="pills-equity-tab" data-bs-toggle="pill" data-bs-target="#pills-equity" type="button" role="tab" aria-controls="pills-equity" aria-selected="true">Equity</button>
          </li>
          <li className="" role="presentation">
            <button className="" id="pills-debt-tab" data-bs-toggle="pill" data-bs-target="#pills-debt" type="button" role="tab" aria-controls="pills-debt" aria-selected="false">Debt</button>
          </li>
          <li>
            <div className="dropdown">
              <NavLink className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Today</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" href="#">1 Month</NavLink> </li>
                <li><NavLink className="dropdown-item" href="#">1 Year</NavLink> </li>
                <li><NavLink className="dropdown-item" href="#">All Time</NavLink> </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-equity" role="tabpanel" aria-labelledby="pills-equity-tab">
          <div className='row'>
            <div className='col-lg-2 blueparent'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='bluewidget'>
                    <h3><span>₹</span>162.9cr</h3>
                    <p>Total Invested</p>
                    <div className='d-flex justify-content-center'>
                      <img alt=" " src={Profit} />
                      <h6> 5% more than yesterday</h6>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='bluewidget'>
                    <h3><span>₹</span>162.9cr</h3>
                    <p>Present Earnings</p>
                    <div className='d-flex justify-content-center'>
                      <img alt=" " src={Profit} />
                      <h6> 15% more than yesterday</h6>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='bluewidget' style={{ "margin-bottom": "0px", }}>
                    <h3><span>₹</span>554.9cr</h3>
                    <p>Unrealized P&L</p>
                    <div className='d-flex justify-content-center'>
                      <img alt=" " src={Loss} />
                      <h6>  15% less than yesterday</h6>
                    </div>
                  </div>
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
        <div className="tab-pane fade" id="pills-debt" role="tabpanel" aria-labelledby="pills-debt-tab">...
        </div>
      </div>
    </div>

  );
}

export default WidgetRP1;