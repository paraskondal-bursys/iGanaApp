import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "./Icon";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;
    const size = 19;
    const color = focused ? "blue" : "grey";
    switch (title) {
      case "Home":
        return (
          <Icon
            name="home"
            family="FontAwesome5"
            size={size}
            color={color}
          />
        );

      case "Profile":
        return (
          <Icon
            name="user"
            family="FontAwesome5"
            size={size}
            color={color}
          />
        );
      case "Create":
        return (
          <Icon
            name="search"
            family="FontAwesome5"
            size={size}
            color={color}
          />
        );

      default:
        return null;
    }
  };

  render() {
    const { focused, title } = this.props;

    return (
      <View style={styles.containerStyles}>
        <View style={styles.title} >
          {this.renderIcon()}
          <Text style={[{ marginLeft: 3, fontSize: 10 }, { color: focused ? "blue" : "grey" }]}>
            {title}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    flexDirection: "row",
    padding: 1.5
  },

  title: {
    flex: 1,
    flexDirection: "row"
  }
});

export default DrawerItem;
