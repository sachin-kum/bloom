import React, { useEffect, useState } from "react";
import GoalInfo from "../../assets/goalinfo.svg";
import { UserProfile } from "../../API";
import { goalResult } from "../../redex/action";
import axios from "axios";
import {
  ProfitLoss_Cash_Summary,
  ProfitLoss_FO_Summary,
  getTotalArray,
  ProfitLoss_Commodity_Summary,
} from "../../API";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { LoginAuth } from "../../redex/action";
const Widget2 = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const CheckCookie = (value) => {
    if (value.status !== true && value.status !== 200) {
      removeCookie("token");
      Dispatch(LoginAuth(""));
      Navigate("/login");
    }
  };
  const { token } = cookies;
  const [UnRealized_PL, SetUnRealized_PL] = useState();
  const [Realized_PL, SetRealized_PL] = useState();
  const [FoSummaryData, SetFoSummaryData] = useState();
  const [CommoditySummary, SetCommoditySummary] = useState();

  const CurentDate = new Date().toLocaleDateString("en-ZA").split("/").join("");
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const getDateForYear = () => {
    if (month <= 2) {
      return { fromDate: parseInt(`${year - 1}0401`) };
    } else {
      return { fromDate: parseInt(`${year}0401`) };
    }
  };

  const [goalAdder, setGoalAdder] = useState();
  const [curGoal, setCurGoal] = useState();
  useEffect(() => {
    const getdata = async () => {
      const data = await UserProfile(cookies.token);
      if (data && data.status !== false) {
        CheckCookie(data);
        const responce = await axios(
          `https://urlsdemo.xyz/tradeweb/api/show-risk/${data.data[0].ClientCode}`
        );
        setGoalAdder(responce.data.data);
        Dispatch(goalResult(responce.data.data));
        setCurGoal(
          responce.data.data.length > 0 ? responce.data.data[0] : undefined
        );
      }
    };
    getdata();
  }, []);
  function formatNumber(num) {
    if (num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
  const getRemTime = (time) => {
    const geMatDate = new Date(time);
    const options = { year: "numeric", day: "2-digit", month: "short" };
    return geMatDate.toLocaleDateString("en-US", options);
  };
  useEffect(() => {
    const getData = async () => {
      // ProfitLoss_Cash_Summarys
      const { fromDate } = getDateForYear();
      const Cash_Summary = await ProfitLoss_Cash_Summary(
        token,
        fromDate,
        CurentDate
      );
      CheckCookie(Cash_Summary);
      // UnRealized_PL
      const UnrealData = getTotalArray(
        await Cash_Summary.data,
        "UnRealized_PL"
      );
      SetUnRealized_PL(UnrealData);
      // Realized_PL
      const RealData = getTotalArray(await Cash_Summary.data, "Realized_PL");
      SetRealized_PL(RealData);

      const FO_Summary = await ProfitLoss_FO_Summary(
        token,
        fromDate,
        CurentDate
      );
      const MTM_NF = await getTotalArray(FO_Summary.MTM_NF, "MTM");
      const MTM_NK = await getTotalArray(FO_Summary.MTM_NK, "MTM");
      const MTM_MF = await getTotalArray(FO_Summary.MTM_MF, "MTM");
      const MTM_MK = await getTotalArray(FO_Summary.MTM_MK, "MTM");
      const MTM_BF = await getTotalArray(FO_Summary.MTM_BF, "MTM");
      const MTM_BK = await getTotalArray(FO_Summary.MTM_BK, "MTM");
      SetFoSummaryData(MTM_NF + MTM_NK + MTM_MF + MTM_MK + MTM_BF + MTM_BK);

      // ProfitLoss_Commodity_Summary
      const ComSumData = await ProfitLoss_Commodity_Summary(
        token,
        fromDate,
        CurentDate
      );
      const Commodity_Summary_M = await getTotalArray(
        ComSumData.Commodity_Summary_M,
        "MTM"
      );
      const Commodity_Summary_N = await getTotalArray(
        ComSumData.Commodity_Summary_N,
        "MTM"
      );
      SetCommoditySummary(Commodity_Summary_M + Commodity_Summary_N);
    };
    getData();
  }, []);

  const [totalEarned, settotalEarned] = useState();
  useEffect(() => {
    settotalEarned(
      (UnRealized_PL ? UnRealized_PL : 0) +
      (Realized_PL ? Realized_PL : 0) +
      (FoSummaryData ? FoSummaryData : 0) +
      (CommoditySummary ? CommoditySummary : 0)
    );
  });

  if (curGoal) {
    return (
      <div className="container widget widget2">
        <div className="row head">
          <div className="col-lg-6 left">
            <h2>Your Goals</h2>
            <div className="dropdown">
              <NavLink
                className="dropdown-toggle"
                to="/"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {curGoal && curGoal.goal}
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {goalAdder &&
                  goalAdder.map((curItem) => {
                    return (
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => setCurGoal(curItem)}
                        >
                          {curItem.goal}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 right">
            <NavLink to="/goals" className="button1">
              View Goals
            </NavLink>
          </div>
        </div>
        <div className="row goalnumrow">
          <div className="col-lg-3 col-6">
            {curGoal ? (
              <>
                <h3>
                  <span>₹</span>
                  {curGoal && curGoal.funds}
                </h3>
                <p>Goal Value</p>
              </>
            ) : (
              <h3>wait...</h3>
            )}
          </div>
          <div className="col-lg-3 col-6">
            <h3 className={totalEarned < 0 ? "profit-style" : "loss-style"}>
              {totalEarned ? (
                <>
                  <span>₹</span>
                  {(totalEarned / 1000).toFixed(2)}k
                </>
              ) : (
                "Loading.."
              )}
            </h3>
            <p>Earned</p>
          </div>
          <div className="col-lg-3 col-6">
            <h3 className={totalEarned < 0 ? "profit-style" : "loss-style"}>
              {totalEarned && curGoal ? (
                <>
                  <span>₹</span>
                  {Number(curGoal.funds) -
                    Number((totalEarned / 1000).toFixed(2))}
                  k
                </>
              ) : (
                "Loading.."
              )}
            </h3>
            <p>Remaining Amount</p>
          </div>
          <div className="col-lg-3 col-6">
            {curGoal ? (
              <>
                <h3>{curGoal.years2}</h3> <p>Years Remaining</p>
              </>
            ) : (
              <h3>wait..</h3>
            )}
          </div>
        </div>
        <div className="row goalinfo">
          <h5>
            <img alt={GoalInfo} src={GoalInfo} /> Need to save ₹
            {curGoal && formatNumber(curGoal.funds)} for ‘{curGoal.goal}’ by {curGoal && getRemTime(curGoal.remaining_time)}
          </h5>
        </div>
        <NavLink to="/" className="button1 mobbutton d-block d-lg-none d-md-none">
          View Goals
        </NavLink>
      </div>
    );
  } else {
    return <></>
  }

};

export default Widget2;
