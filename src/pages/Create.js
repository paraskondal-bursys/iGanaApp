
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  Image,
  Platform,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Linking,
} from "react-native";
import { Container, CheckBox, Button } from "native-base";

import { connect } from "react-redux";

const width = 100;

export default class Create extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Container flex center style={styles.login}>
          <View>
              <Text>Paras</Text>
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  login: {
    width: width, 
    backgroundColor: "blue",
    margin: 0,
    padding: 0,
  },
  
});
