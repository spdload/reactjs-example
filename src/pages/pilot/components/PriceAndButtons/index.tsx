import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

import Typography from 'components/Typography';

import { SWrapper, SPriseBlock, SExpandedBlock, SArrowButton } from './styles';
import ArrowIcon from 'assets/images/icons/chevron-down.svg';
import { ErrorsType } from 'types/static';

type TProps = {
  totalPrice: number
  priceName: string
  errors?: ErrorsType
};

const PriceAndButtons: React.FC<TProps> = ({ children, priceName, totalPrice, errors }) => {
  const [isBlockOpen, setIsBlockOpen] = useState(false);
  return (
    <SWrapper >
      <SPriseBlock>
        <Typography text={priceName} weight={500} />
        <Typography text={`$${totalPrice}`} weight={500} />
      </SPriseBlock>
      <SExpandedBlock isOpen={isBlockOpen}>
        {children}
      </SExpandedBlock>
      <SArrowButton isOpen={isBlockOpen} onClick={() => setIsBlockOpen(!isBlockOpen)}>
        <ReactSVG src={ArrowIcon} />
      </SArrowButton>
      {errors?.passengers && 
        <p className='error-message'>*Add at least one passenger</p>
      }
    </SWrapper>
  );
};

export default PriceAndButtons;