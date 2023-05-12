import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Heebo', sans-serif;
    background: ${(props) => props.theme.color.background};
    height: 100vh;
  }
`;

export default GlobalStyle;
