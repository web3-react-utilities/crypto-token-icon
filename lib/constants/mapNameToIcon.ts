import {
    IconAAVE,
    IconAELF,
    IconAI16Z,
    IconAIMSTRONG,
    IconAIRI,
    IconALGO,
    IconAPT,
    IconAR,
    IconARB,
    IconATI,
    IconATOM,
    IconAUSDT,
    IconAVAX,
    IconAXS,
    IconBNB,
    IconBONK,
    IconBTC,
    IconBTCB,
    IconBTT,
    IconBUSD,
    IconCOMP,
    IconDAI,
    IconDOGE,
    IconEDU,
    IconETH,
    IconFDUSD,
    IconFIL,
    IconFLOKI,
    IconFLOW,
    IconFLUX,
    IconGALA,
    IconGNO,
    IconGNRT,
    IconGRT,
    IconHBAR,
    IconHNT,
    IconHOT,
    IconHT,
    IconHTX,
    IconIMX,
    IconINJ,
    IconION,
    IconIOTX,
    IconJASMY,
    IconJITOSOL,
    IconJST,
    IconJUP,
    IconKAS,
    IconKCS,
    IconKWT,
    IconLEE,
    IconLTC,
    IconMANA,
    IconMAX,
    IconMETIS,
    IconMILKY,
    IconMINA,
    IconMKR,
    IconNEO,
    IconNEXO,
    IconNFT,
    IconNTMPI,
    IconOCH,
    IconORAI,
    IconOraiX,
    IconOSMO,
    IconPEPE,
    IconPYTH,
    IconRACKS,
    IconROSE,
    IconSCATOM,
    IconScINJ,
    IconSCORAI,
    IconSCOSMO,
    IconSHIB,
    IconSNX,
    IconSOL,
    IconSORAI,
    IconSTATOM,
    IconSTOSMO,
    IconSTRX,
    IconSTUSDT,
    IconSTX,
    IconSUNOLD,
    IconTIA,
    IconTON,
    IconTRUMP,
    IconTRX,
    IconTUSD,
    IconUSDAI,
    IconUSDC,
    IconUSDD,
    IconUSDJ,
    IconUSDT,
    IconVET,
    IconWBTC,
    IconWEDU,
    IconWETH,
    IconWIF,
    IconWIN,
    IconXLM,
    IconXMR,
    IconXOCH,
    IconXRP,
    IconZEC,
    IconZRX,
} from '../token';
import { IconSUN } from '../system';
import { SvgComponent, TokenName } from '../types';

