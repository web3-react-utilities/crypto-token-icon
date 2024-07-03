import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconBUSD: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            x="0px"
            y="0px"
            viewBox="0 0 2500 2500"
            sx={{ enableBackground: 'new 0 0 2500 2500', '.st0-busd': { fill: '#F0B90B' }, '.st1-busd': { fill: '#FFFFFF' }, ...props.sx }}
            xmlSpace="preserve"
        >
            <g>
                <g>
                    <path className="st0-busd" d="M1250,0c690.3,0,1250,559.7,1250,1250s-559.7,1250-1250,1250S0,1940.3,0,1250S559.7,0,1250,0z" />
                    <path
                        className="st1-busd"
                        d="M400,1250.4l212.3-212.3l212.3,212.3l-212.3,212.3L400,1250.4z M1887.7,1036.7l-851,851L1249,2100l851-851    L1887.7,1036.7z M718.4,1568.8l851-851l212.3,212.3l-851,851L718.4,1568.8L718.4,1568.8z M718,932.5L1250.5,400l212.3,212.3    l-532.5,532.5L718,932.5L718,932.5z"
                    />
                </g>
            </g>
        </MuiSvgIcon>
    );
};
