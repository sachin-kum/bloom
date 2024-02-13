import axios from "axios";
import React, { useEffect, useState } from "react";
import TableSkeleton from "../../components/table_skeleton/PnL";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { Skeleton } from "@mui/material";
import DpHoldMobile from "../table_skeleton/Dp_hold_mo";
import { getTotalArray } from "../../API";
import { useCookies } from "react-cookie";
const Widget4 = () => {
  const [cookies] = useCookies();
  const [isSkeleton, setIsSkeleton] = useState(true);
  const { token } = cookies;
  const CurentDate = new Date().toLocaleDateString("ja-JP").split("/").join("");
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const getDateForYear = () => {
    if (month <= 2) {
      return { fromDate: parseInt(`${year - 1}0401`), toDate: CurentDate };
    } else {
      return { fromDate: parseInt(`${year}0401`), toDate: CurentDate };
    }
  };
  const { fromDate, toDate } = getDateForYear();
  const [List, setList] = useState([]);
  // ProfitLoss_Cash_Summary : Realized_PL
  const [total_UnRePL, settotal_UnRePL] = useState(0);
  const [total_RePL, settotal_RePL] = useState(0);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `https://upi.acagarwal.com/tradewebapi/api/ProfiltAndLoss/ProfitLoss_Cash_Summary?fromDate=${fromDate}&toDate=${toDate}`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((result) => {
          setList([...result.data.data]);
          settotal_UnRePL(getTotalArray(result.data.data, "UnRealized_PL"));
          settotal_RePL(getTotalArray(result.data.data, "Realized_PL"));
          setIsSkeleton(false);
        });
    };
    getData();
  }, []);

  const [page, SetPage] = useState(0);
  const pageHandle = (event) => {
    SetPage(event.selected);
  };
  return (
    <div className="container widget widget4">
      <div className="head">
        <div className="row">
          <div className="col-lg-6 left">
            <h2>Profit and Loss</h2>
          </div>
          <div className="col-lg-6 right">
            <NavLink to="/" className="button1">
              View Goals
            </NavLink>
          </div>
        </div>
        <div className="row plnumbers">
          <div className="plnumber">
            <h3 className={total_RePL < 0 ? "profit-style" : "loss-style"}>
              {total_RePL.toFixed(2)}
            </h3>
            <p>Realised P&L</p>
          </div>
          <div className="plnumber">
            <h3>13.6</h3>
            <p>Charges & Taxes</p>
          </div>
          <div className="plnumber">
            <h3>-150.95</h3>
            <p>Other Credits & Debits</p>
          </div>
          <div className="plnumber">
            <h3>-218.55</h3>
            <p>Net realised P&L</p>
          </div>
          <div className="plnumber">
            <h3 className={total_UnRePL < 0 ? "profit-style" : "loss-style"}>
              {total_UnRePL.toFixed(2)}
            </h3>
            <p>Unrealised P&L</p>
          </div>
        </div>
      </div>
      <div className="body d-none d-lg-block">
        <table>
          <thead>
            <tr className="table-head">
              <th>Buy Qty</th>
              <th>Buy Value</th>
              <th>Buy Rate</th>
              <th>Sell Qty</th>
              <th>Sell Value</th>
              <th>Sell Rate</th>
              <th>Realized PL</th>
              <th>Unrealized PL</th>
              <th>Net Qty</th>
              <th>Amount</th>
              <th>Rate</th>
              <th>Trade Type</th>
            </tr>
          </thead>
          {isSkeleton ? (
            <TableSkeleton />
          ) : (
            <tbody>
              {List
                ? List.map((CurElem, index) => {
                    if (
                      parseInt(`${page}0`) <= index &&
                      index < parseInt(`${page}1`) + 10
                    ) {
                      return (
                        <tr key={index}>
                          <td>{CurElem.BuyQty}</td>
                          <td>{CurElem.BuyValue}</td>
                          <td>{CurElem.BuyRate}</td>
                          <td>{CurElem.SellQty}</td>
                          <td>{CurElem.SellValue}</td>
                          <td>{CurElem.SellRate}</td>
                          <td>{CurElem.Realized_PL}</td>
                          <td>{CurElem.UnRealized_PL}</td>
                          <td>{CurElem.NetQty}</td>
                          <td>{CurElem.Amount}</td>
                          <td>{CurElem.Rate}</td>
                          <td>{CurElem.TradeType}</td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  })
                : "Recode Not Found"}
            </tbody>
          )}
        </table>
        <div className="tablew4-p">
          <div className="pagination">
            {isSkeleton ? (
              <Skeleton
                variant="text"
                width="200px"
                height={"20px"}
                sx={{ fontSize: "2rem" }}
              />
            ) : (
              <ReactPaginate
                previousLabel={"<"}
                breakLabel={"..."}
                nextLabel={">"}
                pageCount={Math.floor(List.length / 10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={pageHandle}
              />
            )}
          </div>
        </div>
      </div>
      <div className="body w4-m-body d-block d-lg-none">
        {isSkeleton ? (
          <DpHoldMobile />
        ) : (
          List.map((CurElem, index) => {
            if (
              parseInt(`${page}0`) <= index &&
              index < parseInt(`${page}1`) + 10
            ) {
              return (
                <div className="mob-table-parent" key={index}>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Buy Qty</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.BuyQty}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Buy Value</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.BuyValue}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Buy Rate</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.BuyRate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Sell Qty</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.SellQty}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Sell Value</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.SellValue}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Sell Rate</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.SellRate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Realized PL</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.Realized_PL}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Unrealized PL</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.UnRealized_PL}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Net Qty</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.NetQty}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Amount</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.Amount}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Rate</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.Rate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mob-table">
                    <div className="row">
                      <div className="col-6 left">
                        <h6>Trade Type</h6>
                      </div>
                      <div className="col-6 right">
                        <p>{CurElem.TradeType}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
        <div className="tablew4-p">
          <div className="pagination">
            {isSkeleton ? (
              <Skeleton
                width={"120px"}
                style={{ marginRight: "20px", marginBottom: "20px" }}
              />
            ) : List.length > 10 ? (
              <ReactPaginate
                previousLabel={"<"}
                breakLabel={"..."}
                nextLabel={">"}
                pageCount={Math.floor(List.length / 10)}
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
    </div>
  );
};

export default Widget4;
