import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SearchPage from "./components/pages/SearchPage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/search" exact component={SearchPage} />
  </div>
);

export default App;
