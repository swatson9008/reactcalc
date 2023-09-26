import styled from 'styled-components'

interface GlobalStyleProps { 
  dark: boolean; 
}

export const NumButtons = styled.button<GlobalStyleProps>`
    border: none;
    background-color: ${(props) => (props.dark ? '#2e2e2e' : 'orange')};
    color: ${(props) => (props.dark ? '#cfcfcf' : 'black')};
    width: 100%;
    height: 10vh;
    padding: 10px;
    font-weight: bold;
    border-radius: min(100%, 100%);
    font-size: 20px;

    cursor: pointer;
    &:hover {
      background-color: ${(props) => (props.dark ? 'orange' : '#2e2e2e')};
      color: ${(props) => (props.dark ? 'black' : 'orange')};
    }

`