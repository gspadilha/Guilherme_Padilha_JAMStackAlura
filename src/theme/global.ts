import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import get from 'lodash/get';

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
    background: ${({ theme }) => get(theme, `secondary`)};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => get(theme, `backgroundColor`)};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => get(theme, `backgroundColor`)};
  }
`;
