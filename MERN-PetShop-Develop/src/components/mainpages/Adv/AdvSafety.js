import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdvSafety.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

function AdvSafety() {
    return (
        <>
            <div className={cx('SafetyContainer')}>
                <h2>Safety</h2>
                <div className={cx('napping')}>
                    <div className={cx('napping-img')}>
                        <img
                            src="https://d.newsweek.com/en/full/1852063/momma-cat-introduces-kitten-dog-video.jpg"
                            alt="napping"
                        ></img>
                    </div>
                    <div className={cx('napping-text')}>
                        <h3 className={cx('napping-title')}>Để yên tâm chào đón thú cưng của bạn</h3>
                        <p className={cx('napping-label')}>
                            Chúng tôi đặt sức khỏe của thú cưng của bạn lên hàng đầu và làm mọi thứ trong khả năng của
                            mình để đảm bảo rằng bạn và thú cưng của bạn có một cuộc sống năng động.
                        </p>
                    </div>
                </div>
                <div className={cx('more-safety')}>
                    <ul className={cx('more-safety-list')}>
                        <li className={cx('more-safety-item')}>
                            <img
                                className={cx('safety-item-img')}
                                src="https://caninehq.com/wp-content/uploads/2020/03/proper-dog-training.jpeg"
                                alt="item1"
                            ></img>
                            <p>
                                We only deal with breeders who share our philosophy of “putting pets first” and can work
                                with us to manage the health of pets and improve their living environment.
                            </p>
                        </li>
                        <li className={cx('more-safety-item')}>
                            <img
                                className={cx('safety-item-img')}
                                src="https://irp-cdn.multiscreensite.com/ee7201b1ff3845e89f8b40aac3ad1453/dms3rep/multi/burien-img.jpg"
                                alt="item1"
                            ></img>
                            <p>
                                We are striving to prevent and prevent disease through health checkups by all
                                veterinarians, a thorough infectious disease prevention program, and daily care by
                                health management staff.
                            </p>
                        </li>
                        <li className={cx('more-safety-item')}>
                            <img
                                className={cx('safety-item-img')}
                                src="https://dbw4iivs1kce3.cloudfront.net/680x/2019/06/fun-facts-why-cats-hate-belly-rubs-2019-a1.jpg"
                                alt="item1"
                            ></img>
                            <p>
                                In addition to health management, we are implementing measures such as thorough
                                temperature and humidity control, creating a stress-free living environment, and
                                socialization training.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
            <div className={cx('NewsContainer')}>
                <h2>News</h2>
                <div className={cx('more-news')}>
                    <ul className={cx('more-news-list')}>
                        <li className={cx('more-news-item')}>
                            <a href="http://localhost:3000/" target="blank" className={cx('news-a')}>
                                <div className={cx('badge-new')}>
                                    <span>New!</span>
                                </div>
                                <img
                                    className={cx('news-item-img')}
                                    src="https://caninehq.com/wp-content/uploads/2020/03/proper-dog-training.jpeg"
                                    alt="item1"
                                ></img>
                                <p>
                                    We only deal with breeders who share our philosophy of “putting pets first” and can
                                    work with us to manage the health of pets and improve their living environment.
                                </p>
                            </a>
                        </li>
                        <li className={cx('more-news-item')}>
                            <a href="https://www.youtube.com" target="blank" className={cx('news-a')}>
                                <img
                                    className={cx('news-item-img')}
                                    src="https://irp-cdn.multiscreensite.com/ee7201b1ff3845e89f8b40aac3ad1453/dms3rep/multi/burien-img.jpg"
                                    alt="item1"
                                ></img>
                                <p>
                                    We are striving to prevent and prevent disease through health checkups by all
                                    veterinarians, a thorough infectious disease prevention program, and daily care by
                                    health management staff.
                                </p>
                            </a>
                        </li>
                        <li className={cx('more-news-item')}>
                            <a href="https://www.facebook.com" target="blank" className={cx('news-a')}>
                                <img
                                    className={cx('news-item-img')}
                                    src="https://dbw4iivs1kce3.cloudfront.net/680x/2019/06/fun-facts-why-cats-hate-belly-rubs-2019-a1.jpg"
                                    alt="item1"
                                ></img>
                                <p>
                                    In addition to health management, we are implementing measures such as thorough
                                    temperature and humidity control, creating a stress-free living environment, and
                                    socialization training.
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('more-news-btn')}>
                    <Link to="/news">More news</Link>
                </div>
            </div>
        </>
    );
}

export default AdvSafety;
