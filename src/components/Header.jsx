import React from 'react';
import { NavLink } from 'react-router-dom';
import Toggle from './ui/Toggle';
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        {' '}
        <NavLink to="/planets">StarWars</NavLink>
      </div>
      <ul className="header__menu">
        <li>
          <NavLink to="/planets" activeClassName="active">
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" activeClassName="active">
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/starships" activeClassName="active">
            StarShip
          </NavLink>
        </li>
      </ul>

      <Toggle />
    </div>
  );
}

export default Header;