export const mapNameToIcon: Record<TokenName, SvgComponent> = {
    [TokenName.ATI]: IconATI,
    [TokenName.HT]: IconHT,
    [TokenName.HTX]: IconHTX,
    [TokenName.JST]: IconJST,
    [TokenName.BNB]: IconBNB,
    [TokenName.BTC]: IconBTC,
    [TokenName.ETH]: IconETH,
    [TokenName.OCH]: IconOCH,
    [TokenName.STRX]: IconSTRX,
    [TokenName.USDC]: IconUSDC,
    [TokenName.USDD]: IconUSDD,
    [TokenName.USDT]: IconUSDT,
    [TokenName.xOCH]: IconXOCH,
    [TokenName.INJ]: IconINJ,
    [TokenName.ORAI]: IconORAI,
    [TokenName.OSMO]: IconOSMO,
    [TokenName.scOSMO]: IconSCOSMO,
    [TokenName.scINJ]: IconScINJ,
    [TokenName.scORAI]: IconSCORAI,
    [TokenName.sORAI]: IconSORAI,
    [TokenName.TRX]: IconTRX,
    [TokenName.USDJ]: IconUSDJ,
    [TokenName.SUN]: IconSUN,
    [TokenName.SUNOLD]: IconSUNOLD,
    [TokenName.ATOM]: IconATOM,
    [TokenName.scATOM]: IconSCATOM,
    [TokenName.WIN]: IconWIN,
    [TokenName.DAI]: IconDAI,
    [TokenName.MILKY]: IconMILKY,
    [TokenName.LTC]: IconLTC,
    [TokenName.LEE]: IconLEE,
    [TokenName.NFT]: IconNFT,
    [TokenName.NTMPI]: IconNTMPI,
    [TokenName.KWT]: IconKWT,
    [TokenName.TUSD]: IconTUSD,
    [TokenName.AIRI]: IconAIRI,
    [TokenName.WTRX]: IconTRX,
    [TokenName.WBTC]: IconWBTC,
    [TokenName.WETH]: IconWETH,
    [TokenName.BUSD]: IconBUSD,
    [TokenName.BTT]: IconBTT,
    [TokenName.STUSDT]: IconSTUSDT,
    [TokenName.wstUSDT]: IconSTUSDT,
    [TokenName.APT]: IconAPT,
    [TokenName.AR]: IconAR,
    [TokenName.ARB]: IconARB,
    [TokenName.IMX]: IconIMX,
    [TokenName.SHIBAINU]: IconSHIB,
    [TokenName.SOL]: IconSOL,
    [TokenName.VET]: IconVET,
    [TokenName.XLM]: IconXLM,
    [TokenName.XRP]: IconXRP,
    [TokenName.ALGO]: IconALGO,
    [TokenName.AVAX]: IconAVAX,
    [TokenName.FLOW]: IconFLOW,
    [TokenName.GALA]: IconGALA,
    [TokenName.NEO]: IconNEO,
    [TokenName.NEXO]: IconNEXO,
    [TokenName.MANA]: IconMANA,
    [TokenName.MINA]: IconMINA,
    [TokenName.SNX]: IconSNX,
    [TokenName.ROSE]: IconROSE,
    [TokenName.AELF]: IconAELF,
    [TokenName.COMP]: IconCOMP,
    [TokenName.FLUX]: IconFLUX,
    [TokenName.GNO]: IconGNO,
    [TokenName.HOT]: IconHOT,
    [TokenName.IOTX]: IconIOTX,
    [TokenName.METIS]: IconMETIS,
    [TokenName.ZEC]: IconZEC,
    [TokenName.ZRX]: IconZRX,
    [TokenName.DOGE]: IconDOGE,
    [TokenName.TON]: IconTON,
    [TokenName.EDU]: IconEDU,
    [TokenName.KAS]: IconKAS,
    [TokenName.PEPE]: IconPEPE,
    [TokenName.XMR]: IconXMR,
    [TokenName.FDUSD]: IconFDUSD,
    [TokenName.STX]: IconSTX,
    [TokenName.FIL]: IconFIL,
    [TokenName.HBAR]: IconHBAR,
    [TokenName.MKR]: IconMKR,
    [TokenName.AAVE]: IconAAVE,
    [TokenName.WIF]: IconWIF,
    [TokenName.GRT]: IconGRT,
    [TokenName.HNT]: IconHNT,
    [TokenName.BONK]: IconBONK,
    [TokenName.FLOKI]: IconFLOKI,
    [TokenName.TIA]: IconTIA,
    [TokenName.WEDU]: IconWEDU,
    [TokenName.JUP]: IconJUP,
    [TokenName.JASMY]: IconJASMY,
    [TokenName.PYTH]: IconPYTH,
    [TokenName.KCS]: IconKCS,
    [TokenName.AXS]: IconAXS,
    [TokenName.ORAIX]: IconOraiX,
    [TokenName.aUSDT]: IconAUSDT,
    [TokenName.stATOM]: IconSTATOM,
    [TokenName.stOSMO]: IconSTOSMO,
    [TokenName.BTCB]: IconBTCB,
    [TokenName.WBNB]: IconBNB,
    [TokenName.ETHOLD]: IconETH,
    [TokenName.WBTT]: IconBTT,
    [TokenName.ION]: IconION,
    [TokenName.MAX]: IconMAX,
    [TokenName.RACKS]: IconRACKS,
    [TokenName.GNRT]: IconGNRT,
    [TokenName.TRUMP]: IconTRUMP,
    [TokenName.WSOL]: IconSOL,
    [TokenName.AI16Z]: IconAI16Z,
    [TokenName.USDAI]: IconUSDAI,
    [TokenName.AIMSTRONG]: IconAIMSTRONG,
    [TokenName.JITOSOL]: IconJITOSOL,
};
