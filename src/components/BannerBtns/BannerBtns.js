import React from 'react';
import { Link } from 'react-router-dom';

export default function BannerBtns(props) {
  
  let buttons = null;
  if(props.page == 'users') {
    buttons = (
        <Link 
            to='/search' exact
            className="btn btn-theme">
                Search
        </Link>
    );
  } else {
    buttons = (
      <>
        <Link 
            to='/rules' exact
            className="btn btn-theme">
                Rules
        </Link>
        <Link 
            to='/login' exact
            className="btn btn-theme">
                Login
        </Link>
      </>
    );
  }

  return (
    <div className="btn-bar">
       { buttons }
    </div>
  )
}
