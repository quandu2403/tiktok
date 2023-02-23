import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import Button from '~/components/Button';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLine, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Modal({ open, onClose }) {
    if (!open) return null;
    return createPortal(
        <div className={cx('dialog-modal-background')}>
            <div className={cx('overlay')}></div>
            <div className={cx('dialog-modal')}>
                <div className={cx('close-icon')} onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('dialog-modal-header')}>
                    <h2>Log in to TikTok</h2>
                </div>
                <div className={cx('dialog-modal-body')}>
                    <div className={cx('dialog-modal-content')}>
                        <Button outlinesolid leftIcon={<FontAwesomeIcon icon={faQrcode} />} large>
                            <p>Use QR code</p>
                        </Button>
                        <Button outlinesolid leftIcon={<FontAwesomeIcon icon={faUser} />} large>
                            <p>Use phone / email / username</p>
                        </Button>

                        <Button outlinesolid leftIcon={<FontAwesomeIcon icon={faFacebook} />} large>
                            <p>Continue with Facebook</p>
                        </Button>
                        <Button outlinesolid leftIcon={<FontAwesomeIcon icon={faGoogle} />} large>
                            <p>Continue with Google</p>
                        </Button>
                        <Button outlinesolid leftIcon={<FontAwesomeIcon icon={faTwitter} />} large>
                            <p>Continue with Twitter</p>
                        </Button>
                        <Button outlinesolid leftIcon={<FontAwesomeIcon icon={faLine} />} large>
                            <p>Continue with LINE</p>
                        </Button>
                    </div>
                </div>
                <div className={cx('dialog-modal-footer')}>
                    <p>Don’t have an account?</p>&nbsp;
                    <a href="/"> Sign up</a>
                </div>
            </div>
        </div>,
        document.getElementById('modal'),
    );
}

export default Modal;
