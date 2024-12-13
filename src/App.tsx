import { TokenName } from '../lib/types';
import { IconAndName } from '../lib/components';
import { IconDOGE, IconEDU, IconFIL, IconKAS, IconKCS, IconORAI, IconOraiX, IconOraiXRounded, IconROSE, IconTON, IconXMR } from '../lib/token';
import './App.css';
import { IconLeap } from '../lib/wallet';
import { IconJustLendDao, IconLogoOrchaiWhite } from '../lib/system';

function App() {
    return (
        <div>
            <IconKCS sx={{ fontSize: '400px' }} />
            <IconAndName tokenName={TokenName.BTC} />
            <IconAndName tokenName={TokenName.BTC} reverse={true} />
            <IconJustLendDao sx={{ fontSize: '400px', borderRadius: '16px' }} />
        </div>
    );
}

export default App;
