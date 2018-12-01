import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// components
import Landing from "../Landing/Landing";
import Properties from "../Properties/Properties";
import CreateProperty from "../Properties/CreateProperty/CreateProperty";
import NotFound from "../NotFound/NotFound";
import Property from "../Properties/Property/Property";

export default () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/properties/create">Create</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/properties" component={Properties} />
          <Route exact path="/properties/create" component={CreateProperty} />
          <Route exact path="/properties/:id" component={Property} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
