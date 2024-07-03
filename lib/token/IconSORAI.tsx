import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconSORAI: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="71" height="71" viewBox="0 0 71 71">
            <defs>
                <clipPath id="clip-path-sorai">
                    <rect width="59" height="59" transform="translate(0 0)" fill="#fff" />
                </clipPath>
            </defs>
            <g transform="translate(-1160 -301)">
                <circle cx="35.5" cy="35.5" r="35.5" transform="translate(1160 301)" fill="#529b8b" />
                <g transform="translate(1166 307)" clipPath="url(#clip-path-sorai)">
                    <path
                        d="M33.953,34.7,35.8,40.155H31.635L33.588,34.7Zm9.958,8.37H40.863v1.073h7.511V43.073h-3V34.489h3V33.416H40.863v1.073h3.047ZM30.2,44.146l1.03-2.876h4.957l.966,2.876h1.588l-3.863-10.73H32.687l-3.927,10.73ZM54.362,54.362H23.545V23.544H54.362Z"
                        transform="translate(-9.831 -9.831)"
                        fill="#fff"
                    />
                    <path d="M55.158,81.276A29.33,29.33,0,0,0,81.276,55.158H77.649A25.365,25.365,0,0,1,55.158,77.949Z" transform="translate(-23.032 -23.032)" fill="#fff" />
                    <path d="M0,55.158A29.33,29.33,0,0,0,26.117,81.276V77.949A25.4,25.4,0,0,1,3.627,55.158Z" transform="translate(0 -23.032)" fill="#fff" />
                    <path d="M81.276,26.117A29.33,29.33,0,0,0,55.158,0V3.326A25.4,25.4,0,0,1,77.649,26.117Z" transform="translate(-23.032)" fill="#fff" />
                    <path d="M26.117,0A29.33,29.33,0,0,0,0,26.117H3.627A25.365,25.365,0,0,1,26.117,3.326Z" fill="#fff" />
                </g>
            </g>
        </MuiSvgIcon>
    );
};
