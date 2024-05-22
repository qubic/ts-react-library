import React from 'react';
import { Typography } from '@mui/material';

export interface CardItemProps {
    description: string;
    value: string | number;
    imageLink?: string;
    imageAlt?: string;
    className?: string;
}

const CardItem: React.FC<CardItemProps> = ({ description, value, imageLink, imageAlt, className }) => {
    return (
        <div className={`bg-gray-80 border-gray-70 border-[1px] rounded p-5 ${className}`}>
            <div className="flex items-center gap-24">
                {imageLink &&
                    <img className="w-24 h-24" src={imageLink} alt={imageAlt} />
                }
                <div className="flex flex-col gap-8">
                    <Typography className="text-14 leading-18 text-gray-50 font-space">
                        {description}
                    </Typography>
                    <Typography className="text-18 xs:text-24 leading-20 sm:text-22 sm:leading-28 font-space">
                        {value}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
