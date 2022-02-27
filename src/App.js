import React from 'react';
import {ApplicationRoutes} from './Routes/Routes';
import Theme from './Store/Theme/theme';

function App() {
  const [mode,setMode] = React.useState('light');
  const handleChangeMode = (modes) =>{
    if(modes==='light')
    {
      setMode('dark');
    }
    else
    {
      setMode('light');
      console.log("light"); 
    }
        
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
