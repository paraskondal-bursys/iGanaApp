import React, { Component } from 'react'
import {SafeAreaView,StyleSheet,StatusBar} from 'react-native';
import { connect } from 'react-redux'
import Screens from './navigation/Screens';
import { StyleProvider, Root } from 'native-base';
import navigationService from './service/core/navigation-service';

export default class AppComponent extends Component{
    
      render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <Root>
                    <StatusBar backgroundColor="blue" barStyle="dark-content" />
                    <Screens ref={nav => {navigationService.setNavigator(nav)}}/>
                </Root>
            </SafeAreaView>
        )
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
  });
