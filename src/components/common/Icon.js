
import React from 'react';

import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5Pro from 'react-native-vector-icons/dist/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Foundation from 'react-native-vector-icons/dist/Foundation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

class IconExtra extends React.Component {
  
  render() {
    const { name, family } = this.props;
    if(family==='FontAwesome5'){
      return <FontAwesome5 name={name} {...this.props} />;
    } else if(family==='AntDesign'){
      return <AntDesign name={name} {...this.props} />;
    } else if(family==='Entypo'){
      return <Entypo name={name} {...this.props} />;
    } else if(family==='EvilIcons'){
      return <EvilIcons name={name} {...this.props} />;
    } else if(family==='Feather'){
      return <Feather name={name} {...this.props} />;
    }else if(family==='FontAwesome'){
      return <FontAwesome name={name} {...this.props} />;
    } else if(family==='FontAwesome5Pro'){
      return <FontAwesome5Pro name={name} {...this.props} />;
    } else if(family==='Fontisto'){
      return <Fontisto name={name} {...this.props} />;
    } else if(family==='Foundation'){
      return <Foundation name={name} {...this.props} />;
    } else if(family==='Ionicons'){
      return <Ionicons name={name} {...this.props} />;
    } else if(family==='MaterialCommunityIcons'){
      return <MaterialCommunityIcons name={name} {...this.props} />;
    }else if(family==='MaterialIcons'){
      return <MaterialIcons name={name} {...this.props} />;
    } else if(family==='Octicons'){
      return <Octicons name={name} {...this.props} />;
    } else if(family==='SimpleLineIcons'){
      return <SimpleLineIcons name={name} {...this.props} />;
    } else{
      return null
    }
  }
}

export default IconExtra;
