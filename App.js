/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import { combineReducers, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './src/redux/actionsSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './src/navigation/navigator';
import Loading from './src/components/Loading';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favourites'],
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

const store = createStore(rootReducer);
export const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
