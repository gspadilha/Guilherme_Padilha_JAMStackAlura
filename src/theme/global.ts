import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', 'Fira Sans Condensed', sans-serif;
  }

  ${normalize}

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #A8D9F2;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff8e6;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #fff8e6;
  }
`;
