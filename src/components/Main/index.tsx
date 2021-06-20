import React, { FC, useState } from 'react';

import Header from '../Header';
import Products from '../Products';
import Modal from '../Modal';
import ModalBuy from '../ModalBuy';
import About from '../About';

import styles from './style.module.scss';

const Main: FC = () => {
    let [openPayModal, setOpenPayModal] = useState<boolean>(false);
    return (
        <>
            <Header />

            <section className={styles['main']} id={'main'}>
                <div className={'container'}>
                    <div className={styles['main__inner']}>
                        <div className={styles['main__description']}>
                            <h1 className={styles['main__title']}>
                                СКИДКА НА ВЫБРАННЫЕ ТОВАРЫ ДО <span>50%!</span> Успей заказать,
                                осталось всего:
                            </h1>
                            <p className={styles['main__subtitle']}>
                                Бесплатная доставка при заказе от 2-х комплектов!
                            </p>
                            <div className={styles['main__decor']}>
                                <ul className={styles['main__list']}>
                                    <li className={styles['main__list-item']}>
                                        <img
                                            className={styles['main__list-img']}
                                            src={
                                                process.env.PUBLIC_URL + '/assets/images/cotton.png'
                                            }
                                            alt="decor"
                                        />
                                        <p className={styles['main__list-text']}>
                                            100%-й хлопок высокой плотности
                                        </p>
                                    </li>
                                    <li className={styles['main__list-item']}>
                                        <img
                                            className={styles['main__list-img']}
                                            src={
                                                process.env.PUBLIC_URL + '/assets/images/change.png'
                                            }
                                            alt="decor"
                                        />
                                        <p className={styles['main__list-text']}>
                                            Возврат или обмен в течение 14 дней
                                        </p>
                                    </li>
                                    <li className={styles['main__list-item']}>
                                        <img
                                            className={styles['main__list-img']}
                                            src={process.env.PUBLIC_URL + '/assets/images/gift.png'}
                                            alt="decor"
                                        />
                                        <p className={styles['main__list-text']}>
                                            К каждому комплекту в заказе подарок
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className={styles['main__btn']}
                                onClick={() => setOpenPayModal(true)}>
                                Заказать и получить скидку
                            </button>
                        </div>
                        <div>
                            <img
                                className={styles['main__pic']}
                                src={process.env.PUBLIC_URL + '/assets/images/2.31.jpg'}
                                alt="Диван"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Products />

            <About />

            {openPayModal && (
                <Modal callBack={() => setOpenPayModal(false)} small>
                    <ModalBuy />
                </Modal>
            )}
        </>
    );
};

export default Main;
