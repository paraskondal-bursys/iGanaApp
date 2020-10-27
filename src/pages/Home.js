
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

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 'FT4564',
          title: 'Apple_cider',
          type: "Fruit",
          quantity: 10
        },
        {
          id: 'FT45643',
          title: 'Vinegar',
          type: "Grocery",
          quantity: 100
        },
        {
          id: 'FT45364',
          title: 'Orange_juice',
          type: "Juices",
          quantity: 20
        },
      ]
    };
  }

  renderCart(item, index) {
    return (
      <Card key={index} style={[styles.cardStyle]}>
        <CardItem header style={styles.detailStyle}>
          <View style={styles.flexRow}>
            <Text numberOfLines={1} style={{fontSize:16,color:"black"}}>{item.title || ''}</Text>
            <Text style={[styles.textStylee,{ color: "black",fontSize:14 }]}>{item.id || ''}</Text>
          </View>
        </CardItem>
        <CardItem style={styles.cardDetails}>
          <View style={styles.txtView}>
            <View style={[styles.itemView, styles.borderBtm]}>
              <View style={{ flex: 0.55 }}>
                <Text style={{ color: "black",fontSize:14 }}>Item Type:
                    <Text style={{ color: "black",fontSize:14 }}>{item.type || ''}</Text>
                </Text>
              </View>
              <View style={{ flex: 0.45 }}>
                <Text style={{ color: "black",fontSize:14 }}>Available Qty:
                    <Text style={{ color: "black",fontSize:14 }}>{item.quantity || ''}</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.itemView, styles.borderBtm, { paddingTop: 1, }]}>
              <Button center style={[styles.footerButtonStyle, styles.greenBorder]}>
                <Icon style={[styles.cartIcon, styles.greenTxt]} name="check" family="AntDesign" size={10} />
                <Text style={[styles.cartText, styles.greenTxt, {fontSize:16}]}>Added to Cart</Text>
              </Button>
            </View>
          </View>
        </CardItem>
      </Card>
    )
  }

  render() {
    const { data } = this.state
    return (
      <Container style={styles.container}>
        <View style={styles.cardView}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return this.renderCart(item, index)
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardItemStyle: {
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    marginTop: 0
  },
  cardStyle: {
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    padding:10
  },
  detailStyle: {
    paddingTop: 4,
    height: 10,
    paddingBottom: 4,
    backgroundColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginHorizontal: 1.5
  },
  textStylee: {
    textAlign: "right",
    opacity: 0.7
  },
  cardDetails: {
    flexDirection: "row",
    paddingLeft: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  txtView: {
    flex: 8.2
  },
  itemView: {
      flex: 1,
      flexDirection: "row",
      paddingHorizontal: 2,
      paddingTop: 0.9
  },
  borderBtm: {
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      paddingBottom: 1,
      marginRight: 1
  },
  footerButtonStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    flex: 1,
    justifyContent: "center", alignItems: 'center',
    backgroundColor: "transparent"
  },
  greenBorder: {
      borderColor: 'green'
  },
  greenTxt: {
      color: 'green'
  },
  cartIcon: {
    color: "blue"
  },
  cartText: {
      color: "blue",
      paddingLeft: 1
  },

  cardView: {
    flexDirection: "row",
    paddingLeft: 2,
    paddingRight: 2,
    marginTop: 2,
}

});
