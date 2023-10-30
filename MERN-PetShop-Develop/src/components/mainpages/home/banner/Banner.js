import React from 'react';
import { useRef } from 'react';
// import { GoPlay } from 'react-icons/go';
// import { HiOutlinePlusCircle } from 'react-icons/hi';
// import { VscCircleLargeFilled } from 'react-icons/vsc';
// import { gsap } from 'gsap';
import images from '../../../../asset/img';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
//
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

//

const cx = classNames.bind(styles);
export const Banner = () => {
    // const onEnter = ({ currentTarget }) => {
    //   gsap.to(currentTarget, {
    //     repeatDelay: 1,
    //     // rotate: 360,
    //     // yoyo: true,
    //     scale: 1.1,
    //   });
    // };
    // const onLeave = ({ currentTarget }) => {
    //   gsap.to(currentTarget, { scale: 1 });
    // };
    //return (
    // <>
    //   <div className="banner-content">
    //     <div className="banner-left-split">
    //       <div className="banner-left">
    //         <div className="banner-large-label">
    //           <span className="big-label">Nguyen</span>
    //           <span className="big-label">1</span>
    //           <span className="big-label">P2</span>
    //         </div>
    //         <p className="banner-paragraph">
    //           Grooming and Supply provides grooming service for all dog and cat
    //           breeds. We are fully committed to the health.
    //         </p>
    //       </div>
    //       <div className="banner-btn">
    //         <button>
    //           Create Schedule <HiOutlinePlusCircle />
    //         </button>
    //         <h3 className="banner-play-video">
    //           <GoPlay style={{ color: '#F76631' }} />
    //           Play Video
    //         </h3>
    //       </div>
    //       <div className="banner-number-container">
    //         <div className="banner-number">
    //           <div className="banner-icon-circle">
    //             <VscCircleLargeFilled
    //               style={{ color: '#F76631' }}
    //               size="25px"
    //             />
    //           </div>
    //           <div className="banner-number-element">
    //             <p className="large-text">28K</p>
    //             <p className="small-text">Veterinarian</p>
    //           </div>
    //         </div>
    //         <div className="banner-number">
    //           <div className="banner-icon-circle">
    //             <VscCircleLargeFilled
    //               style={{ color: '#524eb7' }}
    //               size="25px"
    //             />
    //           </div>
    //           <div className="banner-number-element">
    //             <p className="large-text">13K</p>
    //             <p className="small-text">Helped Pet</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       onMouseEnter={onEnter}
    //       onMouseLeave={onLeave}
    //       className="banner-right split"
    //     >
    //       <img
    //         src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/05/h1_slide-image.png"
    //         alt="banner-right"
    //         width="600px"
    //         height="700px"
    //       />
    //       <div className="widget">
    //         <p>Trusted Vet</p>
    //       </div>
    //       <div className="motion-effect">
    //         <img
    //           src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/05/testimonial-4.jpg"
    //           alt="img-motion-effect"
    //         />
    //         <p>Dr. Koh Bouphaphan</p>
    //         <h3>OK very good</h3>
    //       </div>
    //     </div>
    //   </div>
    // </>
    //);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div>
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
                    <img
                        src="https://www.pfirst.jp/on/demandware.static/Sites-pfirst-Site/-/ja_JP/dw8c09b272/images/petsfirst/hero-mypage.jpeg"
                        alt="logo1"
                    ></img>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};
