import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    border: 0;
  }

  a, button {
    -webkit-tap-highlight-color: transparent
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

export default GlobalStyles
