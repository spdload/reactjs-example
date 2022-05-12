import React, { Suspense } from 'react';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import Loader from './components/Loader';

const App = () => {
  return (
    <Suspense fallback={Loader}>
      <Provider store={configureStore}>
        <Router history={history}>
          <AppContainer />
        </Router>
      </Provider>
    </Suspense>
  );
};

export default App;
