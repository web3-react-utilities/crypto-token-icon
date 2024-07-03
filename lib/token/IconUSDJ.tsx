import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconUSDJ: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} viewBox="0 0 300 300">
            <circle fill="#b31514" cx="150" cy="150" r="150" />
            <g>
                <rect fill="#fff" x="96.6" y="129.7" width="27.28" height="27.28" />
                <path
                    fill="#fff"
                    d="M203.4,129.71h0V51.8c-20.71,18.96-43.38,23.68-53.39,24.86-3.32,.39-5.24,.39-5.24,.39h30.29v115.46c0,14.68-8.31,26.44-25.05,28.06-.99,.11-2.02,.17-3.07,.19-.65,.01-1.01-.03-1.01-.03-6.5-.83-10.21-2.07-13.66-5.39-5.68-5.45-8.47-13.28-8.47-21.16v-20.44h-27.19v17.2c0,14.32,4.75,28.44,14.26,39.16,8.09,9.13,20.47,17.22,39.14,18.11,18.67-.89,31.04-8.98,39.14-18.11,9.5-10.72,14.25-24.84,14.25-39.16v-33.95h0v-27.27Z"
                />
            </g>
        </MuiSvgIcon>
    );
};
