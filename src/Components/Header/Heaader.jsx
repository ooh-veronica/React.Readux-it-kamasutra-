import React from "react";
import  "./Header.css"
import { Link } from "react-router-dom";


const Header = (props) => {
    return (
        <header className="header">
            <img src="#" className="item" ></img>

            <div className="login_block">
                {props.isAuth ? 
                props.login 
                :<Link to={'/login'}>LOGIN</Link>
            }
            </div>
        </header>
    )
}


export default Header