import React from 'react';
import CalculatorInfo from "./components/CalculatorInfo";
import Nav from "./components/Nav/Index";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
   
          <Route exact path="/calculator" component={CalculatorInfo} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
