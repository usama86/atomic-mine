import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
//Application
import Login from './../Pages/Login/Login';
import Home from './../Pages/Home/Home';
//DrawerRoutes
import Account from './../Pages/DrawerPage/Account';
import Application from './../Pages/DrawerPage/Application';
import RiskMonitor from './../Pages/DrawerPage/RiskMonitor';

export  const ApplicationRoutes =({mode,handleChangeMode})=>{
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home mode={mode} handleChangeMode={handleChangeMode}/>}>
            <Route
                path="/"
                element={<Navigate to="/account"/>}
            />
            <Route path="account" element={<Account />} />
            <Route path="application" element={<Application />} />
            <Route path="riskmonitor" element={<RiskMonitor />} />
          </Route>
          <Route
                path="*"
                element={<Navigate to="/" />}
          />
        
        </Routes>
      </BrowserRouter>
    );
  }