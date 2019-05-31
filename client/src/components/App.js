import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Calculator from './Calculator';
import Saved from './Saved';


class App extends Component {
    componentDidMount() {
this.props.fetchUser();
    }
 render() {
    return (
        <div className='container'>
      <BrowserRouter>
      <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route  path="/saved" component={Saved} />
      </div>
      </BrowserRouter>
        </div>
    );
  } 
 }

export default connect(null, actions) (App);