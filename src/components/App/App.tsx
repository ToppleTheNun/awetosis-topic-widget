import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import ThemedApp from "../ThemedApp";
import TopicsBuilder from "../TopicsBuilder";

const App: React.FC = () => (
  <ThemedApp>
    <Router>
      <Switch>
        <Route exact path="/">
          <TopicsBuilder />
        </Route>
        <Route>
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </Router>
  </ThemedApp>
);

export default App;
