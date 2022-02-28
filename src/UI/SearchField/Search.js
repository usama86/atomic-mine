import PropTypes from "prop-types";
import React from "react";
import SearchField from 'react-search-field';


const Search = ({ onChange, placeholder, ...otherProps }) => {

  return (
    <SearchField 
        placeholder={placeholder}
        onChange={onChange}
        {...otherProps}
    />
  );
};

export default Search;

Search.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

Search.defaultProps = {
    onChange: ()=>{},
    placeholder:"Search"
};