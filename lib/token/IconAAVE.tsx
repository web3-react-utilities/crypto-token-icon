import { PNG_AAVE_ALLMODE } from '../constants/imagePaths';
import { SvgComponent } from '../types';
import { Box } from '@mui/material';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconAAVE: SvgComponent = (props) => {
    return (
        <MuiSvgIcon {...props} titleAccess={'AAVE'} viewBox="0 0 70 70">
            <Box component={'image'} width="70" height="70" xlinkHref={PNG_AAVE_ALLMODE} xlinkTitle={'AAVE'} />
        </MuiSvgIcon>
    );
};
