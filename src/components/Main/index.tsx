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
                                Бесплатная доставка при заказе от 4-ех единиц товаров!
                            </p>
                            <div className={styles['main__decor']}>
                                <ul className={styles['main__list']}>
                                    <li className={styles['main__list-item']}>
                                        <img
                                            className={styles['main__list-img']}
                                            src={
                                                process.env.PUBLIC_URL + '/assets/images/cotton.svg'
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
                                                process.env.PUBLIC_URL + '/assets/images/change.svg'
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
                                            src={process.env.PUBLIC_URL + '/assets/images/gift.svg'}
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
                                src={process.env.PUBLIC_URL + '/assets/images/linens/31.jpg'}
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

            <section className={styles['feedback']}>
                <div className={'container'}>
                    <h2 className={styles['feedback__title']}>Отзывы</h2>
                    <ul className={styles['feedback__cards']}>
                        <li className={styles['feedback__card']}>
                            <div className={styles['feedback__header']}>
                                <img
                                    className={styles['feedback__card-img']}
                                    src={process.env.PUBLIC_URL + '../assets/images/dmitri.jpg'}
                                    alt="аватар"
                                />
                                <div className={styles['feedback__card-name']}>
                                    Дмитрий Васильев
                                </div>
                            </div>
                            <p className={styles['feedback__card-text']}>
                                Давно хотели приобрести однотонное бордовое постельное белье из
                                натурального материала. Какое же было счастье, что я нашла этот
                                магазин! Комплект безупречного качества, очень приятная ткань к
                                телу, цвет не линяет при стирке и пока ещё не стал тусклее)) Удобно,
                                что пододеяльник застегивается на молнию, размер идеально подходит
                                для больших кроватей - простынь огромная и это большой + Удачи вам и
                                благодарных клиентов!
                            </p>
                        </li>
                        <li className={styles['feedback__card']}>
                            <div className={styles['feedback__header']}>
                                <img
                                    className={styles['feedback__card-img']}
                                    src={process.env.PUBLIC_URL + '../assets/images/lena.jpg'}
                                    alt="аватар"
                                />
                                <div className={styles['feedback__card-name']}>Лена Вернадская</div>
                            </div>
                            <p className={styles['feedback__card-text']}>
                                Все прекрасно, начиная от оформления заказа (консультация,
                                отзывчивость, просто приятное общение), все сроки соблюдены, просто
                                шикарный подарок в плане упаковки, качество неимоверное,
                                индивидуальные размеры четко подходят))) Жду новых дизайнов!!!
                            </p>
                        </li>
                        <li className={styles['feedback__card']}>
                            <div className={styles['feedback__header']}>
                                <img
                                    className={styles['feedback__card-img']}
                                    src={process.env.PUBLIC_URL + '../assets/images/svetlana.jpg'}
                                    alt="аватар"
                                />
                                <div className={styles['feedback__card-name']}>
                                    Светлана Богатырева
                                </div>
                            </div>
                            <p className={styles['feedback__card-text']}>
                                Твердая пятерка! Ткань очень качественная, плотная и при этом
                                приятная на ощупь, аккуратные строчки. Цвет белья на сайте такой же,
                                как и в живую. Заказывала через сайт, мне быстро перезвонили, быстро
                                отправили. Приятно, когда к клиентам относятся с любовью даже в
                                мелочах.. красиво упаковать и оформить. Обязательно закажу себе еще
                                пару комплектов. Соотношение цена/качество выше всяческих похвал
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Main;
