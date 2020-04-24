import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

describe('App Test', () => {
  it('renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});