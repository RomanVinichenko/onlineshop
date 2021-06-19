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
                    <h1 className={styles['header__title']}>Premium Textile</h1>
                    <ul className={styles['menu__list']}>
                        <li className={styles['menu__list-item']}>
                            <button className={styles['menu__btn']}>
                                Товары
                            </button>
                        </li>
                        <li className={styles['menu__list-item']}>
                            <button className={styles['menu__btn']}>
                                О нас
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
