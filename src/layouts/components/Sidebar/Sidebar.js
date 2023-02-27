import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { useState } from 'react';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import LoginSidebar from '~/components/LoginSidebar';
import Discover from '~/components/Discover';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    const [checkLogin, setCheckLogin] = useState(false);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            {!checkLogin && <LoginSidebar />}
            <SuggestedAccounts label="Suggested accounts" />
            {checkLogin && <SuggestedAccounts label="Following accounts" />}
            <Discover />
        </aside>
    );
}

export default Sidebar;
