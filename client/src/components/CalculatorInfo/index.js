import React from 'react';

function CalculatorInfo({ children }){
    return (
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
    );
}
export default CalculatorInfo;

