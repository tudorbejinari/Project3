import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {term: '% ',location:'* ', sortBy:'best_match'};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
    });
  }

  getSortByClass(sortByOptions){
      if (this.state.sortBy === sortByOptions){
        return 'active';
      } else{
        return '';
      }
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy:sortByOption});
  }
  handleTermChange(event){
    this.setState({ term:event.target.value })
  };
  handleLocationChange(event){
    this.setState({ location:event.target.value })
  
  };

  handleSearch(event){
      this.props.searchYelp(this.state.term, this.state.location,this.state.sortBy);
      event.preventDefault();
    };

 

  render() {
    return (
      <div className="SearchBar">
          <h4>Search for any Services</h4>
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleLocationChange} placeholder="Location" />
          <input onChange={this.handleTermChange} placeholder="Search Services ex: Mortgage Lenders, Real Estate Agents" />
        </div>
        <div className="SearchBar-submit">
          <a href="www.#.com" onClick={this.handleSearch}>Search</a>
        </div>
      </div>
    );
  }
}
export default SearchBar;