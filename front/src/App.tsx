import React from "react";
import { Route, Switch } from "react-router";
import "./App.scss";
import { ListStudentsPage } from "./components/pages/ListStudents/ListStudentsPage";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={() => <ListStudentsPage />}></Route>
    </Switch>
  </main>
);

export default App;
