import React, { FC, useState } from 'react';

import mockData from '../../mockDataProduct';

import styles from './style.module.scss';

const Products: FC = () => {
    const [modalContent, setModalContent] = useState<any>(null);

    const modalOpenHandler = (img: string, title: string, price: string, size: JSX.Element | string) => {
        setModalContent({ img, title, price, size });
    };
    console.log(modalContent);
    return (
        <>
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
                                        <button className={'card__btn-more'} onClick={() => modalOpenHandler(item.img, item.title, item.price, item.description.text)}>Подробнее</button>
                                        <button className={'card__btn-buy'}>Купить</button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
            {modalContent && (
                <div className={styles['modal']}>
                    <div className={styles['modal__content']}>
                        <div className={styles['modal__box']}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/${modalContent?.img}`} alt='' />
                            <p>{modalContent?.title}</p>
                            <p>{modalContent?.price}</p>
                            <p>{modalContent?.size}</p>
                            <button className={styles['modal__close']} onClick={() => setModalContent(null)}>X</button>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default Products;
