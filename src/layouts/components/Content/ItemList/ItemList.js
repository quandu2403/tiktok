import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './ItemList.module.scss';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as videoServices from '~/services/videoServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Loading from '~/components/Loading';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
const cx = classNames.bind(styles);

function ItemList() {
    const [listVideo, setListVideo] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const convertToShortNumber = (num) =>
        num >= 1e6 ? `${(num / 1e6).toFixed(1)}M` : num >= 1e3 ? `${(num / 1e3).toFixed(1)}K` : num;

    let page = 1;

    useEffect(() => {
        // Fetch initial data
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        // Fetch data from the server

        const newData = await videoServices.list('for-you', page);
        console.log(newData);
        setListVideo((prevData) => [...prevData, ...newData]);

        // Determine whether there is more data to be fetched
        const hasMoreData = true; // replace with your logic
        setHasMore(hasMoreData);
    };

    const handleLoadMore = () => {
        page += page;
        fetchData();
    };

    return (
        <div className={cx('container')}>
            <InfiniteScroll
                dataLength={listVideo.length}
                next={handleLoadMore}
                hasMore={hasMore}
                loader={<Loading />}
                endMessage={<p>No more items to load</p>}
            >
                {listVideo.map((video, index) => (
                    <div key={index} className={cx('list-item')}>
                        <a className={cx('author')} href={`/@${video.user.nickname}`}>
                            <Tippy
                                interactive
                                delay={[500, 0]}
                                offset={[-20, 10]}
                                placement="bottom"
                                render={(attrs) => (
                                    <div tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <AccountPreview data={video.user} />
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <img className={cx('avatar')} src={video.user.avatar} alt="" />
                            </Tippy>
                        </a>

                        <div className={cx('item-info')}>
                            <div className={cx('item-content')}>
                                <a className={cx('author')} href={`/@${video.user.nickname}`}>
                                    <Tippy
                                        interactive
                                        delay={[500, 0]}
                                        offset={[-20, 40]}
                                        placement="bottom"
                                        render={(attrs) => (
                                            <div tabIndex="-1" {...attrs}>
                                                <PopperWrapper>
                                                    <AccountPreview data={video.user} />
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <h3 className={cx('nickname')}>
                                            <strong>{video.user.nickname}</strong>
                                            {video.user.tick && (
                                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                            )}
                                        </h3>
                                    </Tippy>
                                    <h4 className={cx('name')}>{video.user.first_name + ' ' + video.user.last_name}</h4>
                                </a>
                                <Button className={cx('follow-btn')} outline small>
                                    Follow
                                </Button>
                                <div className={cx('title-video')}>
                                    <span className="video-desc">{video.description}</span>
                                    <span className={cx('video-hashtag')}>
                                        <strong>{video.title}</strong>
                                    </span>
                                </div>
                                <h4 className={cx('video-music')}>
                                    <FontAwesomeIcon className={cx('icon-music')} icon={faMusic} />
                                    {video.music}
                                </h4>
                                <div className={cx('video-container')}>
                                    <div className={cx('video-wrapper')}>
                                        <video
                                            className={cx('video-player')}
                                            src={video.file_url}
                                            controls
                                            autoPlay
                                            muted
                                            loop
                                            controlsList="nodownload nofullscreen noremoteplayback"
                                        />
                                    </div>
                                    <div className={cx('action-btn')}>
                                        <div className={cx('like-btn')}>
                                            <Button action>
                                                <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                                            </Button>
                                            <strong className={cx('count')}>
                                                {convertToShortNumber(video.likes_count)}
                                            </strong>
                                        </div>
                                        <div className={cx('comment-btn')}>
                                            <Button action>
                                                <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                            </Button>
                                            <strong className={cx('count')}>
                                                {convertToShortNumber(video.comments_count)}
                                            </strong>
                                        </div>
                                        <div className={cx('share-btn')}>
                                            <Button action>
                                                <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                                            </Button>
                                            <strong className={cx('count')}>
                                                {video.share_count > 0
                                                    ? convertToShortNumber(video.shares_count)
                                                    : 'Share'}
                                            </strong>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default ItemList;
