import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@mui/material/Grid';

export default function CenteredGrid({ children, xsSize, ...otherProps }){

  return (
    <Grid
      xs={xsSize}
      {...otherProps}
    >
      {children}
    </Grid>
  );
}

CenteredGrid.propTypes = {
  children: PropTypes.any,
  xsSize: PropTypes.number,
};
CenteredGrid.defaultProps = {
  children: <div>Default Children</div>,
  xsSize: 12,
};
