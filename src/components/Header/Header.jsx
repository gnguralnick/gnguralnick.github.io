import React from 'react';

import Styles from './Header.module.scss';

import RelativeLink from '../RelativeLink/RelativeLink';

const Header = () => {

  return (
    <header className={Styles['header']}>
      <div className={Styles['header__title']}>
        <h1>Gabriel Guralnick</h1>
      </div>
      <nav className={Styles['header__nav']}>
        <ul className={Styles['header__nav-list']}>
          <li className={Styles['header__nav-item']}>
            <RelativeLink targetID='home'>Home</RelativeLink>
          </li>
          <li className={Styles['header__nav-item']}>
            <RelativeLink targetID='about'>About</RelativeLink>
          </li>
          <li className={Styles['header__nav-item']}>
            <RelativeLink targetID='projects'>Projects</RelativeLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;