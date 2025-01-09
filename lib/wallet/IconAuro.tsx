import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconAuro: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="230"
            height="230"
            viewBox="0 0 230 230"
            preserveAspectRatio="xMidYMid meet"
            sx={{ borderRadius: '50%', ...props.sx }}
        >
            <g transform="translate(0.000000,230.000000) scale(0.100000,-0.100000)" fill="#6248ee" stroke="none">
                <path d="M0 1150 l0 -1150 1150 0 1150 0 0 1150 0 1150 -1150 0 -1150 0 0 -1150z m1344 710 c172 -44 303 -146 375 -294 69 -142 72 -170 69 -691 l-3 -460 -132 -3 -133 -3 0 185 0 186 -370 2 -370 3 -2 -185 -3 -185 -132 -3 -133 -3 0 466 c0 525 3 550 71 690 77 157 215 262 404 304 78 17 276 13 359 -9z" />
                <path d="M1001 1621 c-29 -11 -60 -26 -70 -33 -123 -92 -151 -168 -151 -410 l0 -158 370 0 370 0 0 145 c0 161 -10 225 -48 303 -31 64 -76 106 -152 141 -76 35 -238 41 -319 12z" />
            </g>
        </MuiSvgIcon>
    );
};
