import React, { FC, useState } from 'react';

import mockData from '../../mockDataProduct';

import styles from './style.module.scss';
import Modal from '../Modal';
import ModalBuy from '../ModalBuy';

type ModalContentType = {
    img: string;
    title: string;
    price: string;
    size: JSX.Element | string;
};

const Products: FC = () => {
    let [modalContent, setModalContent] = useState<ModalContentType | null>(null);
    let [productList, setProductList] = useState(mockData);
    let [filter, setFilter] = useState<'all' | 'towel' | 'linens'>('all');
    let [openPayModal, setOpenPayModal] = useState<boolean>(false);

    let copyProductList = productList;

    if (filter === 'towel') {
        copyProductList = productList.filter((item) => item.type === 'towel');
    }
    if (filter === 'linens') {
        copyProductList = productList.filter((item) => item.type === 'linens');
    }

    const modalOpenHandler = (
        img: string,
        title: string,
        price: string,
        size: JSX.Element | string,
    ) => {
        setModalContent({ img, title, price, size });
    };

    return (
        <>
            <section className={styles['products']}>
                <div className={'container'}>
                    <h2 className={styles['products__title']}>Товары</h2>

                    <ul className={styles['products__list']}>
                        <li className={styles['products__item']}>
                            <button
                                className={styles['products__button']}
                                onClick={() => setFilter('all')}>
                                Все товары
                            </button>
                        </li>
                        <li className={styles['products__item']}>
                            <button
                                className={styles['products__button']}
                                onClick={() => setFilter('towel')}>
                                Полотенца
                            </button>
                        </li>
                        <li className={styles['products__item']}>
                            <button
                                className={styles['products__button']}
                                onClick={() => setFilter('linens')}>
                                Постельное белье
                            </button>
                        </li>
                    </ul>
                    <div className={styles['products__inner']}>
                        {copyProductList.map((item) => {
                            return (
                                <article key={item.id} className={'card'}>
                                    <img
                                        className={'card__img'}
                                        src={`${process.env.PUBLIC_URL}/assets/images/${item.img}`}
                                        alt=""
                                    />
                                    <h2 className={'card__title'}>{item.title} Название</h2>
                                    <div className={'card__prices'}>
                                        <span className={'card__price'}>{item.price}</span>
                                        <span className={'card__oldprice'}>{item.price}</span>
                                    </div>
                                    <div className={'buttons'}>
                                        <button
                                            className={'card__btn-more'}
                                            onClick={() =>
                                                modalOpenHandler(
                                                    item.img,
                                                    item.title,
                                                    item.price,
                                                    item.description.text,
                                                )
                                            }>
                                            Подробнее
                                        </button>
                                        <button
                                            className={'card__btn-buy'}
                                            onClick={() => setOpenPayModal(true)}>
                                            Купить
                                        </button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
            {modalContent && (
                <Modal callBack={() => setModalContent(null)}>
                    <div className={styles['modal-product__img']}>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/${modalContent?.img}`}
                            alt=""
                        />
                    </div>
                    <div className={styles['modal-product__info']}>
                        <p className={styles['modal-product__title']}>{modalContent?.title}</p>
                        <p className={styles['modal-product__price']}>
                            {modalContent?.price}
                            <span className={styles['modal-product__price-main']}>
                                Старая цена: <span>95 грн</span>
                            </span>
                            <span className={styles['modal-product__price-sale']}>
                                Цена со скидкой: 100 грн
                            </span>
                        </p>
                        <button className={styles['modal-product__btn']}>Заказать</button>
                    </div>
                </Modal>
            )}
            {openPayModal && (
                <Modal callBack={() => setOpenPayModal(false)}>
                    <ModalBuy />
                </Modal>
            )}
        </>
    );
};

export default Products;
