import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconXRP: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_301_227_XRP)">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#23292F" />
                <path
                    d="M23.07 8H25.96L19.945 13.957C18.8934 14.9931 17.4763 15.5739 16 15.5739C14.5237 15.5739 13.1066 14.9931 12.055 13.957L6.035 8H8.93L13.5 12.523C14.1655 13.1799 15.0629 13.5482 15.998 13.5482C16.9331 13.5482 17.8305 13.1799 18.496 12.523L23.07 8ZM8.895 24.563H6L12.055 18.57C13.1066 17.5339 14.5237 16.9531 16 16.9531C17.4763 16.9531 18.8934 17.5339 19.945 18.57L26 24.562H23.105L18.5 20C17.8345 19.3431 16.9371 18.9748 16.002 18.9748C15.0669 18.9748 14.1695 19.3431 13.504 20L8.894 24.563H8.895Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_301_227_XRP">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </MuiSvgIcon>
    );
};
