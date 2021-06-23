import React, { FC, useState } from 'react';

import Header from '../Header';
import Products from '../Products';
import Modal from '../Modal';
import ModalBuy from '../ModalBuy';
import About from '../About';
import Feedback from '../Feedback';
import Footer from '../Footer';

import LazyLoad from 'react-lazyload';
import { Link } from 'react-scroll';

import styles from './style.module.scss';

const Main: FC = () => {
    let [openPayModal, setOpenPayModal] = useState<boolean>(false);
    return (
        <>
            <LazyLoad>
                <Header />
            </LazyLoad>

            <section className={styles['main']} id={'main'}>
                <div className={'container'}>
                    <div className={styles['main__inner']}>
                        <div className={styles['main__description']}>
                            <h1 className={styles['main__title']}>
                                СКИДКА НА ВЫБРАННЫЕ ТОВАРЫ ДО <span>50%!</span> Успей заказать,
                                осталось всего:
                            </h1>
                            <p className={styles['main__subtitle']}>
                                Бесплатная доставка при заказе от 4-ех единиц товаров!
                            </p>
                            <div className={styles['main__decor']}>
                                <ul className={styles['main__list']}>
                                    <li className={styles['main__list-item']}>
                                        <img
                                            className={styles['main__list-img']}
                                            src={
                                                process.env.PUBLIC_URL +
                                                '../assets/images/cotton.svg'
                                            }
                                            alt="картинка хлопок"
                                        />
                                        <p className={styles['main__list-text']}>
                                            100%-й хлопок высокой плотности
                                        </p>
                                    </li>
                                    <li className={styles['main__list-item']}>
                                        <img
                                            className={styles['main__list-img']}
                                            src={
                                                process.env.PUBLIC_URL +
                                                '../assets/images/change.svg'
                                            }
                                            alt="картинка обмен"
                                        />
                                        <p className={styles['main__list-text']}>
                                            Возврат или обмен в течение 14 дней
                                        </p>
                                    </li>
                                    <li className={styles['main__list-item']}>
                                        <img
                                            className={styles['main__list-img']}
                                            src={
                                                process.env.PUBLIC_URL + '../assets/images/gift.svg'
                                            }
                                            alt="картинка подарок"
                                        />
                                        <p className={styles['main__list-text']}>
                                            При покупке постельного + полотенца, вы получаете 10%
                                            скидки на следующий заказ
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
                                src={process.env.PUBLIC_URL + '/assets/images/top-img.jpg'}
                                alt="Диван"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <LazyLoad height={800}>
                <Products />
            </LazyLoad>

            <About />

            {openPayModal && (
                <Modal callBack={() => setOpenPayModal(false)} small>
                    <ModalBuy />
                </Modal>
            )}

            <Feedback />

            <Footer />

            <Link className={styles['arrow']} to={'main'} smooth={true} duration={1000}></Link>
        </>
    );
};

export default Main;
