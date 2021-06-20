import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

import sliderMockData from './sliderMockData';

import styles from './style.module.scss';

const Feedback: FC = () => {
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    return (
        <section className={styles['feedback']}>
            <div className={'container'}>
                <h2 className={styles['feedback__title']}>Отзывы</h2>
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}>
                    {sliderMockData.map((slide) => {
                        return (
                            <SwiperSlide className={styles['feedback__slide']}>
                                <div className={styles['feedback__card']}>
                                    <div className={styles['feedback__header']}>
                                        <img
                                            className={styles['feedback__card-img']}
                                            src={`${process.env.PUBLIC_URL}../assets/images/${slide.img}`}
                                            alt="аватар"
                                        />
                                        <div className={styles['feedback__card-name']}>
                                            {slide.name}
                                        </div>
                                    </div>
                                    <p className={styles['feedback__card-text']}>{slide.text}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Feedback;
