import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { NavigationBar, Title, Icon } from "@shoutem/ui";
import AppStatusBar from "./component/AppStatusBar";
import AppDrawerNavigator from "./component/AppDrawerNavigator";
import { DrawerNavigator } from "react-navigation";

export default class App extends Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const styles = StyleSheet.flatten({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  leftNavigation: {
    marginLeft: 8,
    marginRight: 8
  }
});
