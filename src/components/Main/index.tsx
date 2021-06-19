import React, { FC } from 'react';

import Header from '../Header';
import Products from '../Products';

import styles from './style.module.scss';

const Main: FC = () => {
    return (
        <>
            <Header />
            <section className={styles['main']}>
                <h1 className={styles['main__title']}>
                    СКИДКА НА ВЫБРАННЫЕ ТОВАРЫ ДО 50%! Успей заказать, осталось всего:
                </h1>
                <div className={'articles'}>
                    <article className={'card'}>
                        <img
                            className={'card__img'}
                            src={process.env.PUBLIC_URL + '/assets/images/1.1.jpg'}
                            alt="Логотип товара"
                        />
                        <h2 className={'card__title'}>Комплект постельного белья 2020</h2>
                        <span className={'card__price'}>345 грн</span>
                        <div className={'buttons'}>
                            <button className={'card__btn-more'}>Подробнее</button>
                            <button className={'card__btn-buy'}>Купить</button>
                        </div>
                    </article>
                    <article className={'card'}>
                        <img
                            className={'card__img'}
                            src={process.env.PUBLIC_URL + '/assets/images/1.1.jpg'}
                            alt="Логотип товара"
                        />
                        <h2 className={'card__title'}>Комплект постельного белья 2020</h2>
                        <span className={'card__price'}>345 грн</span>
                        <div className={'buttons'}>
                            <button className={'card__btn-more'}>Подробнее</button>
                            <button className={'card__btn-buy'}>Купить</button>
                        </div>
                    </article>
                </div>
            </section>

            <Products />
        </>
    );
};

export default Main;
