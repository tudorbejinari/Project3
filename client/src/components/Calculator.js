import React, {Component} from 'react';
import SearchBar from './SearchBar';
import yelp from '../apis/yelp';
import axios from 'axios';

class Calculator extends Component {
  onTermSubmit = term => {
    yelp.get('/search', {
      params: {
        location: term
      }
    });
  };





    render() {
        return (
      

            <div className="row">
            <div className="col s12 m9">
              <div className="card large blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Here is our Calculator</span>
                  <h3> 1 + 1 = 2 </h3>
                </div>
              </div>
            </div>
            <div className="col s12">
      <div className="row">
        <div className="input-field col s9">
          <i className="small material-icons prefix">location_on</i>
          <input type="text" id="autocomplete-input" className="autocomplete"/>
          <label htmlFor="autocomplete-input">Enter zip code</label>
        </div>
        <div className="input-field col s9">
          <i className="material-icons prefix">monetization_on</i>
          <input type="text" id="autocomplete-input" className="autocomplete"/>
          <label htmlFor="autocomplete-input">1.000.000</label>
        </div>
        <div className="row">
        <div className="input-field col s9">
        <a href="/saved"className="waves-effect waves-light btn red">Search</a>
    </div>
    </div>
      </div>
      <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    </div>

          </div>
        

        );
    }
}

export default Calculator;