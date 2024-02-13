import React, { useEffect } from "react";
import $ from "jquery";
import Widget1 from "../components/dashboard-widgets/portfolio-summary.js";
import Widget4 from "../components/dashboard-widgets/profit-loss.js";
import Widget2 from "../components/dashboard-widgets/your-goals.js";
import Widget3 from "../components/dashboard-widgets/your-holdings.js";
import Footer from "../components/footer";
import Header from "../components/header";
import Ledger from "../assets/d-ledger.svg";
import Outstanding from "../assets/d-outstanding.svg";
import DPHolding from "../assets/d-dp-holding.svg";
import Transactions from "../assets/d-transactions.svg";
import ProfitLoss from "../assets/d-p-l.svg";
import { NavLink } from "react-router-dom";
import { User_Profile } from "../redex/action/index.js";
import { UserProfile } from "../API.js";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

$(function () {
  setCheckboxSelectLabels();

  $(".toggle-next").click(function () {
    $(this).next(".checkboxes").slideToggle(400);
  });

  $(".click-wrapper").click(function () {
    $(".checkboxes").hide(100);
  });

  $(".ckkBox").change(function () {
    toggleCheckedAll(this);
    setCheckboxSelectLabels();
  });
});

function setCheckboxSelectLabels(elem) {
  var wrappers = $(".wrapper");
  $.each(wrappers, function (key, wrapper) {
    var checkboxes = $(wrapper).find(".ckkBox");
    var label = $(wrapper).find(".checkboxes").attr("id");
    var prevText = "";
    $.each(checkboxes, function (i, checkbox) {
      var button = $(wrapper).find("button");
      if ($(checkbox).prop("checked") === true) {
        var text = $(checkbox).next().html();
        var btnText = prevText + text;
        var numberOfChecked = $(wrapper).find(
          "input.val:checkbox:checked"
        ).length;
        if (numberOfChecked >= 4) {
          btnText = numberOfChecked + " " + label + " selected";
        }
        $(button).text(btnText);
        prevText = btnText + ", ";
      }
    });
  });
}

function toggleCheckedAll(checkbox) {
  var apply = $(checkbox).closest(".wrapper").find(".apply-selection");
  apply.fadeIn("slow");

  var val = $(checkbox).closest(".checkboxes").find(".val");
  var all = $(checkbox).closest(".checkboxes").find(".all");
  var ckkBox = $(checkbox).closest(".checkboxes").find(".ckkBox");

  if (!$(ckkBox).is(":checked")) {
    $(all).prop("checked", true);
    return;
  }

  if ($(checkbox).hasClass("all")) {
    $(val).prop("checked", false);
  } else {
    $(all).prop("checked", false);
  }
}

const Dashboard = () => {
  const Dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);
  const { token } = cookies;
  useEffect(() => {
    const getUserProfile = async () => {
      const result = await UserProfile(token);
      Dispatch(User_Profile(result.data));
    };
    if (token) {
      getUserProfile();
    }
  }, [token]);
  return (
    <div className="dashboard-parent">
      <style>
        {`.dash {
                margin-bottom: -3px;
                border-bottom: 3px solid #516DAB;
                }`}
      </style>
      <Header />

      {/* Welcome */}
      <div className="container welcome">
        <div className="row">
          <div className="col-6">
            <h2>
              Good Morning, <br className="d-block d-md-none d-lg-none" />
              John Doe
            </h2>
          </div>
          <div className="col-6 right">
            <div className="wrapper">
              <button className="form-control toggle-next ellipsis button1">
                All Widgets
              </button>

              <div className="checkboxes" id="Widgets">
                <div className="inner-wrap">
                  <label>
                    <input
                      type="checkbox"
                      value="all_widget"
                      className="ckkBox all"
                    />
                    <span>Customize</span>
                  </label>
                  <br />

                  <label>
                    <input
                      type="checkbox"
                      value="widget_1"
                      className="ckkBox val"
                      checked
                    />
                    <span>Widget 1</span>
                  </label>
                  <br />

                  <label>
                    <input
                      type="checkbox"
                      value="widget_2"
                      className="ckkBox val"
                      checked
                    />
                    <span>Widget 2</span>
                  </label>
                  <br />

                  <label>
                    <input
                      type="checkbox"
                      value="widget_3"
                      className="ckkBox val"
                    />
                    <span>Widget 3</span>
                  </label>
                  <br />

                  <label>
                    <input
                      type="checkbox"
                      value="widget_4"
                      className="ckkBox val"
                    />
                    <span>Widget 4</span>
                  </label>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome End*/}
      <div className="click-wrapper">
        <Widget1 />
        <div className="widget-parent">
          <Widget2 />
        </div>
        <div className="widget-parent">
          <Widget3 />
        </div>
        <div className="widget-parent">
          <Widget4 />
        </div>

        {/* Statics */}

        {/* Quick Access */}
        <div className="container d-quick-access">
          <h2>Quick Access</h2>
          <div className="row row-cols-lg-5">
            <div className="col-12">
              <div className="bluebox">
                <img alt=" " className="img-fluid" src={Ledger} />
                <h3>Ledger</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="bluebox">
                <img alt=" " className="img-fluid" src={Outstanding} />
                <h3>Outstanding</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="bluebox">
                <img alt=" " className="img-fluid" src={DPHolding} />
                <h3>DP Holding</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="bluebox">
                <img alt=" " className="img-fluid" src={Transactions} />
                <h3>Transactions</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="bluebox">
                <img alt=" " className="img-fluid" src={ProfitLoss} />
                <h3>Profit & Loss</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Access End*/}

        {/* Explore Our Other Products */}
        <div className="container d-explore">
          <h2>Explore Our Other Products</h2>
          <div className="row">
            <div className="col-lg-3">
              <div className="explore-box">
                <h3>ALGO Trading</h3>
                <p>
                  Experience in-depth market analysis, pre-defined parameters
                  and a state-of-the-art trading engine.
                </p>
                <NavLink to="/" className="button2">
                  View Product
                </NavLink>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="explore-box">
                <h3>Trading API</h3>
                <p>
                  Experience in-depth market analysis, pre-defined parameters
                  and a state-of-the-art trading engine.
                </p>
                <NavLink to="/" className="button2">
                  View Product
                </NavLink>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="explore-box">
                <h3>ALPHANITI</h3>
                <p>
                  Experience in-depth market analysis, pre-defined parameters
                  and a state-of-the-art trading engine.
                </p>
                <NavLink to="/" className="button2">
                  View Product
                </NavLink>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="explore-box">
                <h3>IPO</h3>
                <p>
                  Experience in-depth market analysis, pre-defined parameters
                  and a state-of-the-art trading engine.
                </p>
                <NavLink to="/" className="button2">
                  View Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Explore Our Other Products End */}

        {/* Statics End*/}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
