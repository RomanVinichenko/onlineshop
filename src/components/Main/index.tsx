import React, {FC} from 'react';

import styles from './style.module.scss';

const Main: FC = () => {
  return (

    <header className={styles['header']}>
      <div className={styles['container']}>
        <nav className={styles['menu']}>
          <a className={styles.logo} href="#">
            <img className={styles.header__img} src="../../assets/icons/logo.svg" alt="Логотип"/>
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
          <a className={styles.menu__contact} href="#">
            <img className={styles.header__img} src="images/logo.svg" alt="Телефон"/>
          </a>
        </nav>
      </div>

      <section className={styles.main}>
        <h1 className={styles.main__title}>
          СКИДКА НА ВЫБРАННЫЕ ТОВАРЫ ДО 50%! Успей заказать, осталось всего:
        </h1>
      </section>
    </header>
  );
};

export default Main;
