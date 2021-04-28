import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Restaurants from "./Restaurants/Restaurants";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Restaurants} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

/* <Route exact path="/restaurant" component={} /> */
// component - Restaurants - individual
