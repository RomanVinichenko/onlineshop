import React, { FC } from 'react';

import styles from './style.module.scss';

const About: FC = () => {
    return (
        <section className={styles['about']} id={'about'}>
            <div className={'container'}>
                <div className={styles['about__inner']}>
                    <h2 className={styles['about__title']}>О доставке</h2>
                    <ul className={styles['about__items']}>
                        <li className={styles['about__item']}>
                            <p className={styles['about__text']}>
                                Мы доставляем товары с нашего магазина по всей территории Украины
                            </p>
                        </li>
                        <li className={styles['about__item']}>
                            <p className={styles['about__text']}>
                                Доставка по Новой Почте от 1-го до 3-ех дней
                            </p>
                        </li>
                        <li className={styles['about__item']}>
                            <p className={styles['about__text']}>
                                Отправляем наложенным платежом и оплата осущетвляется только при
                                получении товара
                            </p>
                        </li>
                        <li className={styles['about__item']}>
                            <p className={styles['about__text']}>
                                Все наши товары соответствуют картинке и описанию на сайте
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
