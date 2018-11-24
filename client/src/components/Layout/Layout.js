import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Landing from "../Landing/Landing";
import Properties from "../Properties/Properties";
import NotFound from "../NotFound/NotFound";

export default () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/properties" component={Properties} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
