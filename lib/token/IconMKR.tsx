import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconMKR: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} viewBox="0 0 600 600">
            <defs>
                <linearGradient id="linear-gradient" x1="300" y1="602" x2="300" y2="2" gradientTransform="matrix(1, 0, 0, -1, 0, 602)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#4fa89b" />
                    <stop offset="1" stop-color="#6acebb" />
                </linearGradient>
            </defs>
            <g>
                <g>
                    <circle fill="url(#linear-gradient)" cx="300" cy="300" r="300" />
                    <path
                        fill="#fff"
                        d="M152.34,390V248.8l107.08,80.59V390h27.33V323.7A15.94,15.94,0,0,0,280.4,311L150.54,213.23A16,16,0,0,0,125,226V390Zm296.14,0V248.8L341.4,329.39V390H314.07V323.7A15.94,15.94,0,0,1,320.42,311l129.86-97.73A16,16,0,0,1,475.82,226V390Z"
                    />
                </g>
            </g>
        </MuiSvgIcon>
    );
};
