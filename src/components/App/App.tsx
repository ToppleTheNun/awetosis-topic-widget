import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import ThemedApp from "../ThemedApp";
import TopicsBuilder from "../TopicsBuilder";
import TopicsDisplay from "../TopicsDisplay";

const App: React.FC = () => (
  <ThemedApp>
    <Router>
      <Switch>
        <Route exact path={`/`}>
          <TopicsBuilder />
        </Route>
        <Route path={`/display`}>
          <TopicsDisplay />
        </Route>
        <Route path="*">
          <Redirect to={`/`} />
        </Route>
      </Switch>
    </Router>
  </ThemedApp>
);

export default App;
