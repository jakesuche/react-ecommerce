import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';

import "./header.styles.scss";

const Header = ({ currentUser }) => {
 // const { userAuth } = currentUser
  console.log(currentUser)
  return (
    <div className="header">
      <Link to="/" className="logo-containter">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
       
        {currentUser   ? <div onClick={()=> auth.signOut()}> SIGN OUT </div> :<Link to='/sigin'> SIGN IN </Link>}
        </div>
    </div>
  );
};
const mapStateToProps = state =>({
  currentUser:state.user.currentUser,
  ajambi:'uchhch'
})
export default connect(mapStateToProps)(Header);
