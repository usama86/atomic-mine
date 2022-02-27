import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';


export default function BoxFunc({ children, xsSize, ...otherProps }){

  return (
    <Box
      {...otherProps}
    >
      {children}
    </Box>
  );
}

BoxFunc.propTypes = {
  children: PropTypes.any,
};
BoxFunc.defaultProps = {
  children: <div>Default Children</div>,
  xsSize: 12,
};
