
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    background: #e9ecef;
    color: #000;
}
`;

export default GlobalStyle;