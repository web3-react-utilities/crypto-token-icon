import { TokenName } from '../lib/types';
import { IconAndName } from '../lib/components';
import { IconKCS, IconOraiX } from '../lib/token';
import './App.css';
import { IconJustLendDao } from '../lib/system';

function App() {
    return (
        <div>
            <IconKCS sx={{ fontSize: '400px' }} />
            <IconAndName tokenName={TokenName.BTC} />
            <IconAndName tokenName={TokenName.BTC} reverse={true} />
            <IconOraiX sx={{ fontSize: '400px', borderRadius: '16px' }} />
        </div>
    );
}

export default App;
