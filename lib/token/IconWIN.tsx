import { Box } from '@mui/material';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';
import { PNG_WIN_ALLMODE } from 'lib/constants';

export const IconWIN: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} titleAccess={'WIN'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="0 0 70 70">
            <Box component={'image'} width="70" height="70" xlinkHref={PNG_WIN_ALLMODE} xlinkTitle={'WIN'} />
        </MuiSvgIcon>
    );
};
