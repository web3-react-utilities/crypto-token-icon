## Install package

```bash
yarn add @mui/icons-material @mui/material @emotion/styled @emotion/react crypto-token-icon
```

## Structure

`crypto-token-icon` ⇒ For type and common components

`crypto-token-icon/tokens` ⇒ Icon for crypto tokens

`crypto-token-icon/systems` ⇒ Icon for crypto systems

`crypto-token-icon/wallets` ⇒ Icon for crypto wallets

`crypto-token-icon/imageUrls` ⇒ Url image png of tokens

## Using nomal

```tsx
import { IconKeplr } from 'crypto-token-icon/wallets';

function App() {
    return (
        <>
            <IconKeplr />
        </>
    );
}
```

```tsx
import { IconHT, IconHTX } from 'crypto-token-icon/tokens';

function App() {
    return (
        <>
            <IconHT />
            <IconHTX />
        </>
    );
}
```

## Incase unknow token name

```tsx
import { Icon } from 'crypto-token-icon';

function App() {
    return (
        <>
            <Icon tokenName={'BTC'} sx={{ fontSize: '40px' }} />
            <Icon tokenName={'other string' as any} sx={{ fontSize: '40px' }} />
        </>
    );
}
```

## Some useful type and data support

```tsx
import { TokenName } from 'crypto-token-icon';

const x: TokenName = TokenName.BTC;
```

```tsx
import { mapNameToIcon, SvgComponent } from 'crypto-token-icon';

const x: SvgComponent = mapNameToIcon['BTC'];
```

```tsx
import { WalletName } from 'crypto-token-icon';

WalletName.metaMask;
```

```tsx
import { IconAndName } from 'crypto-token-icon'

<IconAndName tokenName={TokenName.BTC} />
<IconAndName tokenName={TokenName.BTC} reverse={true} />
```

<img src="public/imgs/tokenandname.png">

<img src="public/imgs/tokenandname-reverse.png">

```tsx
import { PNG_AAVE_ALLMODE } from 'crypto-token-icon/imageUrls';
```

## Prepare when dev package

prepare for vite:

```bash
yarn add @types/node vite-plugin-dts
```
