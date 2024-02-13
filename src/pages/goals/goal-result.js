import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import WidgetGR1 from "../../components/goals-widgets/result-w1";
import WidgetGR2 from "../../components/goals-widgets/result-w2";
import Header from "../../components/header";
const Comp = ({ Location }) => {
  const Navigate = useNavigate();
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
  useEffect(() => {
    if (!Location.state) {
      Navigate("/goals");
    }
  }, []);
  function formatNumber(num) {
    if (num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
  const getRemTime = (time) => {
    const geMatDate = new Date(time);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return geMatDate.toLocaleDateString("en-US", options);
  };
  return (
    <div className="goals-parent">
      <style>
        {`.goals {
            margin-bottom: -3px;
            border-bottom: 3px solid #516DAB;
            }`}
      </style>
      <Header />

      {/* Goals Title */}
      <div className="container report-top-container">
        <div className="row report-os-row">
          <div className="left col-lg-6">
            <h2>{Location.state ? Location.state.goal : undefined}</h2>
          </div>
          <div className="right col-lg-6 d-none d-lg-flex">
            <NavLink
              to="/update-goal"
              state={{ ...Location.state }}
              className="button1 goaltwobtn"
            >
              Modify Assesment
            </NavLink>
            <a href="##" className="button1">
              Dowload XLX
            </a>
          </div>
        </div>
      </div>
      {/* Goals Title End */}

      <WidgetGR1
        data={Location.state}
        formatNumber={formatNumber}
        getRemTime={getRemTime}
        getYearsAndMonths={getYearsAndMonths}
      />

      <div className="container widget">
        <WidgetGR2
          data={Location.state}
          formatNumber={formatNumber}
          getRemTime={getRemTime}
          getYearsAndMonths={getYearsAndMonths}
        />
      </div>
      <Footer />
    </div>
  );
}
const GoalResult = () => {
  const [cookies] = useCookies(['token'])
  const Location = useLocation();
  const Navigate = useNavigate();
  if (cookies.token && Location.state) {
    return <Comp Location={Location} />
  } else if (cookies.token === undefined) {
    Navigate('/login')
  } else {
    Navigate('/goal')
  }
};

export default GoalResult;
