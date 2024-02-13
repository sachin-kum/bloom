import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Moderate from "../../assets/gresult-moderate.png";
import Low from '../../assets/gresult-low.png';
import High from '../../assets/gresult-high.png';

const WidgetGR2 = ({ data, formatNumber, getRemTime, getYearsAndMonths }) => {
  const [assinment, setAssinment] = useState()
  useEffect(() => {
    if (data && !assinment) {
      axios.get(`https://urlsdemo.xyz/tradeweb/api/risk-assignment/${data.user_id}/${data.risk_key}`).then((responce) => {
        setAssinment(responce.data.data[0])
      })
    }
  })
  return (
    <div className="widget widgetgr2">
      <h2>Risk Assessment</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="risk-box">
            <h2>Risk Need</h2>
            <h4 className="low">{assinment ? assinment.risk_need : ''}</h4>
            <p>
              You need to save <b>
                <span>₹</span> {assinment ? formatNumber(assinment.risk_need_anum) : ''}
              </b> Per Annum for your {data ? data.goal : ''} in <b>
                {assinment
                  ? assinment.risk_need_year
                  : undefined} years
              </b>
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="risk-box">
            <h2>Risk Capacity</h2>
            <h4 className="medium">{assinment ? assinment.risk_capacity : ''}</h4>
            <div className="row">
              <div className="col-4">
                <p>
                  Time Horizon <br />
                  <b>
                    {assinment
                      ? assinment.risk_capacity_hori
                      : undefined} Years
                  </b>
                </p>
              </div>
              <div className="col-4">
                <p>
                  Liquidity Needs <br />
                  <b>{assinment ? assinment.risk_capacity_liquity : ''}</b>
                </p>
              </div>
              <div className="col-4">
                <p>
                  Total Savings <br />
                  <b>{assinment ? assinment.risk_capacity_total : ''}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="risk-box">
            <h2>Risk Tolerance</h2>
            <h4 className="medium"> {assinment ? assinment.risk_tolerance_bar : ''}</h4>
            <div className="row">
              <div className="col-4">
                <p>
                  Risk Tolerance <br />
                  <b>
                    {assinment
                      ? assinment.risk_tolerance
                      : ''}
                  </b>
                </p>
              </div>
              <div className="col-4">
                <p>
                  Risk Preference<br />
                  <b>{assinment ? assinment.risk_tolerance_preference : ''}</b>
                </p>
              </div>
              <div className="col-4">
                <p>
                  Financial Knowledge <br />
                  <b>{assinment ? assinment.risk_tolerance_financial : ''}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="widget">
        <div className="row">
          <div className="col-lg-5">
            <div className="risk-box-2">
              <h2>Result</h2>
              {assinment ? assinment.final_bar === "Low" ? <img alt=" " className="img-fluid" src={Low} /> : assinment.final_bar === "Low" ? <img alt=" " className="img-fluid" src={Moderate} /> : assinment.final_bar === "Low" ? <img alt=" " className="img-fluid" src={High} /> : '' : ''}

              <p>
                On the basis of the above 3 criteria we will
                <br className="d-none d-lg-block" /> define the risk profiling
                of the customer
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="risk-box-2">
              <h2>Insights</h2>
              <p className="rb-2p">
                Since your risk needs exceeds your risk capacity and loss
                tolerance, it is required to increase some volatility in the
                portfolio to meet your goals or will have to reevaluate your
                goals to align loss tolerance and risk capacity with your risk
                needs. Also you have a moderate ability to take risk and hence
                can withstand only a moderately volatile strategy as per your
                risk assessment </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetGR2;
