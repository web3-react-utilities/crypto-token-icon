import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconLogoOrchaiWhite: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            sx={{
                '.cls-1': { fill: (theme) => (theme.palette.mode == 'dark' ? '#fff' : '#000') },
                '.cls-2': { fill: (theme) => (theme.palette.mode == 'dark' ? '#dce1dd' : '#595f5a') },
                '.cls-3': { fill: (theme) => (theme.palette.mode == 'dark' ? '#0c1c18' : '#fffef5') },
                ...props.sx,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 206.39 206.39"
        >
            <path className="cls-1" d="M16.6,93A87.26,87.26,0,0,1,92.74,15.06V3.75A98.5,98.5,0,0,0,5.35,93Z" />
            <path className="cls-1" d="M113.65,15.06A87.26,87.26,0,0,1,189.79,93H201A98.5,98.5,0,0,0,113.65,3.75Z" />
            <path className="cls-1" d="M92.74,188.14A87.29,87.29,0,0,1,17.05,114H5.75a98.48,98.48,0,0,0,87,85.49Z" />
            <path className="cls-1" d="M189.34,114a87.27,87.27,0,0,1-75.69,74.19v11.3a98.49,98.49,0,0,0,87-85.49Z" />
            <circle className="cls-2" cx="103.2" cy="101.6" r="76.44" />
            <path
                className="cls-3"
                d="M158,81.53a4.78,4.78,0,0,0-3.44,8.11l-21,26.61c-2,2.51-4,5.06-5.92,7.6l-3,3.82-.49-1-5.06-10.45-5.11-10.42L94.68,66.59a6.8,6.8,0,1,0-6.33.51L83.79,85.38l-5,20.75c-1.24,5.1-2.43,10.21-3.63,15.32l-11.29-7.28q-7.76-5-15.22-10a3.18,3.18,0,1,0-.19.15q2.49,5.12,4.94,10.4c1.7,3.67,3.34,7.39,5.07,11.2s3.45,7.65,5.25,11.51,3.61,7.73,5.48,11.56a1.75,1.75,0,0,0,3.28-.32l0-.05c1.82-6.88,3.67-13.75,5.45-20.65l.45-1.71,1.82,1.36c5.1,3.82,10.14,7.59,15.21,11.27l7.62,5.51,7.67,5.43a2,2,0,0,0,2.72-.41l0,0c3.72-4.88,7.44-9.76,11.1-14.69l7.46,14,0,.05a1.2,1.2,0,0,0,.64.57,1.23,1.23,0,0,0,1.6-.71l6-15.52c2-5.18,4-10.33,6.08-15.48s4.12-10.3,6.26-15.41c1.52-3.74,3.08-7.45,4.65-11.16a5.16,5.16,0,0,0,.79.07,4.79,4.79,0,0,0,0-9.58ZM73.86,126.91c-1.28,5.41-2.52,10.83-3.76,16.25l-3.46-6.31c-1.92-3.49-3.92-7-5.93-10.54s-4.07-7.18-6.1-10.86-4-7.43-6-11.24q8.22,5.88,16.11,11.74l10,7.49C74.41,124.6,74.14,125.75,73.86,126.91Zm47.94,4.6q-5.25,6.92-10.41,13.9l-6.59-4.5-8.25-5.52c-5.5-3.67-11-7.25-16.5-10.78L79,123.92c1.44-5.55,2.91-11.1,4.31-16.67l5.26-20.69,3.56-14.45,18.26,35.51,5.35,10.3,5.4,10.28,1.31,2.47Zm29.46-29.85c-2,5.15-4.17,10.27-6.28,15.4s-4.25,10.24-6.45,15.33l-5.47,12.74-6.38-13.33c1.38-1.86,2.76-3.72,4.12-5.59,1.9-2.59,3.8-5.18,5.66-7.8l18.31-25.58C153.61,95.78,152.45,98.72,151.26,101.66Z"
            />
        </MuiSvgIcon>
    );
};
