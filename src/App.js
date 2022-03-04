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
    <SnackbarProvider>
      <BrowserRouter>
        <Theme mode={mode} handleChangeMode={handleChangeMode}>
          <ApplicationRoutes
            getCurrentPath={getPathHandler}
            mode={mode}
            handleChangeMode={handleChangeMode}
          />
        </Theme>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
