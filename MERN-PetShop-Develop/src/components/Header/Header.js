import React, { useContext, useState } from 'react';
import { GlobalState } from '../../GlobalState';
import Menu from './icon/menu.svg';
import Close from './icon/close.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiUser } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineLogout } from 'react-icons/hi';
import { AiOutlineHistory, AiOutlineHeart } from 'react-icons/ai';
import Logo from './icon/logo-white-1.svg';
import { gsap } from 'gsap';
import { Route, Router } from 'react-router-dom';

function Header() {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;
    const [cart] = state.userAPI.cart;
    const [menu, setMenu] = useState(false);

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
    const ToggleSidebar = () => {
        const [isOpen, setIsopen] = useState(false);
        const ToggleSidebar = () => {
            isOpen === true ? setIsopen(false) : setIsopen(true);
        };
        return (
            <>
                <div className="btn btn-primary" onClick={ToggleSidebar}>
                    <i className="fa fa-bars"></i>
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-body">
                            <ul>
                                <li>
                                    <Link to="/create_product">Create Product</Link>
                                </li>
                                <li>
                                    <Link to="/category">Create Category</Link>
                                </li>
                                {/* <li>
                                    <Link to="/revenue">Revenue</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
                </div>
            </>
        );
    };

    const adminRouter = () => {
        return (
            <>
                <ToggleSidebar />
            </>
        );
    };

    const loggedRouter = () => {
        return (
            <>
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
            </>
        );
    };

    const styleMenu = {
        left: menu ? 0 : '-100%',
    };

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            {/* logo */}
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

            <ul style={styleMenu}>
                <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <Link to="/">{'home'}</Link>
                </li>
                <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <Link to="/products">{isAdmin ? 'Products' : 'Shop'}</Link>
                </li>
                {isAdmin ? (
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="/revenue">{'Revenue'}</Link>
                    </li>
                ) : (
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="/ranking">{'Ranking'}</Link>
                    </li>
                )}
                {/* <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <Link to="/ranking">{isAdmin ? 'Revenue' : 'Ranking'}</Link>
                </li> */}
                <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <Link to="/contact">{'Contact'}</Link>
                </li>
                {isAdmin && adminRouter()}
                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="300" className="menu" />
                </li>
            </ul>
        </header>
    );
}
// comments

export default Header;
