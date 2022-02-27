import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Login from './../Pages/Login/Login';
import Home from './../Pages/Home/Home';


function RoutesFunc() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Home" element={<Home />} />
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />*/}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default RoutesFunc;
