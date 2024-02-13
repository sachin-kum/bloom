import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { UserProfile } from "../../API";
import Footer from "../../components/footer";
import GGoals from "../../components/goals-widgets/goals-grid";
import Header from "../../components/header";
import { LoginAuth } from "../../redex/action";

const Goals = () => {
  const { goalAdder } = useSelector((state) => state);
  const [cookie, , removeCookie] = useCookies(["token"]);
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const CheckCookie = (value) => {
    if (!value.status) {
      removeCookie("token");
      Dispatch(LoginAuth(""));
      Navigate("/");
    }
  };
  const [goalList, setGoalList] = useState();
  useEffect(() => {
    if (goalAdder.length > 0) {
      setGoalList(goalAdder);
    } else {
      const getdata = async () => {
        const data = await UserProfile(cookie.token);
        CheckCookie(data);
        const responce = await axios(
          `https://urlsdemo.xyz/tradeweb/api/show-risk/${data.data[0].ClientCode}`
        );
        setGoalList(responce.data.data);
      };
      getdata();
    }
  }, []);

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
          <div className="left col-6">
            <h2>Goals</h2>
          </div>
          <div className="right col-6">
            <NavLink to="/create-goal" className="button1">
              Create Goal
            </NavLink>
          </div>
        </div>
      </div>
      {/* Goals Title End */}
      <div className="container goal-box-parent">
        <div className="row">
          {goalList &&
            goalList.map((curGoal, index) => {
              return <GGoals key={index} data={curGoal} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Goals;
