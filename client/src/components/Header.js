import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Calculator from './Calculator';

class Header extends Component{
renderContent(){
    switch (this.props.auth){
        case null:
            return;

        case false:
            return <li><a href="/auth/google">Login with Google</a></li>;
        default:
            return [ 
            <li key="1"><Calculator /></li>,
            <li key="2"><a href="/api/logout">Logout</a></li> 
        ];
    }
}

    render(){
        return (
            <nav>
                <div className='nav-wrapper'>
                <Link to={this.props.auth ? '/surveys' : '/'}
                 className='left brand-logo'>
                     <i className="large material-icons">home</i>DreamHouse
               
                </Link>
                <ul className="right">
                   {this.renderContent()}
                </ul>
              
            </div>
            </nav>
        );
    }
}
function mapStateToProps({auth}) {
return { auth };
}
export default connect(mapStateToProps)(Header);