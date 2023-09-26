import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps { 
  dark: boolean; 
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  body {
    margin: 15px;
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 90vh;
    background-color: ${(props) => (props.dark ? '#2b2b2b' : '#d9d9d9')};
  }

  .mainContainer {
    height: fit-content;
    background-color: ${(props) => (props.dark ? '#5e5e5e' : '#9e9e9e')};
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding-top: 10px; 
    padding-bottom: 10px;
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

  .DMSwitch {
    display: flex;
    justify-content: center;
    margin: 0.5em;
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
