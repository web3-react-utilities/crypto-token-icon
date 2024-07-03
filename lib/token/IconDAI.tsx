import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconDAI: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                <linearGradient id="a-dai" x1=".5" x2=".5" y1="1.142" y2="-.105" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#f9a606" />
                    <stop offset="1" stopColor="#fbcc5f" />
                </linearGradient>
            </defs>
            <circle cx="25" cy="25" r="25" fill="url(#a-dai)" />
            <path
                fill="#fff"
                d="M39.825 20.875h-2.967c-1.633-4.533-6.025-7.642-11.817-7.642h-9.525v7.642h-3.308v2.742h3.308v2.875h-3.308v2.741h3.308v7.55h9.525c5.725 0 10.083-3.083 11.758-7.55h3.025v-2.742h-2.358a12.433 12.433 0 00.092-1.483v-.067c0-.45-.025-.892-.067-1.325h2.342v-2.742zm-21.642-5.2h6.858c4.25 0 7.408 2.092 8.867 5.192H18.183zm6.858 18.642h-6.858v-5.092h15.708c-1.466 3.05-4.616 5.091-8.85 5.091zm9.758-9.25a9.859 9.859 0 01-.1 1.417H18.183v-2.875h16.525a10.84 10.84 0 01.092 1.392z"
            />
        </MuiSvgIcon>
    );
};
