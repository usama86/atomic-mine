import React from 'react';
import Search from '../../../UI/SearchField/Search';
import Tabs from '../../../UI/Tabs/Tabs';
import Stack from '../../../UI/Layout/Stack';
import Box from '../../../UI/Layout/Box';

import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
//AccountPages
import Balance from './TabPages/Balance';
import RiskManagement from './TabPages/RiskManagement';
import Orders from './TabPages/Orders';
import Funds from './TabPages/Funds';
import CashLedger from './TabPages/CashLedger';
import BankLink from './TabPages/BankLink';
import Docs from './TabPages/Docs';
import Options from './TabPages/Options';
import PersonalInfo from './TabPages/PersonalInfo';



function Account() {
    
  const [searchVal,setSearchVal] = React.useState("");
  const [value, setValue] = React.useState('1');

  const TabsVal= [
        { label: 'Balances:', value: "1"},
        {label:"Risk Management", value:"2"},
        {label:"Orders", value:"3" },
        {label:"Funds", value:"4" },
        {label:"Cash Ledger", value:"5" },
        {label:"Bank Link", value:"6"},
        {label:"Docs", value:"7" },
        {label:"Options", value:"8"},
        {label:"Personal Info", value:"9"}
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const onChangeSearchVal = (e,val) => {
    setSearchVal(val.title);
  }
  

  return (
    <Stack spacing={6} >
      <Search searchVal={searchVal} onChangeSearchVal={onChangeSearchVal}/>
      {searchVal && (
        <Tabs value={value}>
          <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            {TabsVal.map((val,index)=>(
                <Tab label={val.label} key={index} value={val.label} />
            ))}  
          </TabList>
        </Box>
            {TabsVal.map((val,index)=>(
                <TabPanel value={val.label} key={index}>{val.label}</TabPanel>
                ))}
            </>
        </Tabs>
        
        )}
    </Stack>
  );
}

export default Account;