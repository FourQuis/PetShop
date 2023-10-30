import React from 'react';
import { useRef } from 'react';
import styles from './NBanner.module.scss';
import classNames from 'classnames/bind';
///

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Autoplay } from 'swiper';
///
const cx = classNames.bind(styles);

function NBanner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className={cx('banner-container')}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className={cx('banner-img')}
                        src="https://www.pfirst.jp/on/demandware.static/Sites-pfirst-Site/-/ja_JP/dw8c09b272/images/petsfirst/hero-mypage.jpeg"
                        alt="logo1"
                    ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cx('banner-img')}
                        src="https://www.pfirst.jp/on/demandware.static/-/Sites-pfirst-Library/ja_JP/dwa61b5a19/reservation.jpeg"
                        alt="logo1"
                    ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className={cx('banner-img')}
                        src="https://www.pfirst.jp/on/demandware.static/Sites-pfirst-Site/-/ja_JP/dw8c09b272/images/petsfirst/hero-mypage.jpeg"
                        alt="logo1"
                    ></img>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}

export default NBanner;
