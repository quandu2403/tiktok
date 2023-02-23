import classNames from 'classnames/bind';
import ItemList from './ItemList';
import styles from './Content.module.scss';
import Modal from '~/components/Modal';
const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('main-content')}>
            <ItemList />
            {/* <Modal /> */}
        </div>
    );
}

export default Content;
