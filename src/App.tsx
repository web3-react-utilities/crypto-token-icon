import { TokenName } from '../lib/types';
import { IconAndName } from '../lib/components';
import { IconDOGE, IconEDU, IconFIL, IconKAS, IconKCS, IconROSE, IconTON, IconXMR } from '../lib/token';
import './App.css';

function App() {
    return (
        <div>
            <IconKCS sx={{ fontSize: '400px' }} />
            <IconAndName tokenName={TokenName.BTC} />
            <IconAndName tokenName={TokenName.BTC} reverse={true} />
        </div>
    );
}

export default App;
