import React from 'react';
import { NavLink } from 'react-router-dom';
import currency from '../../../assets/icons/currency.svg';
import cartLogo from '../../../assets/icons/empty_cart.svg';
import middleLogo from '../../../assets/icons/VSF.svg';
import downArrow from '../../../assets/icons/down_arrow.svg';
import styles from './NavBar.module.css';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className={styles.navbar}>
        <nav className={styles.links}>
          <NavLink
            to="/women"
            activelassame={styles.active}
            className={styles.link}
          >
            WOMEN
          </NavLink>
          <NavLink to="/men" className={styles.link}>
            MEN
          </NavLink>
          <NavLink to="/kids" className={styles.link}>
            KIDS
          </NavLink>
        </nav>
        <img src={middleLogo} alt="middle logo" />
        <div className={styles.markings}>
          <img src={currency} alt="currency icon" />
          <img src={downArrow} alt="arrow icon" />
          <img src={cartLogo} alt="empty cart" />
        </div>
      </header>
    );
  }
}

export default NavBar;
