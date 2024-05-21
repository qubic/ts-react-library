import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { JSXElementConstructor } from 'react';

export interface AddressLinkProps {
    props?: JSXElementConstructor<any>;
    value?: ReactNode;
    tickValue?: Number
}

function AddressLink({ value, tickValue, ...props }: AddressLinkProps) {

    return (
        <Typography
            className="text-14 leading-20 font-space text-primary-40 break-all"
            component={Link}
            to={`/network/address/${value}?tick=${tickValue}`}
            role="button"
        >
            {value}
        </Typography>
    );
}
export default AddressLink;
