import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('loader-container')}>
            <span className={cx('tiktok-loader')}></span>
        </div>
    );
}

export default Loading;
