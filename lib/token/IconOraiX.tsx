import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconOraiX: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            sx={{
                color: (theme) => (theme.palette.mode == 'dark' ? 'white' : 'black'),
                '& .stcolor': { stopColor: (theme) => (props.sx as any)?.color || (theme.palette.mode == 'dark' ? 'white' : 'black') },
                ...props.sx,
            }}
            viewBox="0 0 45 44"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 19.7264H2.44673C2.51127 19.1572 2.60515 18.5939 2.71663 18.0365C2.9748 16.775 3.36205 15.5311 3.86078 14.3459C4.35365 13.1783 4.96386 12.0576 5.67382 11.0015C6.37792 9.95706 7.18763 8.9772 8.07948 8.08534C8.97133 7.19349 9.95119 6.38378 10.9956 5.67969C12.0459 4.96973 13.1724 4.35952 14.34 3.86665C15.5253 3.36792 16.7692 2.98067 18.0307 2.7225C18.5881 2.61102 19.1514 2.51713 19.7205 2.45259V0C9.32925 1.06788 1.06201 9.32924 0 19.7264ZM41.5533 24.2795C41.4887 24.8486 41.3949 25.4119 41.2834 25.9693C41.0252 27.2308 40.638 28.4747 40.1392 29.66C39.6464 30.8276 39.0361 31.9483 38.3262 33.0044C37.6221 34.0488 36.8124 35.0287 35.9205 35.9205C35.0287 36.8124 34.0488 37.6221 33.0044 38.3262C31.9541 39.0361 30.8276 39.6464 29.66 40.1392C28.4747 40.638 27.2308 41.0252 25.9693 41.2834C25.4119 41.3949 24.8486 41.4887 24.2795 41.5533V44C34.6708 42.938 42.938 34.6708 44 24.2795H41.5533ZM14.34 40.1392C13.1724 39.6464 12.0517 39.0361 10.9956 38.3262C9.95119 37.6221 8.97133 36.8124 8.07948 35.9205C7.18763 35.0287 6.37792 34.0488 5.67382 33.0044C4.96386 31.9541 4.35365 30.8276 3.86078 29.66C3.36205 28.4747 2.9748 27.2308 2.71663 25.9693C2.60515 25.4119 2.51127 24.8486 2.44673 24.2795H0C1.06201 34.6708 9.32925 42.938 19.7205 44V41.5533C19.1514 41.4887 18.5881 41.3949 18.0307 41.2834C16.7692 41.0311 15.5253 40.6438 14.34 40.1392ZM24.2795 0V2.44673C24.8486 2.51127 25.4119 2.60515 25.9693 2.71663C27.2308 2.9748 28.4747 3.36205 29.66 3.86078C30.8276 4.35365 31.9483 4.96386 33.0044 5.67382C34.0488 6.37792 35.0287 7.18763 35.9205 8.07948C36.8124 8.97133 37.6221 9.95119 38.3262 10.9956C39.0361 12.0459 39.6464 13.1724 40.1392 14.34C40.638 15.5253 41.0252 16.7692 41.2834 18.0307C41.3949 18.5881 41.4887 19.1514 41.5533 19.7205H44.0059C42.938 9.32924 34.6766 1.06788 24.2795 0Z"></path>
            <path d="M14.7387 10.5381H10.5435V14.7333H14.7387V10.5381Z"></path>
            <path d="M33.4736 10.5381H27.8115V16.2002H33.4736V10.5381Z"></path>
            <path d="M33.4737 26.0215V33.4673H26.0278V26.0215H33.4737Z"></path>
            <path d="M12.9843 31.0215H10.5435V33.4623H12.9843V31.0215Z"></path>
            <path d="M22.0085 22.1623L10.696 33.4689H10.5435V33.3105L21.85 22.0039L22.0085 22.1623Z" fill="url(#paint0_linear_1311_9895_oraix)"></path>
            <path d="M33.4733 10.5381V10.6965L27.9638 16.2002L22.1667 22.0031L22.0083 21.8447L27.8112 16.0476L33.3149 10.5381H33.4733Z" fill="url(#paint1_linear_1311_9895_Oraix)"></path>
            <path d="M22.0085 21.8447L21.85 22.0031L10.5435 10.6965V10.5381H10.696L22.0085 21.8447Z" fill="url(#paint2_linear_1311_9895_oraix)"></path>
            <path d="M33.4733 33.3105V33.4689H33.3149L22.0083 22.1623L22.1667 22.0039L33.4733 33.3105Z" fill="url(#paint3_linear_1311_9895_oraix)"></path>
            <defs>
                <linearGradient id="paint0_linear_1311_9895_oraix" x1="21.9282" y1="22.0815" x2="12.9518" y2="31.0579" gradientUnits="userSpaceOnUse">
                    <stop className="stcolor" stopOpacity="0"></stop>
                    <stop className="stcolor" offset="1"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_1311_9895_Oraix" x1="22.0848" y1="21.925" x2="27.7815" y2="16.2282" gradientUnits="userSpaceOnUse">
                    <stop className="stcolor" stopOpacity="0"></stop>
                    <stop className="stcolor" offset="1"></stop>
                </linearGradient>
                <linearGradient id="paint2_linear_1311_9895_oraix" x1="21.8781" y1="21.8754" x2="14.7094" y2="14.7068" gradientUnits="userSpaceOnUse">
                    <stop className="stcolor" stopOpacity="0"></stop>
                    <stop className="stcolor" offset="1"></stop>
                </linearGradient>
                <linearGradient id="paint3_linear_1311_9895_oraix" x1="22.0622" y1="22.0595" x2="26.158" y2="26.1553" gradientUnits="userSpaceOnUse">
                    <stop className="stcolor" stopOpacity="0"></stop>
                    <stop className="stcolor" offset="0.9809"></stop>
                </linearGradient>
            </defs>
        </MuiSvgIcon>
    );
};
