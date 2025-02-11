import { TokenName } from '../lib/types';
import { Icon, IconAndName } from '../lib/components';
import { IconAI16Z, IconGNRT, IconKCS, IconLEE, IconMAX, IconOraiX, IconRACKS, IconROSE, IconTRUMP, IconUSDAI } from '../lib/token';
import './App.css';
import { IconJustLendDao } from '../lib/system';
import { IconAuro, IconKeplr, IconLeap, IconLedger, IconMetamask, IconOwallet, IconTonKeeper, IconTronLink, IconWalletConnect } from '../lib/wallet';

function App() {
    return (
        <div>
            <IconUSDAI sx={{ fontSize: '100px' }} />

            <IconGNRT sx={{ fontSize: '100px' }} />
            <IconRACKS sx={{ fontSize: '100px' }} />
            <IconMAX sx={{ fontSize: '100px' }} />
            <IconROSE sx={{ fontSize: '100px' }} />
            <IconTRUMP sx={{ fontSize: '100px' }} />
            <IconJustLendDao sx={{ fontSize: '100px' }} />
            <IconAI16Z sx={{ fontSize: '100px' }} />
        </div>
    );
}

export default App;
