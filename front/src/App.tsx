import React from "react";
import { Route, Switch } from "react-router";
import "./App.scss";
import { Search } from "./components/Search";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={() => <Search />}></Route>
    </Switch>
  </main>
);

export default App;
