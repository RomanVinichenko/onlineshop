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
                            <img className={styles['about__img']} src={
                                process.env.PUBLIC_URL + '../assets/images/delivery.png'
                            } alt="картинка доставки"/>
                            <p className={styles['about__text']}>
                                Доставка осуществляется курьерской службой "Нова Потча" наложенным платежом или по полной предоплате на банковскую карту.
                            </p>
                        </li>
                        <li className={styles['about__item']}>
                            <img className={styles['about__img']} src={
                                process.env.PUBLIC_URL + '../assets/images/view.png'
                            } alt="картинка обзора"/>
                            <p className={styles['about__text']}>
                                У вас всегда есть возможность предварительного осмотра и проверки товара перед его оплатой.
                            </p>
                        </li>
                        <li className={styles['about__item']}>
                            <img className={styles['about__img']} src={
                                process.env.PUBLIC_URL + '../assets/images/clock.png'
                            } alt="картинка часов"/>
                            <p className={styles['about__text']}>
                                Доставка от 1-го до 3-ех дней по всей територии Украины.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles['about__inner']}>
                    <h2 className={styles['about__title']}>Гарантии</h2>
                    <ul className={styles['about__items']}>
                        <li className={styles['about__item']}>
                            <img className={styles['about__img-garantee']} src={
                                process.env.PUBLIC_URL + '../assets/images/box.png'
                            } alt="картинка доставки"/>
                            <p className={styles['about__text-garantee']}>
                                -Товар полностью соотвествуют описанию и фото на сайте
                            </p>
                        </li>
                        <li className={styles['about__item']}>
                            <img className={styles['about__img-garantee']} src={
                                process.env.PUBLIC_URL + '../assets/images/no.png'
                            } alt="картинка обзора"/>
                            <p className={styles['about__text-garantee']}>
                                -Мы не берем с вас предоплату, оплачиваете товар только на отделении почтового отделения
                            </p>
                        </li>
                        <li className={styles['about__item']}>
                            <img className={styles['about__img-garantee']} src={
                                process.env.PUBLIC_URL + '../assets/images/check.png'
                            } alt="картинка часов"/>
                            <p className={styles['about__text-garantee']}>
                                -Перед отправкой товар проходит 100% проверку. Мы вернем вам деньги если что-то с вашим заказом будет не так.
                            </p>
                        </li>
                        <li className={styles['about__item']}>
                            <img className={styles['about__img-garantee']} src={
                                process.env.PUBLIC_URL + '../assets/images/return.png'
                            } alt="картинка часов"/>
                            <p className={styles['about__text-garantee']}>
                                -Обмен/Возврат товара до 14 дней
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
