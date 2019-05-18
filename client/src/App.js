import React from 'react';
import Calculator from "./components/Calculator";
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
   
          <Route exact path="/calculator" component={Calculator} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
