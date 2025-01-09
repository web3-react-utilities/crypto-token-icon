import { TokenName } from '../lib/types';
import { Icon, IconAndName } from '../lib/components';
import { IconKCS, IconOraiX } from '../lib/token';
import './App.css';
import { IconJustLendDao } from '../lib/system';
import { IconLedger } from '../lib/wallet';

function App() {
    return (
        <div>
            <Icon tokenName={'SOL' as any} sx={{ fontSize: '400px' }} />
            <IconLedger sx={{ fontSize: '400px' }} />
            <IconAndName tokenName={TokenName.BTC} />
            <IconAndName tokenName={TokenName.BTC} reverse={true} />
            <IconOraiX sx={{ fontSize: '400px', borderRadius: '16px' }} />
        </div>
    );
}

export default App;
