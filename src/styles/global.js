import { createGlobalStyle } from "styled-components";

import "rc-slider/assets/index.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    /* Box sizing border-box é para que o padding não
    contar como uma a mais na largura ou altura do componente */
    box-sizing: border-box;
    outline: 0;
  }
  /* Configuração para forçar a aplicação usar 100% da tela
  sem precisar usar position absolute */
  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color: #FFF;
  }

  button {
    cursor: pointer;
  }

`;
