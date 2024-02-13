import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Bell from "../assets/bell.svg";
import Noty from "../assets/notifi-icon-msg.png";
import Noty1 from "../assets/notifi-icon-1.png";
import Noty2 from "../assets/notifi-icon-2.png";
import Noty3 from "../assets/notifi-icon-3.png";
import Avatar from "../assets/avatar.png";
import Dropdown from "../assets/angle-arrow-down.svg";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { LoginAuth } from "../redex/action";
import Notifications from "react-notifications-menu";
import { useEffect } from "react";
import { UserProfile } from "../API";
import axios from "axios";

const Header = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const [profile, setProfile] = useState();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const logout = () => {
    removeCookie("token");
    Dispatch(LoginAuth(""));
    Navigate("/login");
  };

  const CheckCookie = (value) => {
    if (!value.status) {
      removeCookie("token");
      Dispatch(LoginAuth(""));
      Navigate("/");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await UserProfile(cookies.token);
      CheckCookie(result);
      Dispatch(LoginAuth({ token: cookies.token }));
      if (result) {
        // axios.get(`https://urlsdemo.xyz/tradeweb/api/treadUser/${result.data[0].ClientCode}`).then((res) => {
        //   setProfile(res.data.data.image_url)
        // })
      }

    };
    fetchData();
  }, []);
  const DEFAULT_NOTIFICATION = {
    image: Noty,
    message: "Marketing notification Title",
    detailPage: "/events",
    receivedTime: "Yesterday at 11:42 PM",
  };
  const DEFAULT_NOTIFICATION1 = {
    image: Noty1,
    message: "Your assessment ready.",
    detailPage: "/events",
    receivedTime: "Yesterday at 11:42 PM",
  };
  const DEFAULT_NOTIFICATION2 = {
    image: Noty2,
    message: "Success Title",
    detailPage: "",
    receivedTime: "Yesterday at 11:42 PM",
  };
  const DEFAULT_NOTIFICATION3 = {
    image: Noty3,
    message: "Birthday Title",
    receivedTime: "Yesterday at 11:42 PM",
  };
  const data = [
    DEFAULT_NOTIFICATION,
    DEFAULT_NOTIFICATION1,
    DEFAULT_NOTIFICATION2,
    DEFAULT_NOTIFICATION3,
  ];

  return (
    <>
      <div className="headnav d-lg-block nav-desktop">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 logocol">
              <img alt=" " className="img-fluid" src={Logo} />
            </div>
            <div className="col-lg-8 navcol">
              <ul>
                <li className="dash">
                  <NavLink className="" to="/">
                    Dashboard
                  </NavLink>
                </li>
                <li className="goals">
                  <NavLink className="" to="/goals">
                    Goals
                  </NavLink>
                </li>
                <li className="reports dropdown">
                  <div className="dropdown">
                    <NavLink to="/reports" className="dropbtn">
                      Reports
                    </NavLink>
                    <div className="dropdown-content">
                      <NavLink to="/reports-ledger">Ledger</NavLink>
                      <NavLink to="/reports-dp-holdings">DP Holding</NavLink>
                      <NavLink to="/reports-profit-and-loss">
                        Profit and Loss
                      </NavLink>
                      <NavLink to="/reports-outstandings">Out Standing</NavLink>
                      <NavLink to="/reports-margin">Margin Report</NavLink>
                    </div>
                  </div>
                </li>
                <li className="fund">
                  <NavLink className="" to="/fund-transfer">
                    Fund Transfer
                  </NavLink>
                </li>
                <li className="pledge-for-margin">
                  <NavLink className="" to="/pledge-for-margin">
                    Pledge For Margin
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 avatarcol">
              <div className="notify-menu">
                <Notifications
                  data={data}
                  header={{
                    title: "Notifications",
                    option: {
                      text: "View All",
                      onClick: () => console.log("Clicked"),
                    },
                  }}
                  markAsRead={(data) => {
                    // console.log(data);
                  }}
                  icon={Bell}
                />
              </div>
              <LogoutIcon
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={logout}
              />
              <NavLink to="/profile" className="profile_image">
                <img alt="" className="img-fluid" src={profile ? profile : Avatar} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="headnav d-lg-none nav-mobile">
        <div className="container">
          <div className="row nav-wrapper">
            <div className="col-6 logocol logo-container">
              <img alt=" " className="img-fluid" src={Logo} />
            </div>
            <div className="col-6 navcol">
              <div className="col-3">
                <nav>
                  <div className="wrapper">
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                      <label htmlFor="close-btn" className="btn close-btn">
                        <i className="fas fa-times"></i>
                      </label>
                      <li>
                        <NavLink className="" to="/">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="" to="/goals">
                          Goals
                        </NavLink>
                      </li>
                      <li className="nav-drop">
                        <NavLink to="/reports" className="desktop-item dropbtn">
                          Reports
                        </NavLink>
                        <input type="checkbox" id="showDrop" />
                        <label htmlFor="showDrop" className="mobile-item">
                          Reports
                        </label>
                        <img alt=" " className="img-fluid" src={Dropdown} />
                        <ul className="drop-menu">
                          <li>
                            <NavLink to="/reports">Personal</NavLink>
                          </li>
                          <li>
                            <NavLink to="/reports-family">Family</NavLink>
                          </li>
                          <li>
                            <NavLink to="/reports-ledger">Ledger</NavLink>
                          </li>
                          <li>
                            <NavLink to="/reports-dp-holdings">
                              DP Holding
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/reports-profit-and-loss">
                              Profit and Loss
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/reports-outstandings">
                              Out Standing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/reports-margin">
                              Margin Report
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink className="" to="/fund-transfer">
                          Fund Transfer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="" to="/pledge-for-margin">
                          Pledge For Margin
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="" to="" onClick={logout}>
                          Logout
                          <LogoutIcon style={{ marginRight: "10px", cursor: "pointer", marginLeft: "10px" }} />
                        </NavLink>
                      </li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn">
                      <i className="fas fa-bars"></i>
                    </label>
                  </div>
                </nav>
              </div>
              <div className="col-3">
                <Notifications
                  data={data}
                  header={{
                    title: "Notifications",
                    option: {
                      text: "View All",
                      onClick: () => console.log("Clicked"),
                    },
                  }}
                  markAsRead={(data) => {
                  }}
                  icon={Bell}
                />
              </div>
              <div className="col-2">
                <NavLink to="/profile">
                  <img alt="" className="img-fluid" src={profile ? profile : Avatar} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
