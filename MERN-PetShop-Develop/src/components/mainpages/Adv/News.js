import React from 'react';
import classNames from 'classnames/bind';
import styles from './New.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, faArrowAltCircleRight, faToggleOn } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function News() {
    return (
        <div>
            <div className={cx('NewsContainer')}>
                <span className={cx('breadcrumb')}>
                    <a href="/">HOME</a>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    <a href="/news">NEWS</a>{' '}
                </span>
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
            </div>
        </div>
    );
}

export default News;
