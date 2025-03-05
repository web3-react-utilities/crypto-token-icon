import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';
import { PNG_ARB_ALLMODE } from 'lib/constants/imagePaths';
import { Box } from '@mui/material';

export const IconARB: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} titleAccess={'ARB'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="0 0 70 70">
            <Box component={'image'} width="70" height="70" xlinkHref={PNG_ARB_ALLMODE} xlinkTitle={'ARB'} />
        </MuiSvgIcon>
    );
};
