import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';

import Section from 'components/Section';
import Tabs from 'components/Tabs';
import Typography from 'components/Typography';
import JetRentFilter from 'components/Forms/JetRentFilter';
import Filter from 'components/Filter';
import MyJets from 'pages/common/myJets';
import RentedTab from './components/RentedTab';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import Requests from 'pages/common/Requests';

import { fetchJetTypes } from 'store/actions/jets';
import { setRentFilters } from 'store/actions/rentFilters';

import { useJetList } from 'services/jets/useJetList';
import { getAirportsRequest } from 'store/actions/airports';

import { StyledHeader, StyledPageContainer, StyledWrapper } from './styles';


const JetRent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('0');
  
  const { jets, error, loading, setPage, resetStatus, hasMore, setUpdatePage } = useJetList(currentTab);
  const{ isLoading } = useSelector((state: any) => state.myJets);

  const dispatch = useDispatch();
  
  const setFilters = useCallback(
    (values: FormikValues) => {
      dispatch(setRentFilters(values));
      setPage(1);
    }, [dispatch, setPage]
  );

  useEffect(() => {
    dispatch(fetchJetTypes());
    dispatch(getAirportsRequest());
  }, [dispatch]);

  return (
    <StyledWrapper>
      <Modal
        type={'danger'}
        handleClose={resetStatus}
        title={'Error occurred'}
        isVisible={!!error}
        hideButtons
      >
        <Typography text='Error occurred, please refresh your browser' variant='text-base' weight={500} />
      </Modal>
      {(isLoading || loading) && <Loader/>}
      <StyledHeader>
        <Typography text='Rent a Jet' variant='text-base' weight={500} />
      </StyledHeader>
      <StyledPageContainer>
        {+currentTab < 2 && <Filter children={<JetRentFilter submitHandler={setFilters} />} />}
        <Section collapsable={false}>
          <Tabs
            data={[
              {
                title: 'Search for Aircraft',
                component: 
                  <RentedTab 
                    jets={jets}
                    currentTab={currentTab}
                    setPage={setPage}
                    hasMore={hasMore}
                    setUpdatePage={setUpdatePage}
                  />,
              },
              {
                title: 'Saved Aircrafts',
                component: 
                  <RentedTab
                    jets={jets}
                    currentTab={currentTab}
                    setPage={setPage}
                    hasMore={hasMore}
                    setUpdatePage={setUpdatePage}
                  />,
              },
              {
                title: 'Rented Aircrafts',
                component: <Requests />,
              },
              {
                title: 'My Aircrafts',
                component: <MyJets />,
              },
            ]}
            activeKey={currentTab}
            onChange={setCurrentTab}
          />
        </Section>
      </StyledPageContainer>
    </StyledWrapper>
  );
};

export default JetRent;
