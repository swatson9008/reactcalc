import styled from "styled-components";

export const StyledHandles = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  width: 80%;
  border-radius: 10px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const StyledEquals = styled.button`
padding: 10px;
cursor: pointer;
font-weight: bold;
border: none;
width: 90%;
border-radius: 20px;
grid-column: 1 / 4;

&:hover {
  background-color: black;
  color: white;
}
`;
