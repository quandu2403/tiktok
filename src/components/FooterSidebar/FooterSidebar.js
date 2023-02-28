import classNames from 'classnames/bind';
import styles from './FooterSidebar.module.scss';

const cx = classNames.bind(styles);
const LIST_ITEMS = [
    {
        tittle: 'About',
        type: 1,
    },
    {
        tittle: 'Newsroom',
        type: 1,
    },
    {
        tittle: 'Contact',
        type: 1,
    },
    {
        tittle: 'Careers',
        type: 1,
    },
    {
        tittle: 'ByteDance',
        type: 1,
    },
    {
        tittle: 'TikTok for Good',
        type: 2,
    },
    {
        tittle: 'Advertise',
        type: 2,
    },
    {
        tittle: 'Developers',
        type: 2,
    },
    {
        tittle: 'Transparency',
        type: 2,
    },
    {
        tittle: 'TikTok Browse',
        type: 2,
    },
    {
        tittle: 'TikTok Embeds',
        type: 2,
    },
    {
        tittle: 'Help',
        type: 3,
    },
    {
        tittle: 'Safety',
        type: 3,
    },
    {
        tittle: 'Terms',
        type: 3,
    },
    {
        tittle: 'Privacy',
        type: 3,
    },
    {
        tittle: 'Creator Portal',
        type: 3,
    },
    {
        tittle: 'Community Guidelines',
        type: 3,
    },
];
function FooterSidebar() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('sidebar-link-list')}>
                {LIST_ITEMS.map((item) => (
                    <>
                        {item.type === 1 && (
                            <a className={cx('sidebar-link-item')} href="/tiktok#">
                                {item.tittle}
                            </a>
                        )}
                    </>
                ))}
            </p>

            <p className={cx('sidebar-link-list')}>
                {LIST_ITEMS.map((item) => (
                    <>
                        {item.type === 2 && (
                            <a className={cx('sidebar-link-item')} href="/tiktok#">
                                {item.tittle}
                            </a>
                        )}
                    </>
                ))}
            </p>

            <p className={cx('sidebar-link-list')}>
                {LIST_ITEMS.map((item) => (
                    <>
                        {item.type === 3 && (
                            <a className={cx('sidebar-link-item')} href="/tiktok#">
                                {item.tittle}
                            </a>
                        )}
                    </>
                ))}
            </p>

            <span className={cx('coppyright')}>© 2023 TikTok</span>
        </div>
    );
}

export default FooterSidebar;
