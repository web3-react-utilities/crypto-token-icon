import React from 'react';
import { SxProps, Typography } from '@mui/material';
import { mapNameToIcon } from '../constants';

type Props = {
    /**
     * The value of tokeName should be in type TokenName
     * @example
     * <TokenIcon tokenName="TRX" />
     *
     * @type {TokenName}
     */
    tokenName: string;
    sx?: SxProps;
};
export function Icon({ tokenName, sx }: Props) {
    if (mapNameToIcon[tokenName]) {
        const Icon = mapNameToIcon[tokenName];
        return <Icon sx={sx} />;
    }
    return <Typography sx={sx}>{tokenName}</Typography>;
}
