import React from 'react';
import { Router, Route } from "react-router-dom";
import styled from 'styled-components'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import backgroundImage from './assets/starwars.jpg';
import reducer from './reducers'
import rootSaga from './sagas'
import history from './services/history';
import Species from './views/Species';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
    background-image: url('${backgroundImage}');
`;

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Background>
            <Route exact path="/" component={Species} />
            <Route path="/species" component={Species} />
          </Background>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
