import { TokenName } from '../lib/types';
import { IconAndName } from '../lib/components';
import { IconDOGE, IconEDU, IconFIL, IconKAS, IconKCS, IconROSE, IconTON, IconXMR } from '../lib/token';
import './App.css';
import { IconLeap } from '../lib/wallet';

function App() {
    return (
        <div>
            <IconKCS sx={{ fontSize: '400px' }} />
            <IconAndName tokenName={TokenName.BTC} />
            <IconAndName tokenName={TokenName.BTC} reverse={true} />
            <IconLeap sx={{ fontSize: '400px', borderRadius: '16px' }} />
        </div>
    );
}

export default App;
