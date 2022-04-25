import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Events from "./pages/events";
import Community from "./pages/community";
import Team from "./pages/team";
import Footer from "./component/Footer";
import PageNotFound from "./pages/pagenotfound"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/community" component={Community} />
        <Route path="/team" component={Team} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
