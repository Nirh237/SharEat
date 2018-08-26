import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content" >
        <div className="header__title" >
        ShareEat
        </div>
         <div className="header-icon"> 
         <img src="icons/logout-icon.png"
          srcSet="icons/logout-icon@2x.png 2x,
           icons/logout-icon@3x.png 3x"
            className="logout_icon"
            onClick={startLogout}
            />
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);


      // <button className="button button--link" onClick={startLogout}>Logout</button>

      //className="header__content"