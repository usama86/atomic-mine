import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//Application
import Login from "./../Pages/Login/Login";
import Home from "./../Pages/Home/Home";
//DrawerRoutes
import Account from "./../Pages/DrawerPage/Account/Account";
import Application from "../Pages/DrawerPage/Application/Application";
import RiskMonitor from "../Pages/DrawerPage/RiskMonitor/RiskMonitor";

export const ApplicationRoutes = ({
  getCurrentPath,
  mode,
  handleChangeMode,
}) => {
  const location = useLocation();
  React.useEffect(() => {
    getCurrentPath(location.pathname);
  }, [location.pathname, getCurrentPath]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={<Home mode={mode} handleChangeMode={handleChangeMode} />}
      >
        <Route path="/" element={<Navigate to="/account" />} />
        <Route path="account" element={<Account />} />
        <Route path="application" element={<Application />} />
        <Route path="riskmonitor" element={<RiskMonitor />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
