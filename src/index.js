import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore,compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(<Provider store={store}>
 <PersistGate loading={null} persistor={persistStore(store)}>

<App/>
</PersistGate>
</Provider>, document.getElementById("root"))