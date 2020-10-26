import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon  from '../common/Icon';
import { connect } from 'react-redux';
import navigationService from '../../service/core/navigation-service';

class Header extends React.Component {

  goBack = () => {
    return navigationService.goBack()
  }

  renderHeader = () => {
    const { backNav, title, rootPage } = this.props;
    return (
      <View style={{ flex:1,flexDirection: "row"}}>
        {backNav && rootPage != 'rootPage' &&
          <TouchableOpacity underlayColor={'transparent'} style={styles.backIcon} onPress={this.goBack} >
            <Icon name='md-arrow-back' family="Ionicons" size={8} color="blue" />
          </TouchableOpacity>
        }
       
          <View style={[styles.mainView,{flexDirection:"row",flex:1}]}>
            <Text style = {[styles.title, {fontSize: 12}]}>{title ? title : ''}</Text>
          </View>
      </View>
    )
  }
  

  render() {
    const { navigation } = this.props;
    const { routeName } = navigation.state;

    return (
      <View style={[styles.navbar]}>
          <View style={{flex:1,justifyContent:"center"}}>
          {this.renderHeader()}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "blue",
    textAlign: "left",
  },
  navbar: {
    backgroundColor: "blue",
    flexDirection:"row",
    height:8,
    borderBottomWidth: 2,
    borderBottomColor: "white"
  },
  
  backIcon: {
    width: 10,
    height:8,
    justifyContent: "center",
    alignItems:"center",
  
  },
  mainView: {
    alignSelf: "center",
  },
});

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.title;
  
  return { title };
};
export default withNavigation(connect(mapStateToProps)(Header));
