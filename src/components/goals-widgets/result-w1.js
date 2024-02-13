import axios from "axios";
import React, { useEffect, useState } from "react";

const WidgetGR1 = ({ data, formatNumber, getRemTime, getYearsAndMonths }) => {
  const maturityDate = getRemTime(data ? data.remaining_time : undefined);
  const [assinment, setAssinment] = useState()
  useEffect(() => {
    if (data && !assinment) {
      axios.get(`https://urlsdemo.xyz/tradeweb/api/risk-assignment/${data.user_id}/${data.risk_key}`).then((responce) => {
        setAssinment(responce.data.data[0])
      })
    }
  })
  return (
    <div className="container widget widgetgr1">
      <div className="row">
        <div className="col-7 left">
          <h2>{data ? data.goal : undefined}</h2>
        </div>
        <div className="col-5 right">
          <h6>{assinment ? assinment.final_bar : ""}</h6>
          <h6>Active</h6>
        </div>
      </div>
      <h3>Plan your financial goals effectively and achieve them on time</h3>
      <div className="row goalnumrow">
        <div className="col-lg-2 col-6">
          <h1>
            <span>₹</span>
            {data ? data.funds / 1000 : undefined}k
          </h1>{" "}
          <p>Goal Value</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-2 col-6">
          <h1>
            <span>₹</span>62.9k
          </h1>{" "}
          <p>Earned</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-2 col-6">
          <h1>
            <span>₹</span>1162.9k
          </h1>{" "}
          <p>Remaining Amount</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-2 col-6">
          <h1>
            {data ? getYearsAndMonths(data.remaining_time).years : undefined}
          </h1>{" "}
          <p>Years Remaining</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 left">
          <h5>
            Need to save ₹{formatNumber(data ? data.funds : undefined)} for ‘{data.goal}’ by {maturityDate}
          </h5>
        </div>
        <div className="col-lg-6 right">
          <h5>Maturity date: {maturityDate}</h5>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar progress-market" style={{ width: "40%" }}>
          Market Value <span>₹</span>62.9K
        </div>
        <div
          className="progress-bar progress-invested"
          style={{ width: "20%" }}
        >
          Invested <span>₹</span>162.9K
        </div>
        <div
          className="progress-bar progress-value"
          style={{ width: "-webkit-fill-available" }}
        >
          Goal <span>₹</span>
          {formatNumber(data ? data.funds : undefined)}
        </div>
      </div>
      <div className="goalwr1-des">
        <h4>
          Need to invest ₹{formatNumber(data ? data.funds : undefined)} for ‘{data.goal}’ by {maturityDate}
        </h4>
        <h4>
          Suggested amount to save every month: ₹{data ? data.funds : undefined}{" "}
          per annum
        </h4>
      </div>
    </div>
  );
};

export default WidgetGR1;
