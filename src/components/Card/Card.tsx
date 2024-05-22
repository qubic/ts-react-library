import React from 'react';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`bg-gray-80 border-gray-70 border-[1px] rounded-8 ${className}`}>
            {children}
        </div>
    );
};

export default Card;
