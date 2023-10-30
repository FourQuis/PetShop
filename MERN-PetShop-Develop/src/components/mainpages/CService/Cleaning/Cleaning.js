import React from 'react';
import classNames from 'classnames/bind';
import styles from './Cleaning.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Cleaning() {
    return (
        <div className={cx('hotel-container')}>
            <div className={cx('hotel-left')}>
                <p>Thông Tin & Bảng Giá</p>
                <h3>
                    Dịch vụ tắm vệ sinh <strong>tại nhà</strong>
                </h3>
                <></>
                <div>
                    <button className={cx('hotel-btn')}>
                        <p>DỊCH VỤ BAO GỒM</p>
                        {/* <FontAwesomeIcon icon={faCheck} />
                        <FontAwesomeIcon icon={faXmark} /> */}
                    </button>
                    <div className={cx('service-list')}>
                        <ul>
                            <li>CẠO BÀN CHÂN / BỤNG / HẬU MÔN</li>
                            <li>CẮT & MÀI NHẴN MÓNG CHÂN</li>
                            <li>VỆ SINH TAI & KHỬ MÙI TUYẾN HÔI</li>
                            <li>TẮM SẠCH BẰNG 2 LOẠI SỮA TẮM </li>
                            <li>SẤY & CHẢI BUNG XÙ LÔNG</li>
                            <li>XỊT THƠM BẰNG NƯỚC HOA</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button className={cx('hotel-btn')}>
                        <p>DỊCH VỤ BAO GỒM</p>
                        {/* <FontAwesomeIcon icon={faCheck} />
                        <FontAwesomeIcon icon={faXmark} /> */}
                    </button>
                    <div className={cx('service-price')}>
                        <ul>
                            <li>
                                Dưới 10 kg:<strong>300.000đ</strong>
                            </li>
                            <li>
                                Dưới 20 kg:<strong>380.000đ</strong>
                            </li>
                            <li>
                                Dưới 30 kg: <strong>460.000đ</strong>
                            </li>
                            <li>
                                Dưới40 kg: <strong>540.000đ</strong>
                            </li>
                            <li>
                                Trên 40 kg: <strong>Liên hệ</strong>
                            </li>
                            <li>
                                <p>Bảng giá sẽ phụ thuộc vào chủng loại + cân nặng + Khu vực.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <Link to="/contact">dat lich</Link> */}
            </div>
            <div className={cx('hotel-right')}>
                <img
                    src="https://cdn.shopify.com/s/files/1/1600/8437/files/4_8386c7bb-9da6-485e-bbbb-cae9675abc93_1024x1024.png?v=1629450777"
                    alt="shower"
                ></img>
            </div>
            <div className={cx('contactWU')}></div>
        </div>
    );
}

export default Cleaning;

//
