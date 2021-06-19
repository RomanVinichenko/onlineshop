import React, { FC } from 'react';

import mockData from '../../mockDataProduct';

import styles from './style.module.scss';

const Products: FC = () => {
    return (
        <section className={styles['products']}>
            <div className={'container'}>
                <h2 className={styles['products__title']}>Товары</h2>
                <div className={styles['products__inner']}>
                    {mockData.map((item) => {
                        return (
                            <article key={item.id} className={'card'}>
                                <img
                                    className={'card__img'}
                                    src={`${process.env.PUBLIC_URL}/assets/images/${item.img}`}
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
