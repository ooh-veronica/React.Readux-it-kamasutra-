import React from "react";
import "./Nav.css";
import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <nav className= "nav">
          <div className="item">
            <Link to='/profile'>Profile</Link>
          </div>
          <div className="item">
            <Link to='/messages'>Messages</Link>
          </div>
          <div className="item">
            <Link to='/users'>Users</Link>
          </div>
          <div className="item">
            <Link to='music' activeClassName='activeL'>Music</Link>
          </div>
          <div className="item">
            <Link to='settings' activeClassName='activeL'>Settings</Link>
          </div>
      </nav>
    )
}

export default Nav