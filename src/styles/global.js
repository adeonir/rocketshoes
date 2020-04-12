import { createGlobalStyle } from 'styled-components'

import background from '../assets/images/background.svg'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Lato, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    max-width: 1024px;
    padding: 0 20px 50px;
  }
`
