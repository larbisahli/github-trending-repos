import { createGlobalStyle } from 'styled-components';
import { ElementsCollection } from './Elements';
import { RootVariables } from './Variables';

const GlobalStyle = createGlobalStyle`

    @media screen and (-webkit-min-device-pixel-ratio: 2),
           screen and (min-resolution: 2dppx) {
                body {
                    -moz-osx-font-smoothing: grayscale;
                    -webkit-font-smoothing: antialiased;
                }
    }

    ${RootVariables}
    ${ElementsCollection}
`;

export default GlobalStyle;
