import PropTypes from 'prop-types';
import React from 'react';
import Stack from '@mui/material/Stack';

export default function StackFunc({ children, ...otherProps }){

  return (
    <Stack
      {...otherProps}
    >
      {children}
    </Stack>
  );
}

StackFunc.propTypes = {
  children: PropTypes.any,
};
StackFunc.defaultProps = {
  children: <div>Default Children</div>,
};
