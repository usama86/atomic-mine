import React from "react";
import { ApplicationRoutes } from "./Routes/Routes";
import Theme from "./Store/Theme/theme";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [mode, setMode] = React.useState("light");
  // React.useEffect(() => {
  //   console.log(window.location.pathname);
  // }, [window]);
  React.useEffect(() => {
    let modeStored = localStorage.getItem("Mode");
    if (modeStored) setMode(modeStored);
  }, []);
  const handleChangeMode = (modes) => {
    setMode(modes);
    localStorage.setItem("Mode", modes);
  };
  const getPathHandler = (e) => {
    if (e === "/login") {
      return setMode("light");
    } else {
      return setMode(localStorage.Mode);
    }
  };
  return (
    <BrowserRouter>
      <Theme mode={mode} handleChangeMode={handleChangeMode}>
        <ApplicationRoutes
          getCurrentPath={getPathHandler}
          mode={mode}
          handleChangeMode={handleChangeMode}
        />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
