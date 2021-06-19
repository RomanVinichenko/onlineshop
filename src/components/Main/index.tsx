import React, {FC} from 'react';

import logo from '../../assets/icons/logo.svg';
import card from '../../assets/images/2.26.jpg';

import styles from './style.module.scss';

const Main: FC = () => {
  return (
    <>
      <header className={styles['header']}>
        <div className={styles['container']}>
          <nav className={styles['menu']}>
            <a className={styles['logo']} href="#">
              <img className={styles['header__img']} src={logo} alt="Логотип"/>
            </a>
            <ul className={styles['menu__list']}>
              <li className={styles['menu__listItem']}>
                <a className={styles['menu__listLink']} href="#">
                  Товары
                </a>
              </li>
              <li className={styles['menu__listItem']}>
                <a className={styles['menu__listLink']} href="#">
                  О нас
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className={styles['main']}>
        <h1 className={styles['main__title']}>
          СКИДКА НА ВЫБРАННЫЕ ТОВАРЫ ДО 50%! Успей заказать, осталось всего:
        </h1>
        <div className={styles['articles']}>
          <article className={styles['card']}>
            <img className={styles['card__img']} src={card} alt="Логотип товара"/>
            <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
            <span className={styles['card__price']}>345 грн</span>
            <div className={styles['buttons']}>

              <button className={styles['card__btnMore']}>Подробнее</button>
              <button className={styles['card__btnBuy']}>Купить</button>
            </div>

          </article>
          <article className={styles['card']}>
            <img className={styles['card__img']} src={card} alt="Логотип товара"/>
            <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
            <span className={styles['card__price']}>345 грн</span>
            <div className={styles['buttons']}>
              <button className={styles['card__btnMore']}>Подробнее</button>
              <button className={styles['card__btnBuy']}>Купить</button>
            </div>
          </article>
        </div>
      </section>

      <section className={styles['products']}>
        <div className={styles['container']}>
          <h2 className={styles['products__title']}>
            Товары
          </h2>
          <div className={styles['products__inner']}>
            <article className={styles['card']}>
              <img className={styles['card__img']} src={card} alt="Логотип товара"/>
              <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
              <span className={styles['card__price']}>345 грн</span>
              <div className={styles['buttons']}>
                <button className={styles['card__btnMore']}>Подробнее</button>
                <button className={styles['card__btnBuy']}>Купить</button>
              </div>
            </article>
            <article className={styles['card']}>
              <img className={styles['card__img']} src={card} alt="Логотип товара"/>
              <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
              <span className={styles['card__price']}>345 грн</span>
              <div className={styles['buttons']}>
                <button className={styles['card__btnMore']}>Подробнее</button>
                <button className={styles['card__btnBuy']}>Купить</button>
              </div>
            </article>
            <article className={styles['card']}>
              <img className={styles['card__img']} src={card} alt="Логотип товара"/>
              <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
              <span className={styles['card__price']}>345 грн</span>
              <div className={styles['buttons']}>
                <button className={styles['card__btnMore']}>Подробнее</button>
                <button className={styles['card__btnBuy']}>Купить</button>
              </div>
            </article>
            <article className={styles['card']}>
              <img className={styles['card__img']} src={card} alt="Логотип товара"/>
              <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
              <span className={styles['card__price']}>345 грн</span>
              <div className={styles['buttons']}>
                <button className={styles['card__btnMore']}>Подробнее</button>
                <button className={styles['card__btnBuy']}>Купить</button>
              </div>
            </article>
            <article className={styles['card']}>
              <img className={styles['card__img']} src={card} alt="Логотип товара"/>
              <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
              <span className={styles['card__price']}>345 грн</span>
              <div className={styles['buttons']}>
                <button className={styles['card__btnMore']}>Подробнее</button>
                <button className={styles['card__btnBuy']}>Купить</button>
              </div>
            </article>
            <article className={styles['card']}>
              <img className={styles['card__img']} src={card} alt="Логотип товара"/>
              <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
              <span className={styles['card__price']}>345 грн</span>
              <div className={styles['buttons']}>
                <button className={styles['card__btnMore']}>Подробнее</button>
                <button className={styles['card__btnBuy']}>Купить</button>
              </div>
            </article>
            <article className={styles['card']}>
              <img className={styles['card__img']} src={card} alt="Логотип товара"/>
              <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
              <span className={styles['card__price']}>345 грн</span>
              <div className={styles['buttons']}>
                <button className={styles['card__btnMore']}>Подробнее</button>
                <button className={styles['card__btnBuy']}>Купить</button>
              </div>
            </article>
            <article className={styles['card']}>
              <img className={styles['card__img']} src={card} alt="Логотип товара"/>
              <h2 className={styles['card__title']}>Комплект постельного белья 2020</h2>
              <span className={styles['card__price']}>345 грн</span>
              <div className={styles['buttons']}>
                <button className={styles['card__btnMore']}>Подробнее</button>
                <button className={styles['card__btnBuy']}>Купить</button>
              </div>
            </article>
          </div>
        </div>
      </section>
</>
  );
};

export default Main;
