import React from "react";
import { NavLink } from "react-router-dom";
const GGoals = ({ data }) => {
  const getYearsAndMonths = (remaining_time) => {
    const futureDate = new Date(remaining_time);
    const currentDate = new Date();
    const diffTime = futureDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return {
      years: Math.floor(diffDays / 365),
      months: Math.floor((diffDays % 365) / 30),
    };
  };

  return (
    <div className="col-lg-4">
      <div className="goals-box">
        <h2>{data.goal}</h2>
        <div className="row">
          <div className="col-6 left">
            <label>
              <span>₹</span>18,000
            </label>
          </div>
          <div className="col-6 right">
            <label>
              <span>₹</span>
              {data.funds}
            </label>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: "20%" }}></div>
        </div>
        <h6>
          Remaining time: {getYearsAndMonths(data.remaining_time).years} Years{" "}
          {getYearsAndMonths(data.remaining_time).months} Months
        </h6>
        <NavLink to="/goal-result" state={{ ...data }} className="button2">
          View Goals
        </NavLink>
      </div>
    </div>
  );
};

export default GGoals;
