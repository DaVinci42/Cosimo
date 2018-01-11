import React, { Component } from "react";
import AppDrawerNavigator from "./component/AppDrawerNavigator";

import NoteBooksComponent from "./component/NoteBooksComponent";
import AppStackNavigaor from "./component/AppStackNavigator";

export default class App extends Component {
	render() {
		return <AppStackNavigaor />;
	}
}
