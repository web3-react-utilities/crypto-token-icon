import { TokenName } from '../lib/types';
import { Icon, IconAndName } from '../lib/components';
import { IconKCS, IconLEE, IconOraiX } from '../lib/token';
import './App.css';
import { IconJustLendDao } from '../lib/system';
import { IconAuro, IconKeplr, IconLeap, IconLedger, IconMetamask, IconOwallet, IconTonKeeper, IconTronLink, IconWalletConnect } from '../lib/wallet';

function App() {
    return (
        <div>
            <IconKeplr sx={{ fontSize: '400px' }} />
            <IconLeap sx={{ fontSize: '400px' }} />
            <IconAuro sx={{ fontSize: '400px' }} />
            <IconOwallet sx={{ fontSize: '400px' }} />
            <IconTonKeeper sx={{ fontSize: '400px' }} />
            <IconTronLink sx={{ fontSize: '400px' }} />
            <IconWalletConnect sx={{ fontSize: '400px' }} />
            <IconAndName tokenName={TokenName.BTC} />
            <IconAndName tokenName={TokenName.BTC} reverse={true} />
            <IconOraiX sx={{ fontSize: '400px', borderRadius: '16px' }} />
        </div>
    );
}

export default App;
