import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Events from "./pages/events";
import Community from "./pages/community";
import Team from "./pages/team";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/community" component={Community} />
        <Route path="/team" component={Team} />
      </Switch>
    </Router>
  );
}
export default App;
