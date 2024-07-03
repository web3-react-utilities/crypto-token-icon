import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconSTRX: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} viewBox="0 0 300 300">
            <circle fill="#7166fd" cx="150" cy="150" r="150" />
            <path fill="#fff" d="M113.66,72.03l8.87,84.28c.09,.86,1.02,1.36,1.79,.96l100.69-52.12c.98-.51,.84-1.96-.22-2.27l-109.56-32.16c-.84-.25-1.66,.44-1.57,1.31Z" />
            <path fill="#fff" d="M177.39,145.67l6.86,84.47c.07,.86-.75,1.53-1.58,1.28l-108.59-32.61c-1.06-.32-1.19-1.77-.2-2.27l101.73-51.85c.78-.4,1.71,.12,1.78,1Z" />
        </MuiSvgIcon>
    );
};
