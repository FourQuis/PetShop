// import { FaDove } from 'react-icons/fa';
// import { BsFacebook, BsYoutube } from 'react-icons/bs';
import './topheader.css';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import Logo from './icon/nlogo.svg';
import { FaFontAwesome } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './Topheader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { BsCart3 } from 'react-icons/bs';

// import Button from '../Button';

import { gsap } from 'gsap';
import { AiOutlineHistory } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { HiOutlineLogout } from 'react-icons/hi';
import axios from 'axios';
import UserAPI from '../../api/UserAPI';
import UserInfo from '../mainpages/auth/UserInfo';
import Tippy from '@tippyjs/react';
///

const cx = classNames.bind(styles);

export const TopHeader = () => {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;
    const [cart] = state.userAPI.cart;

    //
    const token = state.token;
    // console.log(`token:`,token);
    const [user] = state.userAPI.detail;
    // console.log(`user`,user);
    //

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            repeatDelay: 1,
            yoyo: true,
            scale: 1.3,
        });
    };
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1 });
    };

    const logoutUser = async () => {
        await axios.get('/user/logout');
        localStorage.removeItem('firstLogin');
        window.location.href = '/';
    };
    //
    const loggedRouter = () => {
        return (
            <div className={cx('row2-topheader')}>
                <p>Hi, {user.name}</p>
                <ul className={cx('list-topheader')}>
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="/history">
                            <AiOutlineHistory />
                        </Link>
                    </li>
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="/infor">
                            <BiUser />
                        </Link>
                    </li>
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="/" onClick={logoutUser}>
                            <HiOutlineLogout />
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };
    //
    return (
        <>
            <div className="header-container-top">
                {/* <div className="logo">
                    <h1>
                        <Link to="/">
                            {isAdmin ? (
                                //
                                'Admin'
                            ) : (
                                <img src={Logo} alt="PetFirst" />
                            )}
                        </Link>
                    </h1>
                </div> */}
                <div className="logo">
                    <img src={Logo} alt="PetFirst" />
                </div>
                <div className="top-header-right">
                    {/* <div className="search">
                        <input type="text" placeholder="Bạn muốn tìm kiếm ?" spellCheck="true"></input>
                    </div> */}
                    <button className={cx('login-btn')}>
                        {isLogged ? (
                            loggedRouter()
                        ) : (
                            <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                                <Link to="/nlogin">
                                    <FontAwesomeIcon icon={faSignOut} />
                                    <span className={cx('label')}>Login</span>
                                </Link>
                            </p>
                        )}
                    </button>
                    {isAdmin ? (
                        ''
                    ) : (
                        <div className="cart-icon">
                            <span>{cart.length}</span>
                            <Link to="/cart">
                                {/* <img src={Cart} alt="" width="30" /> */}
                                <BsCart3 />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
