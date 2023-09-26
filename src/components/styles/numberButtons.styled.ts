import styled from 'styled-components'

export const NumButtons = styled.button`
    border: none;
    background-color: orange;
    width: 100%;
    height: 10vh;
    padding: 10px;
    font-weight: bold;
    border-radius: min(100%, 100%);
    font-size: 20px;

    cursor: pointer;
    &:hover {
      background-color: black;
      color: orange;
    }

`