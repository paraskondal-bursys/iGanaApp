
import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerItem from "../components/common/DrawerItem";
import { ScreenTabs } from "../pages";

let appStackList={};

appStackList['Home']={
  screen: ScreenTabs,
  navigationOptions: navOpt => ({
    drawerLabel: ({ focused }) => (
      <DrawerItem focused={focused} title="Home" />
    )
  })
};

appStackList['Profile']={
  screen: ScreenTabs,
  navigationOptions: navOpt => ({
    drawerLabel: ({ focused }) => (
      <DrawerItem focused={focused} title="Profile" />
    )
  })
};

appStackList['Create']={
  screen: ScreenTabs,
  navigationOptions: navOpt => ({
    drawerLabel: ({ focused }) => (
      <DrawerItem focused={focused} title="Create" />
    )
  })
};

const AppStack = createDrawerNavigator(
  appStackList,
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
