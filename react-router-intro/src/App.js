import './App.css';
import React from "react";

import VendingMachine from "./VendingMachine";
import Cookies from "./Cookies";
import Chips from "./Chips";
import Candy from './Candy';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/cookies">
          <Cookies />
        </Route>
        <Route path="/chips">
          <Chips />
        </Route>
        <Route path="/candy">
          <Candy />
        </Route>
        <Route exact path="/vendingmachine">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
