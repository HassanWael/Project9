import React,{Component} from 'react'
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className="Nav">
                <div className="logo">
                    <img src="logo.png" alt="logo"/>
                </div>
                <div className="login">
                    <div className="loginBtn">Log in</div>
                    <div className="registerBtn">Sign up</div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;