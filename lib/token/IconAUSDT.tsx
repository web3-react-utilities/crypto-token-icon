import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconAUSDT: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 206.39 206.39"
            sx={{ '.cls-1': { fill: '#53ae94' }, '.cls-2': { fill: 'none' }, '.cls-3': { fill: '#fff' }, ...props.sx }}
        >
            <circle className="cls-1" cx="103.1" cy="102.95" r="103.2" />
            <rect className="cls-2" x="17.21" y="19.11" width="171.51" height="171.51" />
            <path id="Path_12017" data-name="Path 12017" className="cls-3" d="M111.93,187.85a85.24,85.24,0,0,0,75.92-75.92H177.31a73.73,73.73,0,0,1-65.38,66.25Z" />
            <path id="Path_12018" data-name="Path 12018" className="cls-3" d="M18.54,111.93a85.26,85.26,0,0,0,75.92,75.92v-9.67a73.84,73.84,0,0,1-65.38-66.25Z" />
            <path id="Path_12019" data-name="Path 12019" className="cls-3" d="M187.85,94.46a85.26,85.26,0,0,0-75.92-75.92v9.67a73.84,73.84,0,0,1,65.38,66.25Z" />
            <path id="Path_12020" data-name="Path 12020" className="cls-3" d="M94.46,18.54A85.26,85.26,0,0,0,18.54,94.46H29.08A73.74,73.74,0,0,1,94.46,28.21Z" />
            <path
                className="cls-3"
                d="M112.12,89.52V78.65H137V62.07H69.26V78.65H94.14V89.51c-20.22.93-35.42,4.94-35.42,9.73S73.93,108,94.14,109v34.84h18V109c20.18-.94,35.36-4.94,35.36-9.73s-15.18-8.79-35.36-9.72m0,16.49h0c-.5,0-3.11.18-8.92.18-4.64,0-7.9-.13-9-.19v0c-17.86-.79-31.2-3.9-31.2-7.63s13.34-6.82,31.2-7.62v12.15c1.17.08,4.51.28,9.13.28,5.55,0,8.34-.23,8.85-.28V90.78c17.82.8,31.12,3.91,31.12,7.62S130,105.22,112.13,106"
            />
        </MuiSvgIcon>
    );
};
