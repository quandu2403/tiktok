import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Modal from '~/components/Modal';
import styles from './LoginSidebar.module.scss';
import Button from '../Button';
const cx = classNames.bind(styles);

function LoginSidebar() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('login-content')}>Log in to follow creators, like videos, and view comments.</p>
            <Button className={cx('login-btn')} outline large onClick={() => setOpenModal(true)}>
                Log In
            </Button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
    );
}

export default LoginSidebar;
