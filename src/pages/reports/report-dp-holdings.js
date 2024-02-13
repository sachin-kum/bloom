import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Holding_Broker_Ason, UserProfile } from "../../API";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Dphold from "../../components/table_skeleton/Dp_hold";
import DpHoldMobile from "../../components/table_skeleton/Dp_hold_mo";
import { LoginAuth } from "../../redex/action";

const ReportDPH = () => {
  const [page, SetPage] = useState(0);
  const pageHandle = (event) => {
    SetPage(event.selected);
  };
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const [cookies, , removeCookie] = useCookies(["token"]);
  const CheckCookie = (value) => {
    if (!value.status) {
      removeCookie("token");
      Dispatch(LoginAuth(""));
      Navigate("/");
    }
  };
  const curDate = new Date().toLocaleDateString("sv-SE").split("-").join("");
  const [brokerAson, setBrokerAson] = useState([]);
  const [isSkeleton, setIsSkeleton] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Holding_Broker_Ason(cookies.token, curDate);
      setBrokerAson(await result.data);
      CheckCookie(result);
      setIsSkeleton(false);
    };
    fetchData();
  }, []);

  const [DematAccountNo, setDematAccountNo] = useState([]);
  let { Profile } = useSelector((state) => state.ProfileStore);
  useEffect(() => {
    if (Profile.length > 0) {
      const DMD = Profile.map((i) => {
        return i.DematAccountNo;
      });
      setDematAccountNo(DMD);
    } else {
      UserProfile(cookies.token).then((data) => {
        const DMD = data.data.map((i) => {
          return i.DematAccountNo;
        });
        setDematAccountNo(DMD);
      });
    }
  }, [cookies.token]);

  return (
    <div className="report-parent">
      <style>
        {`.reports {
                margin-bottom: -3px;
                border-bottom: 3px solid #516DAB;
                }`}
      </style>
      <Header />

      {/* DP Holdings Title */}
      <div className="container report-top-container">
        <div className="row report-dp-row">
          <div className="left col-lg-6">
            <h2>DP Holding</h2>
          </div>
          <div className="right col-lg-6">
            <input
              type="text"
              placeholder="1207130000069911"
              value={DematAccountNo.length > 0 ? DematAccountNo[0] : ""}
            />
            <button className="button1">Download Report</button>
          </div>
        </div>
      </div>
      {/* DP Holdings Title End */}

      {/* DP Holdings Table */}

      <div className="container dp-table d-none d-lg-block">
        <table>
          <tr className="table-head">
            <th>ISIN</th>
            <th>Script Name</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Value</th>
          </tr>
          {isSkeleton ? (
            <Dphold />
          ) : (
            brokerAson.map((curElem, index) => {
              if (
                parseInt(`${page}0`) <= index &&
                index < parseInt(`${page}1`) + 10
              ) {
                return (
                  <NavLink key={index}>
                    <tr>
                      <td>{curElem.ISIN}</td>
                      <td>{curElem.ScripName}</td>
                      <td>{curElem.Quantity}</td>
                      <td>{curElem.Rate}</td>
                      <td>{curElem.Value}</td>
                    </tr>
                  </NavLink>
                );
              }
              return null;
            })
          )}
        </table>
      </div>
      <div className="container dp-mob-t">
        <div className="body d-block d-lg-none">
          {isSkeleton ? (
            <DpHoldMobile />
          ) : (
            brokerAson.map((curElem, index) => {
              if (
                parseInt(`${page}0`) <= index &&
                index < parseInt(`${page}1`) + 10
              ) {
                return (
                  <div className="mob-table-parent" key={index}>
                    <NavLink href="/reports-pledge-margin">
                      <div className="mob-table">
                        <div className="row">
                          <div className="col-6 left">
                            <h6>ISIN No</h6>
                          </div>
                          <div className="col-6 right">
                            <p>{curElem.ISIN}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mob-table">
                        <div className="row">
                          <div className="col-6 left">
                            <h6>ISIN Name</h6>
                          </div>
                          <div className="col-6 right">
                            <p>HDFC SECURITIES LIMITED#EQUITY SHARES</p>
                          </div>
                        </div>
                      </div>
                      <div className="mob-table">
                        <div className="row">
                          <div className="col-6 left">
                            <h6>Quantity</h6>
                          </div>
                          <div className="col-6 right">
                            <p>{curElem.Quantity}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mob-table">
                        <div className="row">
                          <div className="col-6 left">
                            <h6>Rate</h6>
                          </div>
                          <div className="col-6 right">
                            <p>{curElem.Rate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mob-table">
                        <div className="row">
                          <div className="col-6 left">
                            <h6>Valuation</h6>
                          </div>
                          <div className="col-6 right">
                            <p>{curElem.Value}</p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              }
              return null;
            })
          )}
        </div>
        <div className="tablew4-p">
          <div className="pagination">
            {isSkeleton ? (
              <Skeleton width={"130px"} height="20px" />
            ) : brokerAson.length > 10 ? (
              <ReactPaginate
                previousLabel={"<"}
                breakLabel={"..."}
                nextLabel={">"}
                pageCount={Math.floor(brokerAson.length / 10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={pageHandle}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* DP Holdings Table End*/}

      <Footer />
    </div>
  );
};

export default ReportDPH;
