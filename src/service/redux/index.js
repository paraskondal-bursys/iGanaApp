
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer  from './reducers'
import rootSaga from './sagas';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: 'iGana',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: 0
}

const middleware = []
const enhancers = []

const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware);

enhancers.push(applyMiddleware(...middleware))

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, compose(...enhancers))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export  { store, persistor };
