import React from 'react';
import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Ranking() {
    return (
        <div className={cx('ranking-container')}>
            <div className={cx('top-ranking')}>
                <div className={cx('img-rank1')}>
                    <a className={cx('bgi')} href="https://facebook.com" target="_blank">
                        <div className={cx('rank-num')}></div>
                    </a>
                </div>
                <div className={cx('text-rank1')}>
                    <h4>puddle</h4>
                    <p>
                    Nó nổi tiếng với trí thông minh cao đến mức được cho là chú chó nhỏ số 1. Chúng có tính cách thân thiện, vui vẻ và có thể thân thiện, nhẹ nhàng với mọi người, kể cả không chỉ chủ nhân mà cả những người chúng gặp lần đầu và trẻ nhỏ. Chúng rụng ít lông hơn, ít mùi cơ thể hơn và tương đối dễ chăm sóc, khiến chúng trở nên hoàn hảo cho những người lần đầu nuôi thú cưng. Nó cũng dễ dàng mang theo trong túi xách của bạn, vì vậy nó được khuyên dùng cho những người muốn cùng họ đi chơi đến nhiều địa điểm khác nhau như quán cà phê và du lịch.。
                    </p>
                </div>
            </div>

            <div className={cx('other-rank')}>
                <div className={cx('left-column')}>
                    <div className={cx('img-rank-other')}>
                        <a className={cx('bgi2')} href="https://facebook.com" target="_blank">
                            <div className={cx('rank-num', 'ranking-2')}></div>
                        </a>
                    </div>
                    <div className={cx('text-rank-other')}>
                        <h4>Hussky</h4>
                        <p>
                        Mameshiba có bộ lông bông xù và biểu cảm dễ thương. Như Shiba Inu được biết đến, nó được biết đến là người trung thành với chủ nhân và rất dễ hòa đồng. Ngoài ra, vì là chó Nhật Bản nên chúng có khả năng chống chọi với sự thay đổi theo mùa, tuy có kích thước nhỏ nhưng nhiều con trong số chúng có xương chắc khỏe và khỏe mạnh.
                        </p>
                    </div>
                </div>
                <div className={cx('right-column')}>
                    <div className={cx('img-rank-other')}>
                        <a className={cx('bgi3')} href="https://facebook.com" target="_blank">
                            <div className={cx('rank-num', 'ranking-3')}></div>
                        </a>
                    </div>
                    <div className={cx('text-rank-other')}>
                        <h4>Pug</h4>
                        <p>
                        Chó bulgie Pháp có biểu cảm vui tươi hấp dẫn, ngay lập tức khiến gia đình ấm áp. Nhiều con rất bình tĩnh và đi theo tốc độ của riêng mình, đôi khi còn rúc vào người chủ và chợp mắt. Chúng có tính cách thân thiện và ngoan ngoãn, vì vậy chúng cũng được khuyên dùng cho những người lần đầu tiên mang theo thú cưng.
                        </p>
                    </div>
                </div>
                <div className={cx('left-column')}>
                    <div className={cx('img-rank-other')}>
                        <a className={cx('bgi4')} href="https://facebook.com" target="_blank">
                            <div className={cx('rank-num', 'ranking-4')}></div>
                        </a>
                    </div>
                    <div className={cx('text-rank-other')}>
                        <h4>Chó Phốc sóc</h4>
                        <p>
                            Chó Phốc sóc là một giống chó cảnh cỡ nhỏ, có ngoại hình xinh xắn, có nguồn gốc từ châu Âu,
                            chúng nổi tiếng và được ưa chuộng bởi ngoại hình bắt mắt của mình. Với tiếng sủa vang rền,
                            dai dẳng không dứt khả năng cảnh giác cao độ, những con chó này lại có thể trở thành những
                            vật canh giữ cửa tốt
                        </p>
                    </div>
                </div>
                <div className={cx('right-column')}>
                    <div className={cx('img-rank-other')}>
                        <a className={cx('bgi5')} href="https://facebook.com" target="_blank">
                            <div className={cx('rank-num', 'ranking-5')}></div>
                        </a>
                    </div>
                    <div className={cx('text-rank-other')}>
                        <h4>Marupu</h4>
                        <p>
                        Nhiều chú chó con có tính cách hiền lành, thừa hưởng “tính cách thông minh và ngọt ngào” của chó Toy Poodle và “tính cách trầm lặng và thân thiện” của chó Malese. Mặc dù thể hiện khía cạnh năng động, tinh nghịch khi vui chơi nhưng hầu hết các em đều hướng về gia đình và hiền lành.{' '}
                        </p>
                    </div>
                </div>
                <div className={cx('left-column')}>
                    <div className={cx('img-rank-other')}>
                        <a className={cx('bgi6')} href="https://facebook.com" target="_blank">
                            <div className={cx('rank-num', 'ranking-6')}></div>
                        </a>
                    </div>
                    <div className={cx('text-rank-other')}>
                        <h4>Miniature Poodle</h4>
                        <p>
                        Mameshiba có bộ lông bông xù và biểu cảm dễ thương. Như Shiba Inu được biết đến, nó được biết đến là người trung thành với chủ nhân và rất dễ hòa đồng. Ngoài ra, vì là chó Nhật Bản nên chúng có khả năng chống chọi với sự thay đổi theo mùa, tuy có kích thước nhỏ nhưng nhiều con trong số chúng có xương chắc khỏe và khỏe mạnh.
                        </p>
                    </div>
                </div>
                <div className={cx('right-column')}>
                    <div className={cx('img-rank-other')}>
                        <a className={cx('bgi7')} href="https://facebook.com" target="_blank">
                            <div className={cx('rank-num', 'ranking-7')}></div>
                        </a>
                    </div>
                    <div className={cx('text-rank-other')}>
                        <h4>Kanihen</h4>
                        <p>
                        Gà mái dachshund có cách đi lại dễ thương với đôi chân ngắn. Anh ấy có tính cách rất vui vẻ và thân thiện. Mặc dù có vóc dáng nhỏ bé nhưng chúng rất năng động và thích chơi đùa, khiến chúng trở thành người bạn đồng hành hoàn hảo của trẻ em.。
                        </p>
                    </div>
                </div>
                <div className={cx('left-column')}>
                    <div className={cx('img-rank-other')}>
                        <a className={cx('bgi8')} href="https://facebook.com" target="_blank">
                            <div className={cx('rank-num', 'ranking-8')}></div>
                        </a>
                    </div>
                    <div className={cx('text-rank-other')}>
                        <h4>Chiwapu</h4>
                        <p>
                        Người ta nói rằng nhiều em trong số chúng vui vẻ và thông minh, thừa hưởng “tính cách tình cảm và trung thành” của Chihuahua và “tính cách rất hòa đồng và điềm tĩnh” của Toy Poodle. Giống chó này rất dễ huấn luyện và được khuyên dùng cho những người lần đầu nuôi thú cưng.
                        </p>
                    </div>
                </div>
                <div className={cx('right-column')}>
                    <div className={cx('img-rank-other')}>
                        <a className={cx('bgi9')} href="https://facebook.com" target="_blank">
                            <div className={cx('rank-num', 'ranking-9')}></div>
                        </a>
                    </div>
                    <div className={cx('text-rank-other')}>
                        <h4>Chiwawa</h4>
                        <p>
                        Chihuahua nổi tiếng là loài chó nhỏ nhất thế giới. Nó có đặc điểm là đôi mắt to, ẩm ướt và lông trang trí trên tai, cổ, tứ chi và đuôi.
                             Trái ngược với vẻ ngoài, nó nhanh nhẹn và tràn đầy năng lượng. Chúng rất tình cảm và trung thành với chủ nhân.。{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ranking;
