import React, { FC } from 'react';

import mockData from '../../mockDataProduct';

import styles from './style.module.scss';

const Products: FC = () => {
    return (
        <section className={styles['products']}>
            <div className={styles['container']}>
                <h2 className={styles['products__title']}>Товары</h2>
                <div className={styles['products__inner']}>
                    {mockData.map((item) => {
                        return (
                            <article className={'card'}>
                                <img
                                    className={'card__img'}
                                    src={`./images/${item.img}`}
                                    alt="Логотип товара"
                                />
                                <h2 className={'card__title'}>{item.title} Название</h2>
                                <span className={'card__price'}>{item.price}</span>
                                <div className={'buttons'}>
                                    <button className={'card__btn-more'}>Подробнее</button>
                                    <button className={'card__btn-buy'}>Купить</button>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Products;
