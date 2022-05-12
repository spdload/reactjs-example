import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  display: flex;
  min-height: 100vh;

  .section {
    max-width: 100%;
    padding: 12px;
  }

  @media screen and (max-width: 769px) {

    .section {
      padding: 0;
    }
  }
`;

export const StyledHeader = styled.div`
  display: none;

  @media screen and (max-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 21px 10px 16px;
    margin-top: 40px;
    background: #f3f4f6;
    box-shadow: 0 1px 2px rgba(16, 42, 67, 0.06), 0 1px 3px rgba(16, 42, 67, 0.1);
    margin-bottom: 5px;
  }
`;

export const StyledWrapper = styled.div`
  padding-bottom: 25px;
`;
