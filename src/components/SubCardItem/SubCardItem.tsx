import { Typography } from '@mui/material';
import React from 'react';
import { JSXElementConstructor } from 'react';

export interface SubCardItemProps{
  title?: string;
  content?: string;
  props?: JSXElementConstructor<any>;
}

function SubCardItem({title, content, ...props} : SubCardItemProps) {
  
  return (
    <div className="flex flex-col md:flex-row gap-12 pt-12 mb-12 border-t-[1px] border-gray-70">
      <Typography className="w-120 text-14 leading-20 font-space text-gray-50">{title}</Typography>
      {content}
    </div>
  );
}

export default SubCardItem;
