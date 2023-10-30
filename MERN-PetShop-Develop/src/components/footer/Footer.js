import React from 'react';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

import images from '../../asset/img';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, faArrowAltCircleRight, faToggleOn } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className={cx('footter-dogs')}>
                    <img src={images.dog1} alt="" className={cx('footter-dogs-item')} />
                    <img src={images.dog2} alt="" className={cx('footter-dogs-item')} />
                    <img src={images.dog3} alt="" className={cx('footter-dogs-item')} />
                    <img src={images.dog4} alt="" className={cx('footter-dogs-item')} />
                    <img src={images.dog5} alt="" className={cx('footter-dogs-item')} />
                    <img src={images.dog6} alt="" className={cx('footter-dogs-item')} />
                    <img src={images.dog7} alt="" className={cx('footter-dogs-item')} />
                    <img src={images.dog8} alt="" className={cx('footter-dogs-item')} />
                </div>
                <div className="containers">
                    <div className="row-foot">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">
                                Peoples love pets the same as their Children. A pet store sells anything and everything
                                pet-related. A pet supply store offers the products needed to keep a pet healthy and
                                happy from small things to dog toys. Better products mean Better Profits. you should
                                Choose the Right Products as per your local Needs. Pet Supplies are the best opportunity
                                and demand full control of inventory due to keeping a pet is Trend. you also have
                                adequate knowledge of pet-related material and its selling and marketing process to
                                Attract Customers.
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Dog</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Cat</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">PHP</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Bird</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Fish</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Other</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">About Us</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Contact Us</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Shop</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Paypal</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100009983138637">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="containers">
                    <div className="row-foot">
                        <div className="col-md-8 col-sm-6 col-xs-12"></div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li>
                                    <a className="facebook" href="/#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="/#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="dribbble" href="/#">
                                        <i className="fa fa-dribbble"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="linkedin" href="/">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
