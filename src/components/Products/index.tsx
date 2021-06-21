import React, {FC, useState} from 'react';

import mockData from '../../mockDataProduct';
import Modal from '../Modal';
import ModalBuy from '../ModalBuy';

import styles from './style.module.scss';

type ModalContentType = {
  img: string;
  title: string;
  price: string;
  size: JSX.Element | string;
  newPrice: string;
};

const Products: FC = () => {
  let [modalContent, setModalContent] = useState<ModalContentType | null>(null);
  let [productList, setProductList] = useState(mockData);
  let [filter, setFilter] = useState<'all' | 'towel' | 'linens'>('all');
  let [openPayModal, setOpenPayModal] = useState<boolean>(false);
  let [greetingUser, setGreetingUser] = useState('Здравствуйте! Хотел бы заказать ');

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
    newPrice: string,
  ) => {
    setModalContent({img, title, price, size, newPrice});
  };

  const modalInModal = (name: string | undefined) => {
    setModalContent(null);
    setOpenPayModal(true);
    setGreetingUser(`Здравствуйте! Хотел бы заказать ${name}`);
  };

  const infoProductForm = (name: string) => {
    setOpenPayModal(true);
    setGreetingUser(`Здравствуйте! Хотел бы заказать ${name}`);
  };

  return (
    <>
      <section className={styles['products']} id={'products'}>
        <div className={'container'}>
          <h2 className={'title'}>Каталог</h2>

          <ul className={styles['products__list']}>
            <li className={styles['products__list-item']}>
              <button
                className={styles['products__list-button']}
                onClick={() => setFilter('all')}>
                Все товары
              </button>
            </li>
            <li className={styles['products__list-item']}>
              <button
                className={styles['products__list-button']}
                onClick={() => setFilter('towel')}>
                Полотенца
              </button>
            </li>
            <li className={styles['products__list-item']}>
              <button
                className={styles['products__list-button']}
                onClick={() => setFilter('linens')}>
                Постельное белье
              </button>
            </li>
          </ul>
          <ul className={styles['products__items']}>
            {copyProductList.map((item) => {
              return (
                <li className={styles['products__item']}>
                  <article key={item.id} className={'card'}>
                    <img
                      className={'card__img'}
                      src={`${process.env.PUBLIC_URL}/assets/images/${item.img}`}
                      alt=""
                    />
                    <h2 className={'card__title'}>{item.title}</h2>
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
                            item.newPrice,
                          )
                        }>
                        Подробнее
                      </button>
                      <button
                        className={'card__btn-buy'}
                        onClick={() => infoProductForm(item.title)}>
                        Купить
                      </button>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
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
                            <span className={styles['modal-product__price-sale']}>
                                {modalContent?.price}
                            </span>
              <span className={styles['modal-product__price-main']}>
                                <span>{modalContent?.newPrice}</span>
                            </span>
            </p>
            <div className={styles['modal-product__description']}>
              {modalContent?.size}
            </div>
            <button
              className={styles['modal-product__btn']}
              onClick={() => {
                modalInModal(modalContent?.title);
              }}>
              Заказать
            </button>
          </div>
        </Modal>
      )}
      {openPayModal && (
        <Modal callBack={() => setOpenPayModal(false)} small>
          <ModalBuy greetingUser={greetingUser}/>
        </Modal>
      )}
    </>
  );
};

export default Products;
