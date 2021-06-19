import React, {FC, useState} from 'react';

import Header from '../Header';
import Products from '../Products';
import Modal from '../Modal';
import ModalBuy from '../ModalBuy';

import styles from './style.module.scss';

const Main: FC = () => {
  let [openPayModal, setOpenPayModal] = useState<boolean>(false);
  return (
      <>
          <Header />
          <section className={styles['main']}>
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
                                          src={process.env.PUBLIC_URL + '/assets/images/cotton.png'}
                                          alt="decor"
                                      />
                                      <p className={styles['main__list-text']}>
                                          100%-й хлопок высокой плотности
                                      </p>
                                  </li>
                                  <li className={styles['main__list-item']}>
                                      <img
                                          className={styles['main__list-img']}
                                          src={process.env.PUBLIC_URL + '/assets/images/change.png'}
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
                              alt="top image"
                          />
                          <div className={styles['main__square']}></div>
                      </div>
                  </div>
              </div>
          </section>

          <Products />
          {openPayModal && (
              <Modal callBack={() => setOpenPayModal(false)}>
                  <ModalBuy />
              </Modal>
          )}

          <section className={styles['about']}>
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
      </>
  );
};

export default Main;
