import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import * as suggestedAccounts from '~/services/suggestedAccounts';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ label }) {
    const [suggestAccounts, setSuggestAccounts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await suggestedAccounts.list();
            setSuggestAccounts(result);
        };

        fetchApi();
    }, []);
    return (
        <div>
            <div>
                {suggestAccounts.map((account) => (
                    <div key={account.id}>
                        {label === 'Suggested accounts' ? (
                            <Tippy
                                interactive
                                delay={[500, 0]}
                                offset={[-20, 0]}
                                placement="bottom"
                                render={(attrs) => (
                                    <div tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <AccountPreview data={account} />
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('account-item')}>
                                    <img className={cx('avatar')} src={account.avatar} alt="" />
                                    <div className={cx('item-info')}>
                                        <p className={cx('nickname')}>
                                            <strong>{account.nickname}</strong>
                                            {account.tick && (
                                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                            )}
                                        </p>
                                        <p className={cx('name')}>{account.first_name + ' ' + account.last_name}</p>
                                    </div>
                                </div>
                            </Tippy>
                        ) : (
                            <div className={cx('account-item')}>
                                <img className={cx('avatar')} src={account.avatar} alt="" />
                                <div className={cx('item-info')}>
                                    <p className={cx('nickname')}>
                                        <strong>{account.nickname}</strong>
                                        {account.tick && (
                                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                        )}
                                    </p>
                                    <p className={cx('name')}>{account.first_name + ' ' + account.last_name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
