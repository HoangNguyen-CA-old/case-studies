import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-family: ${({ theme }) => theme.mainFont};
    }

    html{
        font-size: 90%;

    }
   
    @media ${({ theme }) => theme.breakpoints.tablet}{
        html{
            font-size: 100%;
        }
    }

    @media ${({ theme }) => theme.breakpoints.laptop}{
        html{
            font-size: 110%;
        }
    }

`;

export default GlobalStyle;
