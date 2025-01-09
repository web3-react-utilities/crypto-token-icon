import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconOwallet: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} width={'300'} height={'300'} viewBox="-24 0 348 289.59" sx={{ borderRadius: '50%', background: '#e8d6ff', ...props.sx }}>
            <defs>
                <linearGradient id="linear-gradient-owallet" x1="259.28" y1="-2619.92" x2="259.28" y2="-2533.12" gradientTransform="translate(0 -2387.99) scale(1 -1)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#925aff" />
                    <stop offset="1" stopColor="#713bbb" />
                </linearGradient>
            </defs>
            <path
                style={{ fill: '#ad83ff', opacity: 0.51, isolation: 'isolate', strokeWidth: '0px' }}
                d="M262.67,97.34h-91.81c-4.49,0-8.22-3.65-8.22-8.22v-39.28c0-4.49,3.65-8.22,8.22-8.22h95.92c2.3,0,4.11,1.8,4.11,4.11v43.47c-.08,4.49-3.72,8.14-8.22,8.14Z"
            />
            <path
                style={{ fill: '#ad83ff', opacity: 0.5, isolation: 'isolate', strokeWidth: '0px' }}
                d="M239.71,78.33h-84.86c-2.53,0-4.49-2.07-4.49-4.49V27.15c0-2.53,2.07-4.49,4.49-4.49h84.94c2.53,0,4.49,2.07,4.49,4.49v46.69c.04,2.53-2.04,4.49-4.57,4.49Z"
            />
            <path
                style={{ fill: '#ad83ff', opacity: 0.9, isolation: 'isolate', strokeWidth: '0px' }}
                d="M295.66,118.65h-99.57c-2.38,0-4.34-1.88-4.34-4.34v-48.3c0-2.38,1.88-4.34,4.34-4.34h99.57c2.38,0,4.34,1.88,4.34,4.34v48.27c.04,2.38-1.96,4.38-4.34,4.38Z"
            />
            <path
                style={{ fill: '#925aff', strokeWidth: '0px' }}
                d="M263.02,228.62c-26.26,36.9-69.38,60.98-118.11,60.98C64.89,289.59,0,224.7,0,144.68S59.36,5.45,134.54.15c.62,0,1.19-.08,1.8-.08,4.76.15,8.56,3.72,8.56,8.14v52.26c-46.58,0-84.28,37.74-84.28,84.28s37.74,84.28,84.28,84.28,84.28-37.74,84.28-84.28c0,0,47.11,19.47,33.83,83.86Z"
            />
            <path
                style={{ fill: '#ad83ff', strokeWidth: '0px' }}
                d="M289.43,155.86c-.73-6.26-6.33-11.1-13.21-11.1h-121.53c-5.38,0-9.75-4.34-9.75-9.75V8.22c0-4.42-3.8-7.99-8.56-8.14.54,0,1.11-.08,1.65-.08,6.18-.08,9.48,2.46,10.37,3.26l.08.08.15.15,130.51,130.51c11.06,11.14,10.29,21.85,10.29,21.85Z"
            />
            <path
                style={{ fill: 'url(#linear-gradient-owallet)', opacity: 0.91, isolation: 'isolate', strokeWidth: '0px' }}
                d="M289.37,155.74c-.08,1.61-.23,3.19-.38,4.68-2.73,25.23-11.94,48.53-25.96,68.19,13.29-64.43-33.83-83.86-33.83-83.86h47c6.91,0,12.52,4.84,13.17,10.98Z"
            />
        </MuiSvgIcon>
    );
};
