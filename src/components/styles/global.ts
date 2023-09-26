import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 15px;
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 90vh;
    background-color: #eee;
  }

  .mainContainer {
    width: 20vw;
    height: fit-content;
 
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  .numSheet {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1em;
      grid-row-gap: 1em;
      
  }

  @media(max-width: 600px){

    .mainContainer {
      width: 95vw;
    }

  }

  @media(min-width: 601px){
    .mainContainer {
      width: 20vw;
    }
  }
`;

export default GlobalStyles;
