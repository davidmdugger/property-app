import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Landing from "../Landing/Landing";
import NotFound from "../NotFound/NotFound";

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/" component={NotFound} />
      </div>
    </Router>
  );
};
