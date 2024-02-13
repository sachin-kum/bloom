import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import WidgetRP2 from "../../components/report-family-widgets/marketandsector";
import WidgetRP1 from "../../components/report-family-widgets/portfolio-summary";
import WidgetRP3 from "../../components/report-family-widgets/sectorsandholdings";

const Reportfamily = () => {
    return ( 
        <div className="report-parent">
                              <style>
        {
          `.reports {
            margin-bottom: -3px;
            border-bottom: 3px solid #516DAB;
            }`
        }
      </style>
            <Header />

            {/* Personal to Family Switch */}
            <div className="container report-top-container">
                <div className="row report-chip-row">
                    <div className="left"><h2>Report Overview</h2></div>
                    <div className="right">
                        <ul className="nav report-chip">
                            <li ><a href="/reports">Personal</a></li>
                            <li className="active"><a href="/reports">Family</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Personal to Family Switch End */}

            <WidgetRP1 />
            <WidgetRP2 />
            <WidgetRP3 />
            <Footer />
        </div>
     );
}
 
export default Reportfamily;