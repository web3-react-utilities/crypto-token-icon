import { Box, useTheme } from '@mui/material';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';
import { PNG_Orchai_DARKMODE, PNG_Orchai_LIGHTMODE } from 'lib/constants/imagePaths';

export const IconOrchai: SvgComponent = (props) => {
    const theme = useTheme();
    return (
        <MuiSvgIcon {...props} titleAccess={'Orchai'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="0 0 70 70">
            <Box component={'image'} width="70" height="70" xlinkHref={theme.palette.mode === 'dark' ? PNG_Orchai_DARKMODE : PNG_Orchai_LIGHTMODE} xlinkTitle={'Orchai'} />
        </MuiSvgIcon>
    );
};
