import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class Header extends Component{
renderContent(){
    switch (this.props.auth){
        case null:
            return;

        case false:
            return <li><a className="waves-effect waves-light btn" href="/auth/google">Login with Google</a></li>;
        default:
            return [ 
                <li key="1"><a className="waves-effect waves-light btn" href="/calculator">Calculator</a></li>, 
                <li key="2"><a className="waves-effect waves-light btn" href="/saved">Recommendations</a></li>, 
                <li key="4"><a className="waves-effect waves-light btn" href="/search">Search</a></li>, 
                <li key="3"><a className="waves-effect waves-light btn" href="/api/logout">Logout</a></li> 
        ];
    }
}

    render(){
        return (
            <nav>
                <div className='nav-wrapper'>
                <Link to={this.props.auth ? '/' : '/'}
                 className='left brand-logo'>
                     <i className="huge material-icons">medium_settings_system_daydream</i>DreamHouse
               
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