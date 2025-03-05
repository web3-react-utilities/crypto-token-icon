import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';
import { Box } from '@mui/material';
import { PNG_TIA_ALLMODE } from 'lib/constants/imagePaths';

export const IconTIA: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} titleAccess={'TIA'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="0 0 70 70">
            <Box component={'image'} width="70" height="70" xlinkHref={PNG_TIA_ALLMODE} xlinkTitle={'TIA'} />
        </MuiSvgIcon>
    );
};
