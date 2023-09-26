import styled from "styled-components";

interface GlobalStyleProps {
  dark: boolean;
}

export const StyledMessage = styled.div<GlobalStyleProps>`
  background-color: ${(props) => (props.dark ? "#2b2b2b" : "#c0ebbc")};
  color: ${(props) => (props.dark ? "#ebebeb" : "black")};
  padding: 20px;
  font-weight: bold;
  margin: 10px;
  border-radius: 10px;
  text-align: right;
`;
