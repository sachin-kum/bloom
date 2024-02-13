import React from "react";
import Dashboard from "./pages/dashboard.js";
import Report from "./pages/reports/report";
import Reportfamily from "./pages/reports/reportfamily";
import ReportDPH from "./pages/reports/report-dp-holdings";
import ReportLedger from "./pages/reports/report-ledger";
import ReportOS from "./pages/reports/report-outstanding";
import ReportPandL from "./pages/reports/reports-pandl";
import ReportPandLC from "./pages/reports/reports-pandl-calendar";
import ReportDPPM from "./pages/reports/report-pledge-margin";
import Profile from "./pages/profile";
import ReportMargin from "./pages/reports/reports-margin";
import Login from "./pages/auth/login";
import Forgot from "./pages/auth/forgot-password";
import OTP from "./pages/auth/otp";
import SETPass from "./pages/auth/set-password";
import PasswordSuccess from "./pages/auth/new-pasword";
import Goals from "./pages/goals/goals";
import GoalResult from "./pages/goals/goal-result";
import CreateGoal from "./pages/goals/create-goal";
import ReportPD from "./pages/reports/report-portfolio-details";
import FundTransfer from "./pages/fund-transfer/fund-transfer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import GoalResultUpdate from "./pages/goals/goal-update.js";
const App = () => {
  return (
    <CookiesProvider>
      {/* <BrowserRouter basename={'/bloom-dash'}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/forgot-password-otp" element={<OTP />} />
          <Route path="/forgot-password-set" element={<SETPass />} />
          <Route
            path="/forgot-password-success"
            element={<PasswordSuccess />}
          />
          <Route path="/reports" element={<Report />} />
          <Route path="/reports-family" element={<Reportfamily />} />
          <Route path="/reports-outstandings" element={<ReportOS />} />
          <Route
            path="/reports-profit-and-loss-calendar"
            element={<ReportPandLC />}
          />
          <Route path="/reports-margin" element={<ReportMargin />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/goal-result" element={<GoalResult />} />
          <Route path="/create-goal" element={<CreateGoal />} />
          <Route path="/update-goal" element={<GoalResultUpdate />} />
          <Route path="/fund-transfer" element={<FundTransfer />} />
          <Route path="/reports-profit-and-loss" element={<ReportPandL />} />
          <Route
            path="/reports-portfolio-details/:ScripCode"
            element={<ReportPD />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports-ledger" element={<ReportLedger />} />
          <Route path="/reports-dp-holdings" element={<ReportDPH />} />
          <Route path="/pledge-for-margin" element={<ReportDPPM />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
