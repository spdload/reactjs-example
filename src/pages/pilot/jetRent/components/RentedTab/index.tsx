import Button from 'components/Button';
import { memo, useCallback } from 'react';
import { ReactSVG } from 'react-svg';

import JetsGallery from 'components/JetsGallery';

import history from 'utils/history';

import { JetType } from 'types/store/jets';

import { StyledButtonsContainer } from './styles';

import HurtIcon from 'assets/images/icons/hart-icon.svg';
import HurtIconRed from 'assets/images/icons/hart-icon-red.svg';
import { useDispatch } from 'react-redux';
import { addToSavedJetRequest, removeFromSavedJetRequest } from 'store/actions/jets';

type PropsType = {
  jets: JetType[] | [];
  currentTab: string;
  setPage: (cb: (prev: number) => number) => void;
  hasMore: boolean;
  setUpdatePage: React.Dispatch<React.SetStateAction<number>>
};

const RentedTab: React.FC<PropsType> = ({ jets, currentTab, setPage, hasMore, setUpdatePage }) => {
  const dispatch = useDispatch();

  const handleRentJet = useCallback((jetId) => history.push(`/dashboard/jet/${jetId}`), []);
  const handleToggleSavedJet = (jet: JetType) => {
    const isSaved = jet.is_followed;
    if (isSaved) {
      dispatch(removeFromSavedJetRequest(jet.id));
      setUpdatePage((p) => p + 1);
    } else {
      dispatch(addToSavedJetRequest(jet.id));
      setUpdatePage((p) => p + 1);
    }
  };
  const renderButtons = useCallback(
    (jet: JetType) => {
      return (
        <StyledButtonsContainer>
          <Button variant='light' onClick={() => handleToggleSavedJet(jet)}>
            <ReactSVG src={jet.is_followed ? HurtIconRed : HurtIcon} />
          </Button>
          &nbsp;
          <Button
            text='Rent'
            onClick={() => history.push(`/dashboard/jet/${jet.id}`)}
          />
        </StyledButtonsContainer>
      );
    },
    // eslint-disable-next-line
    [currentTab]
  );
  
  if (+currentTab > 1) {
    return null;
  }
  
  return (
    <JetsGallery
      jets={jets}
      breakPoint={'100000px'}
      renderButtons={currentTab !== '2' ? renderButtons : undefined}
      handleRentJet={currentTab !== '2' ? handleRentJet : undefined}
      isRented={currentTab === '2'}
      next={() => setPage((prev: number) => prev + 1)}
      hasMore={hasMore}
    />
  );
};

export default memo(RentedTab);
