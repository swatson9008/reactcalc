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
    height: fit-content;
    background-color: #9e9e9e;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 10px; 
  }

  .numSheet {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1em;
      grid-row-gap: 1em;
      margin: 15px;
      
  }

  .symbolSheet {
    display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 1em;
      grid-row-gap: 1em;
      margin: 10px;
  }

  @media(max-width: 1199px){

    .mainContainer {
      width:40vw;
    }

  }

  @media(max-width: 500px){

    .mainContainer {
      width: 100vw;
    }

  }

  @media(min-width: 1200px){
    .mainContainer {
      width: 20vw;
    }
  }
`;

export default GlobalStyles;
