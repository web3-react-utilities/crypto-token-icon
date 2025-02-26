import { SvgComponent, TokenName } from '../lib/types';
import { Icon, IconAndName } from '../lib/components';
import { IconAI16Z, IconGNRT, IconKCS, IconLEE, IconMAX, IconOraiX, IconRACKS, IconTRUMP } from '../lib/token';
import './App.css';
import { IconJustLendDao } from '../lib/system';
import { IconAuro, IconKeplr, IconLeap, IconLedger, IconMetamask, IconOwallet, IconTonKeeper, IconTronLink, IconWalletConnect } from '../lib/wallet';
import { Box } from '@mui/material';

const icons: TokenName[] = [
    TokenName.AAVE,
    TokenName.AELF,
    TokenName.AI16Z,
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
];
function App() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '20px', columnGap: '10px' }}>
            {icons.map((icon, index) => (
                <Box sx={{ display: 'flex', alignItems: 'center', width: '80px', height: '80px', flexDirection: 'column' }}>
                    <Icon key={index} tokenName={icon} sx={{ fontSize: '70px', borderRadius: '0' }} />
                    {icon}
                </Box>
            ))}
        </Box>
    );
}

export default App;
