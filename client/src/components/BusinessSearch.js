import React from 'react';
import './BusinessSearch.css';

import BusinessList from './BusinessList/BusinessList';
import SearchBar from './SearchBar/SearchBar';
import Yelp from '../apis/yelp'

  // Make sure to have six in total

  class BusinessSearch extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        businesses: []
      };
  
      this.searchYelp = this.searchYelp.bind(this);
    }
  
    searchYelp(term, location, sortBy) {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({businesses: businesses});
      });
    }
  
    render() {
      return (
        <div className="App">
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList businesses={this.state.businesses} />
        </div>
      );
    }
  }
  
  export default BusinessSearch;