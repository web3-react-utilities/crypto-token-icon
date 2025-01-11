import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconLedger: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="2500"
            height="2500"
            viewBox="-550 0 3600 2176"
            xmlSpace="preserve"
            sx={{ background: (theme) => (theme.palette.mode == 'dark' ? '#fff' : '#000'), borderRadius: '50%', fill: (theme) => (theme.palette.mode == 'dark' ? '#000' : '#fff'), ...props.sx }}
        >
            <g>
                <path d="M0,1558v618h940v-137H137v-481H0z M2363,1558v481h-803v137h940v-618H2363z M942,618v940h618v-124h-481V617H942V618z M0,0   v618h137V137h803V0H0z M1560,0v137h803v481h137V0H1560z" />
            </g>
        </MuiSvgIcon>
    );
};
