import { IconSUN } from '../system';
import { SvgComponent, TokenName } from '../types';
import * as tokenList from '../token';

export const mapNameToIcon: Record<TokenName, SvgComponent> = {
    [TokenName.ATI]: tokenList.IconATI,
    [TokenName.HT]: tokenList.IconHT,
    [TokenName.HTX]: tokenList.IconHTX,
    [TokenName.JST]: tokenList.IconJST,
    [TokenName.BNB]: tokenList.IconBNB,
    [TokenName.BTC]: tokenList.IconBTC,
    [TokenName.ETH]: tokenList.IconETH,
    [TokenName.OCH]: tokenList.IconOCH,
    [TokenName.STRX]: tokenList.IconSTRX,
    [TokenName.USDC]: tokenList.IconUSDC,
    [TokenName.USDD]: tokenList.IconUSDD,
    [TokenName.USDT]: tokenList.IconUSDT,
    [TokenName.xOCH]: tokenList.IconXOCH,
    [TokenName.INJ]: tokenList.IconINJ,
    [TokenName.ORAI]: tokenList.IconORAI,
    [TokenName.OSMO]: tokenList.IconOSMO,
    [TokenName.scOSMO]: tokenList.IconSCOSMO,
    [TokenName.scINJ]: tokenList.IconScINJ,
    [TokenName.scORAI]: tokenList.IconSCORAI,
    [TokenName.sORAI]: tokenList.IconSORAI,
    [TokenName.TRX]: tokenList.IconTRX,
    [TokenName.USDJ]: tokenList.IconUSDJ,
    [TokenName.SUN]: IconSUN,
    [TokenName.SUNOLD]: tokenList.IconSUNOLD,
    [TokenName.ATOM]: tokenList.IconATOM,
    [TokenName.scATOM]: tokenList.IconSCATOM,
    [TokenName.WIN]: tokenList.IconWIN,
    [TokenName.DAI]: tokenList.IconDAI,
    [TokenName.MILKY]: tokenList.IconMILKY,
    [TokenName.LTC]: tokenList.IconLTC,
    [TokenName.LEE]: tokenList.IconLEE,
    [TokenName.NFT]: tokenList.IconNFT,
    [TokenName.NTMPI]: tokenList.IconNTMPI,
    [TokenName.KWT]: tokenList.IconKWT,
    [TokenName.TUSD]: tokenList.IconTUSD,
    [TokenName.AIRI]: tokenList.IconAIRI,
    [TokenName.WTRX]: tokenList.IconTRX,
    [TokenName.WBTC]: tokenList.IconWBTC,
    [TokenName.WETH]: tokenList.IconWETH,
    [TokenName.BUSD]: tokenList.IconBUSD,
    [TokenName.BTT]: tokenList.IconBTT,
    [TokenName.STUSDT]: tokenList.IconSTUSDT,
    [TokenName.wstUSDT]: tokenList.IconSTUSDT,
    [TokenName.APT]: tokenList.IconAPT,
    [TokenName.AR]: tokenList.IconAR,
    [TokenName.ARB]: tokenList.IconARB,
    [TokenName.IMX]: tokenList.IconIMX,
    [TokenName.SHIBAINU]: tokenList.IconSHIB,
    [TokenName.SOL]: tokenList.IconSOL,
    [TokenName.VET]: tokenList.IconVET,
    [TokenName.XLM]: tokenList.IconXLM,
    [TokenName.XRP]: tokenList.IconXRP,
    [TokenName.ALGO]: tokenList.IconALGO,
    [TokenName.AVAX]: tokenList.IconAVAX,
    [TokenName.FLOW]: tokenList.IconFLOW,
    [TokenName.GALA]: tokenList.IconGALA,
    [TokenName.NEO]: tokenList.IconNEO,
    [TokenName.NEXO]: tokenList.IconNEXO,
    [TokenName.MANA]: tokenList.IconMANA,
    [TokenName.MINA]: tokenList.IconMINA,
    [TokenName.SNX]: tokenList.IconSNX,
    [TokenName.ROSE]: tokenList.IconROSE,
    [TokenName.AELF]: tokenList.IconAELF,
    [TokenName.COMP]: tokenList.IconCOMP,
    [TokenName.FLUX]: tokenList.IconFLUX,
    [TokenName.GNO]: tokenList.IconGNO,
    [TokenName.HOT]: tokenList.IconHOT,
    [TokenName.IOTX]: tokenList.IconIOTX,
    [TokenName.METIS]: tokenList.IconMETIS,
    [TokenName.ZEC]: tokenList.IconZEC,
    [TokenName.ZRX]: tokenList.IconZRX,
    [TokenName.DOGE]: tokenList.IconDOGE,
    [TokenName.TON]: tokenList.IconTON,
    [TokenName.EDU]: tokenList.IconEDU,
    [TokenName.KAS]: tokenList.IconKAS,
    [TokenName.PEPE]: tokenList.IconPEPE,
    [TokenName.XMR]: tokenList.IconXMR,
    [TokenName.FDUSD]: tokenList.IconFDUSD,
    [TokenName.STX]: tokenList.IconSTX,
    [TokenName.FIL]: tokenList.IconFIL,
    [TokenName.HBAR]: tokenList.IconHBAR,
    [TokenName.MKR]: tokenList.IconMKR,
    [TokenName.AAVE]: tokenList.IconAAVE,
    [TokenName.WIF]: tokenList.IconWIF,
    [TokenName.GRT]: tokenList.IconGRT,
    [TokenName.HNT]: tokenList.IconHNT,
    [TokenName.BONK]: tokenList.IconBONK,
    [TokenName.FLOKI]: tokenList.IconFLOKI,
    [TokenName.TIA]: tokenList.IconTIA,
    [TokenName.WEDU]: tokenList.IconWEDU,
    [TokenName.JUP]: tokenList.IconJUP,
    [TokenName.JASMY]: tokenList.IconJASMY,
    [TokenName.PYTH]: tokenList.IconPYTH,
    [TokenName.KCS]: tokenList.IconKCS,
    [TokenName.AXS]: tokenList.IconAXS,
    [TokenName.ORAIX]: tokenList.IconOraiX,
    [TokenName.aUSDT]: tokenList.IconAUSDT,
    [TokenName.stATOM]: tokenList.IconSTATOM,
    [TokenName.stOSMO]: tokenList.IconSTOSMO,
    [TokenName.BTCB]: tokenList.IconBTCB,
    [TokenName.WBNB]: tokenList.IconBNB,
    [TokenName.ETHOLD]: tokenList.IconETH,
    [TokenName.WBTT]: tokenList.IconBTT,
    [TokenName.ION]: tokenList.IconION,
    [TokenName.MAX]: tokenList.IconMAX,
    [TokenName.RACKS]: tokenList.IconRACKS,
    [TokenName.GNRT]: tokenList.IconGNRT,
    [TokenName.TRUMP]: tokenList.IconTRUMP,
    [TokenName.WSOL]: tokenList.IconSOL,
    [TokenName.AI16Z]: tokenList.IconAI16Z,
    [TokenName.USDAI]: tokenList.IconUSDAI,
    [TokenName.AIMSTRONG]: tokenList.IconAIMSTRONG,
    [TokenName.JITOSOL]: tokenList.IconJITOSOL,
};
