import React from 'react';
import Search from './../../UI/SearchField/Search';
import Tabs from './../../UI/Tabs/Tabs';
import Stack from './../../UI/Layout/Stack';

function Account() {
    
  const [searchVal,setSearchVal] = React.useState("");

  const onChangeSearchVal = (e,val) => {
    setSearchVal(val.title);
  }

  return (
    <Stack spacing={6} >
      <Search searchVal={searchVal} onChangeSearchVal={onChangeSearchVal}/>
      {searchVal && (<Tabs />)}
    </Stack>
  );
}

export default Account;