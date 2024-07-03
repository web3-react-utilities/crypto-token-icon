import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconJST: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} viewBox="0 0 1000 1000">
            <g>
                <g>
                    <path d="M500,0c276.1,0,500,223.9,500,500s-223.9,500-500,500S0,776.1,0,500,223.9,0,500,0Z" fill="#b41514" style={{ fillRule: 'evenodd' }} />
                    <path d="M496,825a67,67,0,1,1,67-67,67,67,0,0,1-67,67Z" fill="#fff" />
                    <path d="M496,363a67,67,0,1,1,67-67,67,67,0,0,1-67,67Z" fill="#fff" />
                    <polygon points="222 646 222 553 770 553 770 646 222 646" fill="#fff" />
                    <path d="M496,507c-156.3,0-283.5-124-288.8-279h99.1c5.2,100.3,88.2,180,189.7,180s184.5-79.7,189.7-180h99.1C779.5,383,652.3,507,496,507Z" fill="#fff" />
                </g>
            </g>
        </MuiSvgIcon>
    );
};
