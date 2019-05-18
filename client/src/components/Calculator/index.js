import React from 'react';
import "./style.css";

function Calculator({ children }){
    return (
        <div className="card">
      <div className="content">
        <form>
            <label>
                Monthly/Income:
                <input type="text" name="Income" />
                Credit Score: 
                <input type="text" name="Credit" />
                Debt:
                <input type="text" name="Debt" />
            </label>
            <input type="submit" value="Submit" />
        </form>
     </div>
     </div>
     
    );
}
export default Calculator;

