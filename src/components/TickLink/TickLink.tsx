import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';

export interface TickLinkProps{
  props: any;
}

function TickLink({props} : TickLinkProps) {
  const { value, className } = props;

  return (
    <Typography
      component={Link}
      className={clsx(`font-space font-500`, className)}
      to={`/network/tick/${value}`}
      role="button"
    >
      {value}
    </Typography>
  );
}
export default TickLink;
