import React from 'react';

import {history} from '../routers/AppRouter';


export const NavigationHeader = (props)=> {

     const handleOnClick = () => {
        history.goBack();
     };
        
    

    return (
    <header className="nav-header">
        <div className="content-container">
          <div className="nav-header__content" >
            <div className="nav-header__title" >
            {props.title}
            </div>
             <div className="nav-header-icon"> 
             <img 
             src="icons/chevron-left.svg"
             className="Chevron-Left"
             onClick={handleOnClick}
              />
            </div>
          </div>
        </div>
      </header>
    );
}