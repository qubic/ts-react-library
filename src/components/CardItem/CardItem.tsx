import clsx from 'clsx';
import React from 'react';
import { ReactNode, JSXElementConstructor } from 'react';

export interface CardItemProps{
    children?: ReactNode;
    className?: string;
    props?: JSXElementConstructor<any>;
}

function CardItem({children, className, ...props} : CardItemProps) {
//   const { children, className } = props;

  return (
    <div className={clsx('bg-gray-80 border-gray-70 border-[1px] rounded-8', className)}>
      {children}
    </div>
  );
}

export default CardItem;
