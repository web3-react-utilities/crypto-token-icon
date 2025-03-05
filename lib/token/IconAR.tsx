import { PNG_AR_DARKMODE, PNG_AR_LIGHTMODE } from '../constants/imagePaths';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';
import { Box, useTheme } from '@mui/material';

export const IconAR: SvgComponent = (props) => {
    const theme = useTheme();
    return (
        <MuiSvgIcon {...props} titleAccess={'AR'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="0 0 70 70">
            <Box component={'image'} width="70" height="70" xlinkHref={theme.palette.mode === 'dark' ? PNG_AR_DARKMODE : PNG_AR_LIGHTMODE} xlinkTitle={'AR'} />
        </MuiSvgIcon>
    );
};
