import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutRequest } from 'thunks/auth';

const Header = (props: any) => {
  let user = localStorage.getItem('user_email');
  const logout = useDispatch();
  const onLogout = () => {
    const { history } = props;
    logout(logoutRequest(history));
  }
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <span className="navbar-brand col-sm-3 col-md-2 mr-0">
        { user ? user : '@' }
      </span>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <span onClick={onLogout} className="nav-link">Sign out</span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
