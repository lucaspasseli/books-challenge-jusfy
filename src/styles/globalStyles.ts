import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Heebo', sans-serif;
    background: ${(props) => props.theme.color.background};
    height: 100vh;
  }

  h1,h2 {
    margin: 0
  }

  @media only screen and (min-width: 1024px) {
   #root {
    display: flex;
    justify-content: center;
   } 
  }
`

export default GlobalStyle
