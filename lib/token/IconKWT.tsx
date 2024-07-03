import React from 'react';
import { SvgComponent } from '../types';
import MuiSvgIcon from '@mui/material/SvgIcon';

export const IconKWT: SvgComponent = (props) => {
    return (
        <MuiSvgIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
        >
            <image
                width="512"
                height="512"
                x="0"
                y="0"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAhcDOCEpK68gAAAEwHpUWHRSYXcgcHJvZmlsZSB0eXBlIHhtcAAAWMPFWFuyqzgM/NcqZgnGsmW8nCTA362az1n+dMuQEEySU5lbdw51CAFZbr1aCvLPr7/lL/zFNBTRmy5lLMEGU7taLikGi5atWLVZpxjn5Xq9LjHifrXEO7loTpOGNJWQFLKjVUljuRQszFouac7J8AmFqlgUoy46x6C3MuqljIaFNnEzG2Lgd7vZXJTPhDsATbKFOPTSHtzFHclDDe5duSLdV8SQxzTlIJHgluK31OKsIU7AE3Ao7hStuDeoadKsUUu84W5U/48LnrRzljjho+gFgthXsTqGwxFX8yJQmF5yTCnZwbQo/pDmjSXhCHqBOUvxvzgXSMXZERffufLAFRDhHHGe2gZAVLQgPvRIGWEWduDzZxSAgFAhENGqe6rCQ5DYntsgcNhS4Fiiao7dx4IO7vH6ZvMjRLhWweUEU0bgcbe5u5ejSizREwcEQIh2o/HSrKcgzhkLM0NPU7FrUzz0ihvWNCEtV/XyHvA5XiicjsoF2rWklIs1P332xrlyYdkURAJCS44em8UtRw1RfTOTcTwYh+0pvyWPfLd/v7089m/6T/YOqO4FuYPlfnWaEPISQ7e8Tw6qSUzSjIR00ZipaLFbV9m9uuCJz6QIEXXvPFaJaBWK9WwfPM0ptU9ustb9gFIPOraCz4k1iPDjAaoFJJHiVYMzAUjkSe3KTtZUDmeq5aAbt1x1xJlc81o1q6GaldrUylvIH9R6BV7M6GVBmIc1pyuvQfrZYzajBu8YvKouiXSjbuTsCQs0XEkZQRxmqGB/AD9C+8C9FRQI4iXpZh2MSBOOwiuoGZzYJqX0qOT8TIZkmg8g2aFDwDSAjRsfbAiemoXLoB0RyUnu0g8VolxkoNfofqvG2E5A5vhwNSLihsY1CYFxEWnfoveL4t3iiI68XVvbhPLbEa3sHeb+Ss1fUJrdA6N6/mB34sna/DWyPTkiYspElNw/1YgxM+FxB98d0YnJ7IIoZ+Bbc6mlj8rLBZVuyOwTC2JZScKOHNuj7LEKEkg1NW9SJgzyWoRbC9p7BuOBZw4QlHpolLCgDNs9WfvSzSqQPUj3QiO3/uUh35Uxx4uDNML/Mlf3qfrZ9fLs+7eu3yEoBb7MDWurUznjlrfUslfHCOIKagc2yJy8VJlWv4shl+e4fA4BVg7espL0/v+h+5lmqDIfwczHGlWng+iurqQQjwlUeVmi7lzYY4ZIYUgAyeQjAOn9/5Ynwyv3S+//79wvvf8PDWrvPy6l77hJG82WLUTyXYy+LpHVxeaeYnuYkKysB/UQoVS8+mE9ZBgjx8ZrLxQIBI+TfVMin1rkny2RH8eoD5G8ozJeMUpgx1M644+zwoaFTkJEFGxTtDlDT5ECZHLsZuqs2Cb9BWrRZ55Hs8b48mw/v/kPvH4K+MAMcmKSYwTp2ydz9tbIiSfCNybKZuN/NVG+q6y+sOS0sr6Yk2QblLo56W1l9YUl31VWX1jyXWX1hSU/q6y4nI0O/mNnHTjkxcTxPEnuEjTdc2z3Q+t/ZMg7gm7eld8zQXKseTvG3BF8mGn/CKIu8OevNTYpeX4H88iP44un9uTk7VcmoeiEsYbcwDdX8i8bxVyIRhWQGAAADZ1JREFUaN7tmXuMXNV9x7/nnHvv3Hnv7uzO7NP7tL02xgbbi41hDbRAlwQqEhKklgIhNG2SqgKStGrURE0ilTaFSI6aKgpRGimEtkmVhFKSuooLFDukxgEva7w4eF/27szsY96v+zqP/jG7y9qGdE1pq0r7lY50R3fm6ve53/P7nd85A2xoQxva0IY2tCGQ/+sAVnRoeOgd7z189MT/PIjiS5c+VGu57GAVUaCSIQoDo16GcU3KARpRkihQdWmYF8O9lyA+AC4AdTHICoBSAGMExULVb2hsE6EkxxhdIjrDU4Ov4p7Te/f7KLldY3TQk6LkKvl1JskJqSlIpeBTOkAUOOQlQNp7BKEB+ACAn4w9/Wzp7d68Ugq27QV8Orsj0dp4f0OiYU85XxnNpHIPhqlv7v7xofvjQePL3bFgwjBM5G2JmUzuYMmxPsYEfd6DTRQ1bgNUu5TuPxKQIqH66vPZfwfkC1/8c3CrBKrr+wB8FYSc+8LVN0/5w6FWJVSfFHKL4LJfcBkDkAiHzb/o29X7p0N3DQ/u/sCBoBkw+jPTCz01222MMPpok45EY9iPaCQEnz8CTQ82VWvWXlvYL+qEGT498pThb32AQJJ8fvQ500yow+dT7x7k0PAQbuvpgF3Kom/4fY3CKX2NauwaK5ffr3uF94fD7KHWvtjvt/XFPtLaG7snGgveQyR+66pbr7p2/723aPGtndBNguauBoRC+janUBtxak44Y3tnFsp2TaMs6jMDoL4oiBaMO441xIWTVsIx9OCmnVTzabw68/eaL+atgFx2jhwaHoIQErrOUC3V4uFo8N49H77jM0MP3NfqzI/DSp2GGaIwfABlCpmZHMafP4vm7nZccfsBUJ0B3AGEAwgPkBy1TAXzZzNYnM7ZxcWKdEt2AGWOUCQBT29CsWahmEtWgBBYoDVkF177s70Hn/7SS0cOrubIZTlyaHgIUiqM/PoVOHt2/uZEZ+zrO27a9eCWa/vDgagJgywh0MBg+Cmk6+KNf5/A1IkUNDOExq44mvvigLAAbgPCBSQHpIJummhsb0ZHf4/WO7hNJ1TDqdHX/61UKk67rhURYJrSglRIN+dVpr7pWsmvzE192wJhWHFk3cl+aHgISgFCSv2nz49/vGtr5+eHPnSwZdPuzSCaApxkPUjFUVksYOwn4zACYey/9xb4GwIYP3wCEy+cRO+eTjAdgJSAJICkUJICnAJch3CA6fGJdKFY+pSrvLOhWmGzxlg7AC6lO10snpppaNwtCGFQa+Kjl+PII8dOQKP0E+39bY/d8Lu3tXTv2wbCsDxFHAAcpXQer/zoFGK93dh99w0IJcJgGsfWg32oLuVw4vsvI/naHJyyB0gGKA1EaSDCAOEGnIqLfCafrlbs85FAxGJMHyOEHgZhRwgzJ6NNQ0IRBokL15LLKr+P7bu6zR/0fWLPndf5Wga7ASEAJQDFAXDUsiWc/KcxtO/YjM03XAHAAzwbkC4MP7BzZBsWJ7JIn1lEenwR/kgQoYYwzGAQPi0MjXIILmCavvZgyN8OoKAI8IfrWNkvC4QQhJjOoqGWKABVh5AcUBzCcTD2L6fQ2NmKgeGtgLIAYQPSW/4eQAhDYqAN8Z522CUX1ayFWs5CMVmGU83Bsz04lg3ueS3+gLmfMTbOuVhXbBeAXLKQXdAaKBBKM1bFTs+fmW2Lb+28wI3Z0XNwKwK7P7gNBFa9Mimvvpwv50I9H+rXZiAIvxkFEjqUp0G5DBIavGoNzDhOl+YzsXAkgFyuvH6QQ8NDIIJCSgG/HsH83JsRMxgZ0Pz+fgLaAgKmlJxTRI1yjz/1xotju3qHBlg4EQIUB7cszI3NYfP1m2EEFMBrdUjgIghazwtBAcGguAbFWT3RqQ7W3oGZnx4Rb46NP1EuV7/BhQQh61shtEPDQ9h59Lcxes13YVuVVhrR7u7fu+9DkcbIDl95KRIICua6CqWKx/MFe65Uc5+bn5o//osfHjswfN8wND9QTOehGxri/Q0AtwAl626qtRDLAJIBggFcg+Ja/VoykHgz0NaG4KaO5PbNHU907L6qdNPnvgyIDB56hyb0EkdOXf8PAMeenl1X/fX2W4ev7d53JYJNEfC5WRTHXsbUqUn4Wg1tU8XuSU0XPpqqlM+efvH0mBnQduy9cyctpPJo6giDGapeVi+AYFBrAQQDOIMSyxCCAoEgSGcX4POh7cCBrmYf/R02MJgErBwAofjSO3bUK6IA4PcaQBn7SLil6VrDNGBnCuAVCyoWR7mpF9lgGyadKCwWw/bNjWjRw5tljWRe/dexx1/41tHFqRPnEGwOLBeAZYDloJV4y4GVseqEoICiQM2CPTUB5ToQqbn/UJ73Pdre9QhEdcd6CxEb6e6AxyyAIJefSxWnX34te+4XrzdW0tmgPxBExRNo6OlE2ADChQWImoWJ2aLjET7jSe+z6YnMj52qe2DLvp54uCUCiLVOrLigA0IDhPaWE2oZAoDgHGePHUU4HHTo3PTDxsgHK1DiKwCyAI4CwBe/9Ng6qpYiAFHHiWTHHVbR3SVrV+m57KcX3py6q7+/U28OWeg0KrCowFxRQWiiwCV/lIKkPnXiZOpvfm3/6dxc8Yq2bR2AIG/lw+r0qX9WK9NLklUIEALXcTA5/uZ8LBb9QVvY+BkQKQOZQwB+sF5HyErVulgSIqA4PhnRzM/t7IpF4zET1QqBawNJx8N0duGIx+2PM8ompZCfbO9r+dotDxwkTR0tUB5dA8Dq1Uqw1cRfW9YJISgX8nj2ye+Nl5cytxwbn009OXsS0LQwgGp+Nim/c9/HLonv4h0iA4DD51OrY6S7Y5mQetqxV16y/zaRL5T5TaYyDd0w4d/UjoEbd6BybqGvXHWHBcQ8oeRwpVBrypzPXt3Y1EjC0UYQqdeTWtar0ttBrIBILjBx+rRKp7Pf7+1oXnrth89AEeI+/cefV6Pf/Wc0vb4NXqgCxSRA6x3WSHfH6jh8PnVp97sWSH27A/DJk44rmEe0g4Mj+2jzYALVX06iZWAQza0NbYXZzB2Ox7uF4M+UC7VkaiLVJ20RCkcaYPiCIOqdIVbfpqYhfe58MLu4lIFSL3CPY/bV0YDwvLtA1YN2IvthqfNbQdReqWTMk14xyBrKHhwQkLcHWQs00t0BIqhSRL5ic97vprM7fEULWrwdDW0m3DOzCNCg0bq9e6cyAiNu1RLlfHk0OZ0sp6fnAlap6teoRnTdB8Z0UEoBQkCWnVgZlDFQSjA7Ob3V8/jPCSGzSqnbTYSfjOpt14f05t1+1niNj4Rv0ol5l1/T3mdLy1SQ4wTE+ZUgF8AQ4kolXiuVnBtjA92J9lYD2ZOTKC7Y0H0GrvzNfdh65+1mc29fn88M7BCO8Ofms9a5N6f9k6d/qc1NTiE3v4BqsQjHqsFzXQjPg+AcnHvwHBe6oSM7Px/KZ/Pziqiarnx/FQv0dEUbOqATHxKxBsSbmjDQ00mvvPm6eNH2bi2kk6coZa8fPp9ab9NIQEAmOOWfHXvp1Sf5REtTyDTBdAopBCqzi0hs2YKtN16DzdfvZZVkOrE0k8LiuRSWpmaQT6Ww+Mo4hHsSlAG6ocPwGdB0DZQyKKXAPU9VK7UkARsypPnRiN7a1jY4iK49/UgdOY7B6wegEi2oWRaSmSwq+dzLSqlXV/a462pkVqqasbMEezT8R01G8NHtnQnNZ+gQHNAjAXReN4hQbzcUKLxsHr6OTiDeCeEJ2IUyyufOI58rI59eQGlhEdViEW6tBsE5oBQ03VCGJJ6b4YapR6FTE9Hedux8/9XQaiUUNQ3Hnn62VkgnjzmV8jHPrT1JCJvRDR8e+tnL69+zr55NUWWCk8fjgcgfbOuKQ9c0CAFQ3YDZGIIUCk7VQ+c1WxDZvgXEDEJWquCZHHx9vVCRJkipIGoWRDYHFQhCMQZWrSL54ilM/vwslCJQADjnkAkCoyUgF89OJAvzc49X7dwTjcEu24MFAgJFFB4+euLyDh9WYYhqIIIeioci9w92xWEuOyMkqbdaEtD8Jho2tUAP+FFZLKNWsNBxdT/CvR2gPhNOtoT8RArBRBM0v4nc1ALOj87AsVwAFEIIzBfOo+Ckn+HceQqUjKHHPaOnwxdMpJX15F2BLMM0QZC/bA6EHxzsStBIyA8hlrfiEpCCQElAKgIpCZQiYLoGsyEIpuuwijZqRRtUYwCl8GwBpeohOZ6HdH4OBXfxx5KJ3yOKptbG8XZnwe/qOGgNTAiCfDpkmI/0JZqjbbEodE2DlICQgJJvQSi17Jaqw0ERKKzcAxQopFAoVStI5udEmRf+TjH5J2shftVh9rs6+72gpTEElTb9DY2wzzQGgsMdsQa9ORqGaRighF4IorB6rdZccy5RqtWwUMggW83OuHC+Cqq+SRStrgfiXYNcAqQASWRUSYxo0O4OGMa+iN/fGvEHWMg0YRoGNE0DowxYBvK4hO14KNVqyFfLvGSXJxzp/EhR9R3qsTPQ3zrs+V/5W+HihpNTroOTXiiyi4JeqRG6jVHWplEaZZSZpN4tCS5EzZNikSv+hoQ8Bqpe0mv+pAy4lwXwnoG8ExAAEEFhmzVGPeZXEiYUfKivrhIENqGq5q9GbB6wL/nt5UC8pyD/FdR6dLnBb2hDG9rQ/1/9J36e/kGMEB93AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAyLTIzVDAzOjU2OjIzKzAwOjAwDupEXQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMi0yM1QwMzo1NjoyMyswMDowMH+3/OEAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDItMjNUMDM6NTY6MzIrMDA6MDBCf9YUAAAAAElFTkSuQmCC"
            ></image>
        </MuiSvgIcon>
    );
};
