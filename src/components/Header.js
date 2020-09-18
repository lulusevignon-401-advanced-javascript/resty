import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = props => {

  return (
  <header className="App-header">
    <h1>RESTy</h1>
    <nav>
      <ul>
        <li>
        <NavLink data-testid="homelink" activeClassName="here" to="/">Home</NavLink>
        </li>
        <li>
            <NavLink data-testid="classiclink" activeClassName="here" to="/history">History</NavLink>
          </li>
          <li>
            <NavLink data-testid="renderlink" activeClassName="here" to="/help">Help</NavLink>
          </li>
      </ul>
    </nav>
  </header>);
}

export default Header;