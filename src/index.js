import React, { Component } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import {store,persistor} from './service/redux'
import AppComponent from './app'
import { PersistGate } from 'redux-persist/integration/react'

const Root =()=> {
  Text.defaultProps = Text.defaultProps || {}; Text.defaultProps.allowFontScaling = false;
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
         <AppComponent/>
        </PersistGate>
      </Provider>
  )
}

export default Root;