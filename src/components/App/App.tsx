import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import ThemedApp from "../ThemedApp";
import TopicsBuilder from "../TopicsBuilder";
import TopicsDisplay from "../TopicsDisplay";

const App: React.FC = () => (
  <ThemedApp>
    <Router>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/display`}>
          <TopicsDisplay />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <TopicsBuilder />
        </Route>
        <Route>
          <Redirect to={`${process.env.PUBLIC_URL}/`} />
        </Route>
      </Switch>
    </Router>
  </ThemedApp>
);

export default App;
