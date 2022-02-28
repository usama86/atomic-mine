import React from 'react';
import {ApplicationRoutes} from './Routes/Routes';
import Theme from './Store/Theme/theme';

function App() {
  const [mode,setMode] = React.useState('light');

  React.useEffect(()=>{
    let modeStored = localStorage.getItem('Mode');
    if(modeStored)
      setMode(modeStored)
  },[])
  const handleChangeMode = (modes) =>{
      setMode(modes);       
      localStorage.setItem('Mode',modes);  
    }
  return (
    <>
        <Theme mode={mode} handleChangeMode={handleChangeMode}>
          <ApplicationRoutes mode={mode} handleChangeMode={handleChangeMode}/>
        </Theme>
    </>
  );
}

export default App;
