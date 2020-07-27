import { createStore,applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './rootReducer';
import {logger} from "redux-logger/src";
import createSagaMiddleware from "redux-saga";
import {sagaWatcher} from "./services/sagas";

const persistConfig = {
  key: 'root',
  storage,
  autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const saga = createSagaMiddleware();

const store = createStore(persistedReducer,compose(applyMiddleware(logger,saga)));

saga.run(sagaWatcher)

export default () => {

  const persistor = persistStore(store)
  return { store, persistor }
}
