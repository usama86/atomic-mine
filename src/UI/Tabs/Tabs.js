import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {TabsVal.map((val,index)=>(
                <Tab label={val.label} key={index} value={val.value} />
            ))}  
          </TabList>
        </Box>
        {TabsVal.map((val,index)=>(
            <TabPanel value={val.value} key={index}>{val.label}</TabPanel>
            ))}
        
      </TabContext>
    </Box>
  );
}
const TabsVal = [
    {label:"Balances", value:"1"},
    {label:"Risk Management", value:"2"},
    {label:"Orders", value:"3"},
    {label:"Funds", value:"4"},
    {label:"Cash Ledger", value:"5"},
    {label:"Bank Link", value:"6"},
    {label:"Docs", value:"7"},
    {label:"Options", value:"8"},
    {label:"Personal Info", value:"9"}
]