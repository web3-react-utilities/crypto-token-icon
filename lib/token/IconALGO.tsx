import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconALGO: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="white" />
            <path
                d="M27 26.9963H23.5509L21.3104 18.676L16.4944 26.9963H12.644L20.0876 14.1175L18.8902 9.64539L8.85241 27H5L17.7201 5H21.093L22.5697 10.4658H26.0497L23.6735 14.5909L27 26.9963Z"
                fill="black"
            />
        </MuiSvgIcon>
    );
};
