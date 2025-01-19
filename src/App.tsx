import { TokenName } from '../lib/types';
import { Icon, IconAndName } from '../lib/components';
import { IconGNRT, IconKCS, IconLEE, IconMAX, IconOraiX, IconRACKS, IconTRUMP } from '../lib/token';
import './App.css';
import { IconJustLendDao } from '../lib/system';
import { IconAuro, IconKeplr, IconLeap, IconLedger, IconMetamask, IconOwallet, IconTonKeeper, IconTronLink, IconWalletConnect } from '../lib/wallet';

function App() {
    return (
        <div>
            <IconGNRT sx={{ fontSize: '400px' }} />
            <IconRACKS sx={{ fontSize: '400px' }} />
            <IconMAX sx={{ fontSize: '400px' }} />
            <IconLEE sx={{ fontSize: '400px' }} />
            <IconTRUMP sx={{ fontSize: '400px' }} />
            <IconJustLendDao sx={{ fontSize: '400px' }} />
            <IconAuro sx={{ fontSize: '400px' }} />
        </div>
    );
}

export default App;
