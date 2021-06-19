import React, {FC} from 'react';

import Header from '../Header';
import Products from '../Products';

import styles from './style.module.scss';

const Main: FC = () => {
  return (
    <>
      <Header/>
      <section className={styles['main']}>
        <div className={'container'}>
          <div className={styles['main__inner']}>
          <div className={styles['main__description']}>
            <h1 className={styles['main__title']}>
              СКИДКА НА ВЫБРАННЫЕ ТОВАРЫ ДО 50%! Успей заказать, осталось всего:
            </h1>
            <p className={styles['main__subtitle']}>
              Бесплатная доставка при заказе от 2-х комплектов!
            </p>
            <div className={styles['main__decor']}>
              <ul className={styles['main__list']}>
                <li className={styles['main__list-item']}>
                  <img className={styles['main__list-img']} src="" alt="decor"/>
                  <p className={styles['main__list-text']}>100%-й хлопок высокой плотности</p>
                </li>
                <li className={styles['main__list-item']}>
                  <img className={styles['main__list-img']} src="" alt="decor"/>
                  <p className={styles['main__list-text']}>Возврат или обмен
                    в течение 14 дней</p>
                </li>
                <li className={styles['main__list-item']}>
                  <img className={styles['main__list-img']} src="" alt="decor"/>
                  <p className={styles['main__list-text']}>К каждому комплекту в заказе подарок</p>
                </li>
              </ul>
            </div>
            <button className={styles['main__btn']}>Заказать и получить скидку</button>
          </div>
          <img className={styles['main__pic']} src="" alt="top image"/>
        </div>
        {/*<div className={'articles'}>*/}
        {/*    <article className={'card'}>*/}
        {/*        <img*/}
        {/*            className={'card__img'}*/}
        {/*            src={process.env.PUBLIC_URL + '/assets/images/1.1.jpg'}*/}
        {/*            alt="Логотип товара"*/}
        {/*        />*/}
        {/*        <h2 className={'card__title'}>Комплект постельного белья 2020</h2>*/}
        {/*        <span className={'card__price'}>345 грн</span>*/}
        {/*        <div className={'buttons'}>*/}
        {/*            <button className={'card__btn-more'}>Подробнее</button>*/}
        {/*            <button className={'card__btn-buy'}>Купить</button>*/}
        {/*        </div>*/}
        {/*    </article>*/}
        {/*    <article className={'card'}>*/}
        {/*        <img*/}
        {/*            className={'card__img'}*/}
        {/*            src={process.env.PUBLIC_URL + '/assets/images/1.1.jpg'}*/}
        {/*            alt="Логотип товара"*/}
        {/*        />*/}
        {/*        <h2 className={'card__title'}>Комплект постельного белья 2020</h2>*/}
        {/*        <span className={'card__price'}>345 грн</span>*/}
        {/*        <div className={'buttons'}>*/}
        {/*            <button className={'card__btn-more'}>Подробнее</button>*/}
        {/*            <button className={'card__btn-buy'}>Купить</button>*/}
        {/*        </div>*/}
        {/*    </article>*/}
        {/*</div>*/}
        </div>
      </section>

      <Products/>
    </>
  );
};

export default Main;
