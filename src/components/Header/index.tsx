import React, { FC } from 'react';

import logo from '../../images/logo.svg';

import styles from './style.module.scss';

const Header: FC = () => {
    return (
        <header className={styles['header']}>
            <div className={'container'}>
                <nav className={styles['menu']}>
                    <a className={styles['logo']} href="#">
                        <img className={styles['header__img']} src={logo} alt="Premium Textile" />
                    </a>
                    <ul className={styles['menu__list']}>
                        <li className={styles['menu__list-item']}>
                            <a className={styles['menu__list-link']} href="#">
                                Товары
                            </a>
                        </li>
                        <li className={styles['menu__list-item']}>
                            <a className={styles['menu__list-link']} href="#">
                                О нас
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
