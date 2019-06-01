import React, {Component} from 'react';
import './App.css';
import MortgageCalculator from "mortgage-calculator-react";

class Calculator extends Component {
  onTermSubmit = term => {
   
    }

    render() {
        return (
          
                  <div className="container">
                    <div> 
                      <h3>Mortgage Calculator</h3>
                    </div>
                          <MortgageCalculator />
                    </div>
          
        );
    }
}

export default Calculator;