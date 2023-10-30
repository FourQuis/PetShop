import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TiStarburst } from 'react-icons/ti';
import classNames from 'classnames/bind';
import styles from './NRegister.module.scss';

const cx = classNames.bind(styles);

function NRegister() {
    const [user, setUser] = useState({
        name: '',
        lname:'',
        phone:'',
        email: '',
        password: '',
    });

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const registerSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/user/register', { ...user });

            localStorage.setItem('firstLogin', true);

            window.location.href = '/';
        } catch (err) {
            alert(err.response.data.msg);
        }
    };
    const style = {
        marginRight: '10px',
        color: {
            color: 'rgba(255,255,255)',
        },
    };
    return (
        <div className={cx('login-page')}>
            <form onSubmit={registerSubmit} className={cx('register-form')}>
                <h2>Register</h2>
                <div className={cx('input-info')}>
                    <div className={cx('info-name')}>
                        <p className={cx('info-label')}>First Name</p>
                        <TiStarburst color="red" fontSize="7pt" />
                    </div>
                        <input type="text" name="name" required value={user.name} onChange={onChangeInput} />
                </div>
                {/* <div className={cx('input-info')}>
                    <div className={cx('info-name')}>
                        <p className={cx('info-label')}>Last Name</p>
                        <TiStarburst color="red" fontSize="7pt" />
                    </div>
                        <input type="text" name="lname" required value={user.lname} onChange={onChangeInput} />
                </div> */}
                <div className={cx('input-info')}>
                    <div className={cx('info-name')}>
                        <p className={cx('info-label')}>Your phone</p>
                        <TiStarburst color="red" fontSize="7pt" />
                    </div>
                        <input type="tel" name="phone" required value={user.phone} onChange={onChangeInput} />
                </div>
                <div className={cx('input-info')}>
                    <div className={cx('info-name')}>
                        <p className={cx('info-label')}>Your email</p>
                        <TiStarburst color="red" fontSize="7pt" />
                    </div>
                        <input type="email" name="email" required value={user.email} onChange={onChangeInput} />
                </div>
                <div className={cx('input-info')}>
                    <div className={cx('info-name')}>
                        <p className={cx('info-label')}>Password</p>
                        <TiStarburst color="red" fontSize="7pt" />
                    </div>
                        <input type="password" name="password" required value={user.password} onChange={onChangeInput} />
                </div>
                <div className={cx('row')}>
                    <button type="submit">Register</button>
                    <Link to="/nlogin" className={cx('login-btn')}>Login</Link>
                </div>
                <hr />
                <img
                    style={style}
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="ig"
                    width="30"
                    height="30"
                />
                <img
                    style={style}
                    src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png"
                    alt="ig"
                    width="30"
                    height="30"
                />
                <img
                    style={style}
                    src="https://cdn-icons-png.flaticon.com/512/888/888853.png"
                    alt="ig"
                    width="30"
                    height="30"
                />
                <img
                    style={style}
                    src="https://cdn-icons-png.flaticon.com/512/2504/2504839.png"
                    alt="ig"
                    width="30"
                    height="30"
                />
            </form>
        </div>
    );
}
// register
export default NRegister;
