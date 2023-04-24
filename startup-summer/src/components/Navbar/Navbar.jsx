import React from 'react';
import { NavLink } from 'react-router-dom';

import { HOME_LINK } from '../../../constants/constants';
import { FAVORITES_LINK } from '../../constants/constants';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          {HOME_LINK}
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? styles.active : undefined)}>
          {FAVORITES_LINK}
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
