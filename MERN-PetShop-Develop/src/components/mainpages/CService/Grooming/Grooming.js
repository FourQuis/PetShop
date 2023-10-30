import React from 'react';
import classNames from 'classnames/bind';
import styles from './Grooming.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faMinusCircle, faPencil, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Grooming() {
    const data1 = ['Cắt Gọn Lông', 'Tỉa Lông Tạo Kiểu', 'Cạo Lông'];
    const data2 = [
        {
            comboName: 'Combo #1',
            price: 'Chỉ từ 200.000Đ',
            serviceHas: ['TẮM SẤY', ' VỆ SINH / XỊT THƠM'],
            serviceNone: ['CẠO LÔNG', 'CẮT TỈA / TẠO KIỂU'],
        },
        {
            comboName: 'Combo #2',
            price: 'Chỉ từ 300.000Đ',
            serviceHas: ['CẠO LÔNG', 'TẮM SẤY'],
            serviceNone: [' VỆ SINH / XỊT THƠM', 'CẮT TỈA / TẠO KIỂU'],
        },
        {
            comboName: 'Combo #3',
            price: 'Chỉ từ 400.000Đ',
            serviceHas: ['TẮM SẤY', ' VỆ SINH / XỊT THƠM', 'CẮT TỈA / TẠO KIỂU'],
            serviceNone: ['CẠO LÔNG'],
        },
    ];
    return (
        <div className={cx('grooming-container')}>
            <div className={cx('grooming-up')}>
                <img
                    src="https://static.wixstatic.com/media/7cd323_d28ffd44527d4b4b9fdbb22b061979a8~mv2.jpeg/v1/fill/w_1110,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7cd323_d28ffd44527d4b4b9fdbb22b061979a8~mv2.jpeg"
                    alt="grooming-up"
                ></img>
                <div className={cx('grooming-ser')}>
                    <p>Thông tin & bảng giá</p>
                    <h2>
                        Dịch vụ cắt tỉa lông <strong>TẠI NHÀ</strong>
                    </h2>
                    <div className={cx('groom-info')}>
                        <ul>
                            {data1.map((item) => (
                                <li className={cx('groom-info-item')}>
                                    <FontAwesomeIcon icon={faCheck} color="blue" /> {item}
                                </li>
                            ))}
                        </ul>
                        <h3>
                            Chỉ từ <br /> 400.000Đ
                        </h3>
                    </div>

                    <button className={cx('conntact-groom')}><FontAwesomeIcon icon={faPhone}/> Liên hệ chúng tôi</button>
                </div>
            </div>
            <div className={cx('grooming-combo')}>
                <div className={cx('grooming-combo-left')}>
                    <p>Bảng giá</p>
                    <h3>
                        PET SERVICE <br /> COMBO
                    </h3>
                </div>
                <div className={cx('grooming-combo-right')}>
                    <ul className={cx('grooming-combo-list')}>
                        {data2.map((item, i) => (
                            <li className={cx('grooming-combo-item')}>
                                <div className={cx('combo-item')}>
                                    <h2 className={cx('ser-combo-name')}>{item.comboName}</h2>
                                    <h2 className={cx('ser-combo-price')}>{item.price}</h2>
                                    <ul className={cx('ser-list')}>
                                        {item.serviceNone.map((items, i) => (
                                            <li className={cx('ser-item')}>
                                                {' '}
                                                <FontAwesomeIcon icon={faMinusCircle} color="gray" /> {items}
                                            </li>
                                        ))}
                                        {item.serviceHas.map((items, i) => (
                                            <li className={cx('ser-item')}>
                                                {' '}
                                                <FontAwesomeIcon icon={faCheckCircle} color="green" /> {items}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={cx('conntact-groom')}><FontAwesomeIcon icon={faPhone}/> Liên hệ chúng tôi</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Grooming;
