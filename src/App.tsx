import { TokenName } from '../lib/types';
import { Icon } from '../lib/components';
import './App.css';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { IconBSC, IconJustLendDao, IconOrchai } from 'lib/system';

const icons: TokenName[] = [
    TokenName.AAVE,
    TokenName.AELF,
    TokenName.AI16Z,
    TokenName.AIMSTRONG,
    TokenName.AIRI,
    TokenName.ALGO,
    TokenName.APT,
    TokenName.AR,
    TokenName.ARB,
    TokenName.ATOM,
    TokenName.AVAX,
    TokenName.AXS,
    TokenName.aUSDT,
    TokenName.BNB,
    TokenName.BTC,
    TokenName.BONK,
    TokenName.BTCB,
    TokenName.BTT,
    TokenName.BUSD,
    TokenName.COMP,
    TokenName.DAI,
    TokenName.DOGE,
    TokenName.EDU,
    TokenName.ETH,
    TokenName.ETHOLD,
    TokenName.FIL,
    TokenName.FDUSD,
    TokenName.FLOKI,
    TokenName.FLUX,
    TokenName.FLOW,
    TokenName.GALA,
    TokenName.GNO,
    TokenName.GNRT,
    TokenName.GRT,
    TokenName.HBAR,
    TokenName.HNT,
    TokenName.HOT,
    TokenName.HT,
    TokenName.HTX,
    TokenName.IMX,
    TokenName.INJ,
    TokenName.IOTX,
    TokenName.ION,
    TokenName.JASMY,
    TokenName.JST,
    TokenName.JUP,
    TokenName.KAS,
    TokenName.KCS,
    TokenName.KWT,
    TokenName.LEE,
    TokenName.LTC,
    TokenName.MANA,
    TokenName.MAX,
    TokenName.METIS,
    TokenName.MILKY,
    TokenName.MINA,
    TokenName.MKR,
    TokenName.NEO,
    TokenName.NEXO,
    TokenName.NFT,
    TokenName.NTMPI,
    TokenName.OCH,
    TokenName.ORAI,
    TokenName.ORAIX,
    TokenName.OSMO,
    TokenName.PEPE,
    TokenName.PYTH,
    TokenName.RACKS,
    TokenName.ROSE,
    TokenName.scATOM,
    TokenName.scOSMO,
    TokenName.scORAI,
    TokenName.scINJ,
    TokenName.SHIBAINU,
    TokenName.SNX,
    TokenName.SOL,
    TokenName.sORAI,
    TokenName.stATOM,
    TokenName.stOSMO,
    TokenName.STRX,
    TokenName.STX,
    TokenName.STUSDT,
    TokenName.SUN,
    TokenName.SUNOLD,
    TokenName.TIA,
    TokenName.TON,
    TokenName.TRX,
    TokenName.TRUMP,
    TokenName.TUSD,
    TokenName.USDAI,
    TokenName.USDC,
    TokenName.USDD,
    TokenName.USDJ,
    TokenName.USDT,
    TokenName.VET,
    TokenName.WBTC,
    TokenName.WETH,
    TokenName.WEDU,
    TokenName.WIN,
    TokenName.WIF,
    TokenName.XLM,
    TokenName.XRP,
    TokenName.xOCH,
    TokenName.XMR,
    TokenName.ZEC,
    TokenName.ZRX,
];
function App() {
    const theme = createTheme({
        palette: {
            mode: 'light',
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ background: theme.palette.mode == 'dark' ? '#000' : '#fff', color: theme.palette.mode == 'dark' ? '#fff' : '#000' }}>
                <IconBSC sx={{ fontSize: '70px' }} />
                <IconJustLendDao sx={{ fontSize: '70px' }} />
                <IconOrchai sx={{ fontSize: '70px' }} />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '20px', columnGap: '10px' }}>
                    {icons.map((icon, index) => (
                        <Box key={icon + index} sx={{ display: 'flex', alignItems: 'center', width: '80px', height: '80px', flexDirection: 'column' }}>
                            <Icon key={index} tokenName={icon} sx={{ fontSize: '50px', borderRadius: '0' }} />
                            {icon}
                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
