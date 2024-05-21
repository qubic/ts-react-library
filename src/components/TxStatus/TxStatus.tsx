import { IconButton, Typography } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import React from 'react';
import { ReactNode } from 'react';
import { JSXElementConstructor } from 'react';

export interface TxStatusProps{
  props: JSXElementConstructor<any>;
  executed: ReactNode;
}

function TxStatus({executed, ...props}: TxStatusProps) {

  return (
    <IconButton className="flex gap-4 py-2 px-8 bg-gray-70 rounded-full items-center">
      <Typography className=" tex-16 leading-20 text-gray-50 font-space ">TX</Typography>
      <FuseSvgIcon
        className={`text-20 w-20 h-20 ${executed ? 'text-success-40' : 'text-error-40'}`}
      >
        {executed ? 'heroicons-solid:check' : 'heroicons-solid:x'}
      </FuseSvgIcon>
    </IconButton>
  );
}

export default TxStatus;
