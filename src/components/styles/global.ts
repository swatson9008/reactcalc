import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 15px;
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 50vh
  }

  .mainContainer {
    width: 80vw;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  .mainContainer > div > div {
    display: flex;
  }
`;

export default GlobalStyles;
