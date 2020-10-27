
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
  FlatList
} from "react-native";
import { Container, CheckBox, Button, Card, CardItem } from "native-base";
import  Icon  from "../components/common/Icon";

const width = 100;

export default class Create extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notifications: [{
        id: 'FT4564',
        message: 'FT4564 Sold',
        type: "Fruit",
        createdDate: new Date().getDate().toString()
      },
      {
        id: 'FT45643',
        message: 'FT45643 out for delivery',
        type: "Grocery",
        createdDate: new Date().getDate().toString()
      },
      {
        id: 'FT45364',
        message: 'FT45364 reached at Hydrabad',
        type: "Juices",
        createdDate: new Date().getDate().toString()
      }]
    };
  }

  renderNotifications(item, index) {
    return (
      <Card key={index} style={styles.card} >
        <CardItem cardBody style={{ borderRadius: 10 }} >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 0.9 }}>
              <Text style={[styles.txtValue, {fontSize:14}]}>{item.message || ""}</Text>
              <Text style={[styles.txtDateLabel, {fontSize:14}]}>{item.createdDate || "N/A"}</Text>
            </View>
            <View style={{ flex: 0.1, justifyContent: "center" }}>
              <Icon
                style={{ color: "black", fontSize: 30 }}
                name="delete-circle-outline" family="MaterialCommunityIcons" />
            </View>
          </View>
        </CardItem>
      </Card>
    )
  }

  render() {
    const { notifications } = this.state
    
    return (
      <Container style={styles.container}>
        <FlatList
          style={{ flexGrow: null }}
          data={notifications}
          renderItem={({ item, index }) => {
            return this.renderNotifications(item, index)
          }}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
    padding: 5
  },
  txtDateLabel: {
    color: "grey",
    alignSelf: "flex-end",
    paddingTop: 1
  },
  txtValue: {
    color: "black"
  },
  

});
