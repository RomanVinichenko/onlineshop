import React, { FC } from 'react';

import logo from '../../assets/icons/logo.svg';

import styles from './style.module.scss';

const Main: FC = () => {
    // TODO: del header--active
    return (
        <>
            <header className={`${styles['header']} ${styles['header--active']}`}>
                <div className={styles['container']}>
                    <nav className={styles['menu']}>
                        <a className={styles.logo} href="#">
                            <img className={styles.header__img} src={logo} alt="Логотип" />
                        </a>
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__listItem}>
                                <a className={styles.menu__listLink} href="#">
                                    Товары
                                </a>
                            </li>
                            <li className={styles.menu__listItem}>
                                <a className={styles.menu__listLink} href="#">
                                    О нас
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className={styles.main}>
                <h1 className={styles.main__title}>
                    СКИДКА НА ВЫБРАННЫЕ ТОВАРЫ ДО 50%! Успей заказать, осталось всего:
                </h1>
            </section>
        </>
    );
};

export default Main;
