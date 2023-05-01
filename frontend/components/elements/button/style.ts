import styled from 'styled-components'

export const StyledButton = styled.div<styledButtonInterface>`
  border-radius: 4px;
  padding: 1rem;
  color: #FEFEFE;
  background-color: ${(props) => (props.background)};
  width: fit-content;
  height: fit-content;
  margin-left: 1rem;
  font-weight: 500;
  cursor: pointer;
`;