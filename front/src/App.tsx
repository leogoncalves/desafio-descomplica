import React from "react";
import { Route, Redirect, Switch } from "react-router";
import "./App.scss";
import { ListStudentsPage } from "./components/pages/ListStudents/ListStudentsPage";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={() => <ListStudentsPage />}></Route>
      <Redirect to="/" />
    </Switch>
  </main>
);

export default App;
