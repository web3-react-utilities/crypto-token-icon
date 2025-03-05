import { SxProps, Typography } from '@mui/material';
import { mapNameToIcon } from '../constants/mapNameToIcon';

type Props = {
    /**
     * The value of tokeName should be in type TokenName
     * @example
     * <TokenIcon tokenName="TRX" />
     * <TokenIcon tokenName={value as any} />
     * @type {TokenName}
     */
    tokenName: keyof typeof mapNameToIcon;
    sx?: SxProps;
};
export function Icon({ tokenName, sx }: Props) {
    if (mapNameToIcon[tokenName]) {
        const Icon = mapNameToIcon[tokenName];
        return <Icon sx={sx} />;
    }
    return <Typography sx={sx}>{tokenName}</Typography>;
}
