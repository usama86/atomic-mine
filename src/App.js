import React from "react";
import { ApplicationRoutes } from "./Routes/Routes";
import Theme from "./Store/Theme/theme";
import { BrowserRouter } from "react-router-dom";
import SnackbarProvider from "./Store/Snackbar/SnackbarComp";

function App() {
  const [mode, setMode] = React.useState("light");
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
    <Theme mode={mode} handleChangeMode={handleChangeMode}>
      <SnackbarProvider>
        <BrowserRouter>
          <ApplicationRoutes
            getCurrentPath={getPathHandler}
            mode={mode}
            handleChangeMode={handleChangeMode}
          />
        </BrowserRouter>
      </SnackbarProvider>
    </Theme>
  );
}

export default App;
