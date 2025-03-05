import { Box, useTheme } from '@mui/material';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';
import { PNG_SOL_DARKMODE, PNG_SOL_LIGHTMODE } from 'lib/constants';

export const IconSOL: SvgComponent = (props) => {
    const theme = useTheme();
    return (
        <MuiSvgIcon {...props} titleAccess={'SOL'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="0 0 70 70">
            <Box component={'image'} width="70" height="70" xlinkHref={theme.palette.mode === 'dark' ? PNG_SOL_DARKMODE : PNG_SOL_LIGHTMODE} xlinkTitle={'SOL'} />
        </MuiSvgIcon>
    );
};
