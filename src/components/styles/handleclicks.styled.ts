import styled from "styled-components";

export const StyledClicks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  margin: 10px;

  > button {
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
    background-color: black;
    color: white;
  }

  > button 
  }
`;
