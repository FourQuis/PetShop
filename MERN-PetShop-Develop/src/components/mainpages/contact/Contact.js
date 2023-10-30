import React from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('contact')}>
            <div className={cx('contactInfo')}>
                <h4>Thông tin liên hệ</h4>
                <p>Petshop thuộc cung cấp các loại thú cưng, thức ăn, phụ kiện thời trang,....uy tín</p>
                <div className={cx('contactInfoItem')}>
                    <FontAwesomeIcon icon={faLocationDot} className={cx('contactIcon')} />
                    <div className={cx('contact-ss')}>
                        <strong>Địa chỉ</strong>
                        <p>21 Trương Văn Đa, Liên Chiểu, Đà Nẵng </p>
                    </div>
                </div>
                <div className={cx('contactInfoItem')}>
                    <FontAwesomeIcon icon={faPhone} className={cx('contactIcon')} />
                    <div className={cx('contact-ss')}>
                        <strong>Điện thoại:</strong>
                        <p>0825.178.860</p>
                    </div>
                </div>
                <div className={cx('contactInfoItem')}>
                    <FontAwesomeIcon icon={faEnvelope} className={cx('contactIcon')} />
                    <div className={cx('contact-ss')}>
                        <strong>Email:</strong>
                        <p>nguyen1522002@gmail.com</p>
                    </div>
                </div>
                <div className={cx('contactInfoItem')}>
                    <FontAwesomeIcon icon={faEnvelope} className={cx('contactIcon')} />
                    <div className={cx('contact-ss')}>
                        <strong>Map:</strong>
                        <p>nguyen1522002@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={cx('contactForm')}>
                <h4>Bạn có bất kỳ câu hỏi nào?</h4>
                <p>
                    Bạn có câu hỏi, nhận xét hoặc ý tưởng tuyệt vời muốn chia sẻ? Gửi cho chúng tôi một ghi chú nhỏ bên
                    dưới - chúng tôi muốn nghe ý kiến của bạn và sẽ luôn trả lời!
                </p>

                <form>
                    <div className={cx('contact-input')}>
                        <p>Ho va Ten</p>
                        <input type="text" placeholder="Nhap ho ten"></input>
                    </div>
                    <div className={cx('contact-input')}>
                        <p>So dien thoai</p>
                        <input type="tel" placeholder="Nhap so dien thoai"></input>
                    </div>
                    <div className={cx('contact-input')}>
                        <p>Nhap mail</p>
                        <input type="mail" placeholder="Nhap mail"></input>
                    </div>
                    <div className={cx('contact-input')}>
                        <p>Nhap noi dung</p>
                        <input type="text" placeholder="Nhap noi dung lien he"></input>
                    </div>
                    <button path="/home">Gui tin nhan</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
