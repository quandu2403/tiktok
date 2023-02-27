import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const DISCOVER_ITEMS = [
    {
        content: 'suthatla',
        type: 'hastag',
    },
    {
        content: 'ReviewAnNgon',
        type: 'hastag',
    },
    {
        content: 'Thiên Thần Tình Yêu - RICKY STAR',
        type: 'music',
    },
    {
        content: 'genzlife',
        type: 'hastag',
    },
    {
        content: 'Tình Đầy - Huyền Tâm Môn',
        type: 'music',
    },
    {
        content: 'duongvenha',
        type: 'hastag',
    },
    {
        content: 'Animals - Marron 5',
        type: 'hastag',
    },
    {
        content: 'All Of Me - John Legend',
        type: 'music',
    },
];

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('discover-title')}>Discover</p>
            <div className={cx('list-discover')}>
                {DISCOVER_ITEMS.map((item) => (
                    <section>
                        {item.type === 'hastag' ? (
                            <Button
                                className={cx('btn-discover')}
                                rounded
                                small
                                leftIcon={<FontAwesomeIcon icon={faHashtag} />}
                            >
                                <p className={cx('discover-content')}>{item.content}</p>
                            </Button>
                        ) : (
                            <Button
                                className={cx('btn-discover')}
                                rounded
                                small
                                leftIcon={<FontAwesomeIcon icon={faMusic} />}
                            >
                                <p className={cx('discover-content')}> {item.content}</p>
                            </Button>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Discover;
