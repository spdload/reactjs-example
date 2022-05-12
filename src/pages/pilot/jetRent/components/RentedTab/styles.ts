import styled from 'styled-components';

export const StyledButtonsContainer = styled.div`
  margin: 0 10px 10px 10px;
  display: flex;
  justify-content: flex-end;
  button:active, button:focus {
    border: 1px solid transparent;
  }
  button:first-child {
    div {
      display: flex;
    }
  }
`;
