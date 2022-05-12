import { BG, BORDER, LAYOUT, TEXT_COLORS } from 'constants/theme';
import styled from 'styled-components';

type Props = {
  isOpen: boolean
};

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 61px;
  max-width: 100vw;
  width: 100%;
  padding: 18px 16px 16px 16px;
  border-top: 2px solid ${BORDER.primary};
  transition: .3s;
  background-color: #FFFFFF;
  z-index: 100;
  .error-message {
    font-weight: 400;
    color: #B91C1C;
    font-size: 12px;
  }
  @media (min-width:${LAYOUT.md}) {
    max-width: 100%;
    position: static;
    padding: 0;
    border-top: none;
    .error-message {
      font-weight: 400;
      color: #B91C1C;
      font-size: 14px;
    }
  }
`;

export const SPriseBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 4px;
  span {
    &.ant-typography {
      color: ${TEXT_COLORS.black};
      line-height: 24px;
    }
  }

  @media (min-width:${LAYOUT.md}) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const SExpandedBlock = styled.div<Props>`
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  transition: .3s;
  button {
    margin-bottom: 8px;
  }
  @media (min-width:${LAYOUT.md}) {
    display: flex;
  }
`;

export const SArrowButton = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${BG.primary};
  cursor: pointer;
  transition: .3s;
  transform: ${({isOpen}) => isOpen ? 'rotate(180deg)' : ''};
  div{
    display: flex;
  }
  @media (min-width:${LAYOUT.md}) {
    display: none;
  }
`;