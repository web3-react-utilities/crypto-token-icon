import { PNG_AAVE_ALLMODE } from '../constants/imagePaths';
import { SvgComponent } from '../types';
import { Box } from '@mui/material';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconAAVE: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} titleAccess={'AAVE'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="0 0 70 70">
            <Box component={'image'} width="70" height="70" xlinkHref={PNG_AAVE_ALLMODE} xlinkTitle={'AAVE'} />
        </MuiSvgIcon>
    );
};
