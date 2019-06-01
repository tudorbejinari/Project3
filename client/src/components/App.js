import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Calculator from './Calculator';
import ListGroup from './ListGroup/ListGroup';
import BusinessSearch from './BusinessSearch';


class App extends Component {
    componentDidMount() {
this.props.fetchUser();
    }
 render() {
    return (
        <div>
      <BrowserRouter>
      <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/calculator" component={Calculator} />
          <Route  path="/saved" component={ListGroup} />
          <Route exact path="/search" component={BusinessSearch} />
      </div>
      </BrowserRouter>
        </div>
    );
  } 
 }

export default connect(null, actions) (App);