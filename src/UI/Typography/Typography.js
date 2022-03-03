import React from 'react';
import Typography from '@mui/material/Typography';

export default function Types({label,...otherprops}) {
  return (
      <Typography {...otherprops}>
          {label}
      </Typography>
  );
}
