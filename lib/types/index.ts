import { SvgIconProps } from '@mui/material/SvgIcon';

export type SvgComponent = React.FC<SvgIconProps>;

export enum WalletName {
    metaMask = 'MetaMask',
    keplr = 'Keplr',
    owallet = 'Owallet',
    leap = 'Leap',
    tronLink = 'TronLink',
    tonKeeper = 'TonKeeper',
    auro = 'Auro',
    walletConnect = 'WalletConnect',
}

export type TokenName =
    | 'AIRI'
    | 'ATOM'
    | 'BNB'
    | 'BTC'
    | 'BUSD'
    | 'BTT'
    | 'DAI'
    | 'ETH'
    | 'HT'
    | 'HTX'
    | 'INJ'
    | 'JST'
    | 'KWT'
    | 'LTC'
    | 'MILKY'
    | 'NFT'
    | 'NTMPI'
    | 'OCH'
    | 'ORAI'
    | 'OSMO'
    | 'sORAI'
    | 'scATOM'
    | 'scINJ'
    | 'scORAI'
    | 'scOSMO'
    | 'STRX'
    | 'STUSDT'
    | 'wstUSDT'
    | 'SUN'
    | 'SUNOLD'
    | 'TUSD'
    | 'TRX'
    | 'USDC'
    | 'USDD'
    | 'USDT'
    | 'USDJ'
    | 'WBTC'
    | 'WETH'
    | 'WIN'
    | 'WTRX'
    | 'xOCH'
    | 'APT'
    | 'AR'
    | 'ARB'
    | 'IMX'
    | 'SHIBAINU'
    | 'SOL'
    | 'VET'
    | 'XLM'
    | 'XRP'
    | 'ALGO'
    | 'AVAX'
    | 'FLOW'
    | 'GALA'
    | 'NEO'
    | 'NEXO'
    | 'MANA'
    | 'MINA'
    | 'SNX'
    | 'ROSE'
    | 'AELF'
    | 'COMP'
    | 'FLUX'
    | 'GNO'
    | 'HOT'
    | 'IOTX'
    | 'METIS'
    | 'ZEC'
    | 'ZRX';
