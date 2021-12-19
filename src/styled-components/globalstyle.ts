import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color:black;
    color:whitesmoke;
    font-family: 'Helvetica', 'Arial', sans-serif;
    margin:0;
    padding:0;
    height:100%;
  }
`;
export default GlobalStyle;
