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
                        小型犬No.1といわれるほど知能が高いことで知られています。とにかくフレンドリーで明るい性格をしており、飼い主さんだけでなく、初めて会う人や小さな子供まで誰に対しても人懐っこく、優しく接することができます。抜け毛や体臭も少なく、比較的お世話も手が掛からないことから、初めてペットをお迎えする方にぴったりです。またバッグに入れての移動も容易なため、カフェや旅行など色々な場所に一緒にお出かけしたい、という方におすすめです。
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
                            ふさふさの毛と可愛らしい表情をもつ豆柴。柴犬のイメージ通り、飼い主さんに忠実でとっても懐きやすいことで知られています。また、日本犬なので四季の変化にも強く、小さめのサイズながら骨格はしっかりとしていて健康的な子が多いです。
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
                            一瞬で家族を和ませるようなおどけた表情が魅力的なフレンチブルドッグ。いつの間にか飼い主さんに寄り添ってうたた寝をするような、とっても穏やかでマイペースな子が多いです。人懐っこくおとなしい性格をしているので、初めてペットをお迎えする方にもおすすめです。
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
                            トイプードルの「賢く甘えん坊な性格」と、マルチーズの「大人しく人懐こい性格」を受け継いだ穏やかな性格の子が多いです。遊んでいるときなどは元気いっぱいでやんちゃな一面も見せてくれますが、家族思いで温厚な子が多いです。{' '}
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
                            ふさふさの毛と可愛らしい表情をもつ豆柴。柴犬のイメージ通り、飼い主さんに忠実でとっても懐きやすいことで知られています。また、日本犬なので四季の変化にも強く、小さめのサイズながら骨格はしっかりとしていて健康的な子が多いです。
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
                            短い足でちょこちょこ歩く姿がかわいいカニヘンダックスフンド。とても陽気で人懐こい性格をしています。小柄な身体ながら、非常にエネルギッシュで遊ぶことが大好きなので、お子様の遊び相手にもぴったりです。
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
                            チワワの「愛情深く忠実な性格」と、トイプードルの「社交性が高く、落ち着いた性格」を受け継いだ、陽気で賢い子が多いといわれています。非常にしつけがしやすく、初めてペットを飼う方におすすめの犬種です。
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
                            世界で一番小さい犬として有名なチワワ。うるんだ大きな瞳と、耳・首・四肢・尾の飾り毛が特徴です。
                            見かけに反して動きが機敏で、とにかく元気いっぱい。とても愛情深く、飼い主さんに対して忠誠を尽くすタイプです。{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ranking;
