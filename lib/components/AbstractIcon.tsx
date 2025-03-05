import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';
import { Box, useTheme } from '@mui/material';

export type AbstractIconProps = SvgComponent & {
    lightModeUrl: string;
    darkModeUrl: string;
    modeOnly?: 'light' | 'dark';
    title: string;
};

export type TokenIconProps = Omit<AbstractIconProps, 'lightModeUrl' | 'darkModeUrl' | 'title'>;

export function AbstractIcon({ lightModeUrl, darkModeUrl, modeOnly, title, ...props }: AbstractIconProps) {
    const theme = useTheme();
    return (
        <MuiSvgIcon {...props} titleAccess={title} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="0 0 70 70">
            <Box
                component={'image'}
                width="70"
                height="70"
                xlinkHref={modeOnly ? (modeOnly == 'dark' ? darkModeUrl : lightModeUrl) : theme.palette.mode === 'dark' ? darkModeUrl : lightModeUrl}
                xlinkTitle={title}
            />
        </MuiSvgIcon>
    );
}
