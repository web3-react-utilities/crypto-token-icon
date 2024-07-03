import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';
import { mapNameToIcon } from '../constants';
import { Help } from '@mui/icons-material';

type Props = {
    tokenName: string;
    sx?: SxProps;
    sxIcon?: SxProps;
    sxText?: SxProps;
};

export function IconAndName({ tokenName, sx, sxIcon, sxText }: Props) {
    const Icon = mapNameToIcon[tokenName as keyof typeof mapNameToIcon] || Help;
    return (
        <Box sx={{ display: 'flex', placeItems: 'center', columnGap: 0.6, ...sx }}>
            <Icon sx={{ fontSize: '24px', ...sxIcon }} />
            <Typography fontWeight={600} sx={sxText}>
                {tokenName}
            </Typography>
        </Box>
    );
}
