import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconSTATOM: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.18 208.18">
            <circle className="cls-1" cx="104.09" cy="104.09" r="104.09" fill="#e91179" />
            <circle className="cls-2" cx="136.54" cy="74.16" r="7.83" fill="#fff" />
            <circle className="cls-2" cx="58.03" cy="88.53" r="7.83" fill="#fff" />
            <circle className="cls-2" cx="94.66" cy="150.22" r="7.83" fill="#fff" />
            <circle className="cls-2" cx="103.99" cy="104.15" r="7.44" fill="#fff" />
            <ellipse
                className="cls-3"
                cx="104.09"
                cy="104.09"
                rx="69.23"
                ry="12.46"
                transform="translate(-38.1 65.99) rotate(-30)"
                fill="none"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeWidth={'4.72px'}
            />
            <ellipse
                className="cls-3"
                cx="104.09"
                cy="104.09"
                rx="12.46"
                ry="69.23"
                transform="translate(-38.1 142.19) rotate(-60)"
                fill="none"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeWidth={'4.72px'}
            />
            <ellipse className="cls-3" cx="104.09" cy="104.09" rx="12.46" ry="69.23" fill="none" stroke="#fff" strokeMiterlimit={10} strokeWidth={'4.72px'} />
        </MuiSvgIcon>
    );
};
