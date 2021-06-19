import React, {FC, useState} from 'react';

import mockData from '../../mockDataProduct';

import styles from './style.module.scss';
import Modal from '../Modal';

type ModalContentType = {
  img: string;
  title: string;
  price: string;
  size: JSX.Element | string;
};

const Products: FC = () => {
  const [modalContent, setModalContent] = useState<ModalContentType | null>(null);

  const modalOpenHandler = (
    img: string,
    title: string,
    price: string,
    size: JSX.Element | string,
  ) => {
    setModalContent({img, title, price, size});
  };

  return (
    <>
      <section className={styles['products']}>
        <div className={'container'}>
          <h2 className={styles['products__title']}>Товары</h2>

          <ul className={styles['products__list']}>
            <li className={styles['products__list-item']}>
              <a className={styles['products__list-link']} href="#">
                Полтоенца
              </a>
            </li>
            <li className={styles['products__list-item']}>
              <a className={styles['products__list-link']} href="#">
                Постельное белье
              </a>
            </li>
          </ul>
          <div className={styles['products__inner']}>
            {mockData.map((item) => {
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
                    <button className={'card__btn-buy'}>Купить</button>
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
            <p className={styles['modal-product__price']}>{modalContent?.price}
            <span className={styles['modal-product__price-main']}>95 грн</span>
            <span className={styles['modal-product__price-sale']}>100 грн</span>
            </p>
            <button className={styles['modal-product__btn']}>Заказать</button>
            <p className={styles['modal-product__size']}>{modalContent?.size}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Products;
