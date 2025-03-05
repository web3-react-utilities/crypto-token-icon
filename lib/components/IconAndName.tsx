import { Box, SxProps, Typography } from '@mui/material';
import { mapNameToIcon } from '../constants/mapNameToIcon';
import { Help } from '@mui/icons-material';
import { TokenName } from '../types';

type Props = {
    tokenName: TokenName | string;
    sx?: SxProps;
    sxIcon?: SxProps;
    sxText?: SxProps;
    reverse?: boolean;
};

export function IconAndName({ tokenName, sx, sxIcon, sxText, reverse = false }: Props) {
    const Icon = mapNameToIcon[tokenName as keyof typeof mapNameToIcon] || Help;
    return (
        <Box sx={{ display: 'flex', placeItems: 'center', columnGap: 0.6, flexDirection: reverse ? 'row-reverse' : undefined, width: 'fit-content', ...sx }}>
            <Icon sx={{ fontSize: '24px', ...sxIcon }} />
            <Typography fontWeight={600} sx={sxText}>
                {tokenName}
            </Typography>
        </Box>
    );
}
