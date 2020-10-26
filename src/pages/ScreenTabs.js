import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Create from "../pages/Create"
import Header from "../components/common/Header";
import Icon from "../components/common/Icon";

const HomeStack = createStackNavigator({
    Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: () => <Header title="  Home" navigation={navigation} />,
    }),
  },
 
});

const ProfileStack = createStackNavigator({
    Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      header: () => <Header title="  Profile" navigation={navigation} />,
    }),
  },
 
});

const CreateStack = createStackNavigator({
    Create: {
    screen: Create,
    navigationOptions: ({ navigation }) => ({
      header: () => <Header title="  Create" navigation={navigation} />,
    }),
  },
 
});

export default ( TabNavigator = createBottomTabNavigator(
  {
    HomeStackDashboard: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: <Text style={{fontSize:12, color: "black"}}>Home</Text>,
        tabBarIcon: ({ focused }) => (
          <Icon name="pie-chart" family="FontAwesome" color={focused ? "blue" : "grey"} size={19} />
        )
      }
    },
    ProfileStackDashboard: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: <Text style={{fontSize:12, color: "black"}}>Profile</Text>,
        tabBarIcon: ({ focused }) => (
          <Icon name="user" family="FontAwesome" color={focused ? "blue" : "grey"} size={19} />
        )
      }
    },
    CreateStackDashboard: {
      screen: CreateStack,
      navigationOptions: {
        tabBarLabel: <Text style={{fontSize:12, color: "black"}}>Create</Text>,
        tabBarIcon: ({ focused }) => (
          <Icon name="search" family="FontAwesome" color={focused ? "blue" : "grey"} size={19} />
        )
      }
    },
  },
  {
    initialRouteName: "HomeStackDashboard",
    activeColor: "green",
    inactiveColor: "black",
    tabBarOptions: {
      scrollEnabled: true,
      showLabel: false,
      showIcon: true,
      allowFontScaling: false,
      safeAreaInset: { left: "always" },
      adaptive: true,
      keyboardHidesTabBar: true,
      activeTintColor: "green",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "yellow",
        elevation: 5,
        height: 50,
        width: "100%",
        padding: 0,
        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: {
          height: -7,
          width: 0,
        },
      },
    },
  }
));
