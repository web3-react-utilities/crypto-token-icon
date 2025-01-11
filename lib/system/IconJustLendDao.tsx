import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconJustLendDao: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 70 70"
            sx={{
                '.st0': { fill: (theme) => (theme.palette.mode == 'dark' ? '#FFFFFF' : '#000') },
                '.st1': { fill: '#23B49A' },
                '.st2': { fill: '#46EFD1' },
                '.st3': { fill: '#2CCDB0' },
                '.st4': { fill: '#177867' },
                '.st5': { fill: '#131766' },
                '.st6': { fill: '#1B1F6D' },
                '.st7': { fill: '#262C96' },
                '.st8': { fill: '#4950D4' },
                ...props.sx,
            }}
        >
            <circle className="st0" cx="35" cy="35" r="35" />
            <g>
                <path className="st1" d="M25.5,47.6l30.8-15.6l0.2,6.5l-31,15.7V47.6z" />
                <path className="st2" d="M41.9,56v-6.6l-6.5,3.3l0,6.7L41.9,56z" />
                <polygon className="st3" points="32.1,44.3 41.9,49.4 35.4,52.7 25.5,47.7 19.2,44.4 50,28.8 56.3,32.1  " />
                <path className="st4" d="M19.2,44.4l16.2,8.2v6.7l-16.2-8.2V44.4z" />
                <path className="st5" d="M9.2,28.3l16.2,8.2v6.7L9.2,35V28.3z" />
                <path className="st6" d="M38.6,31.7l4.7,2.3l0.1-13l-4.8-2.3V31.7z" />
                <path className="st7" d="M25.4,36.5l30.8-15.6l0.2,6.5l-31,15.7V36.5z" />
                <polygon className="st8" points="56.2,20.9 25.4,36.5 19.1,33.3 9.2,28.3 15.8,25 25.6,30 43.3,21 38.6,18.7 45.2,15.4 49.9,17.7  " />
            </g>
        </MuiSvgIcon>
    );
};
