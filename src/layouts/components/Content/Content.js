import classNames from 'classnames/bind';
import ItemList from './ItemList';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('main-content')}>
            <ItemList />
        </div>
    );
}

export default Content;
