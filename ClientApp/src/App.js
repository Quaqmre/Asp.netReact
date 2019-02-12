import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <di>
        <Route exact path="/" component={Home} />
        <Route exact path="/fetxh" component={FetchData} />
      </di>
    );
  }
}
