import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './ItemList.module.scss';
import Button from '~/components/Button';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as videoServices from '~/services/videoServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function ItemList() {
    const [listVideo, setListVideo] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const convertToShortNumber = (num) =>
        num >= 1e6 ? `${(num / 1e6).toFixed(1)}M` : num >= 1e3 ? `${(num / 1e3).toFixed(1)}K` : num;

    useEffect(() => {
        // Fetch initial data
        fetchData();
    }, []);

    const fetchData = async () => {
        // Fetch data from the server
        const newData = await videoServices.list();
        setListVideo((prevData) => [...prevData, ...newData]);

        // Determine whether there is more data to be fetched
        const hasMoreData = true; // replace with your logic
        setHasMore(hasMoreData);
    };

    const handleLoadMore = () => {
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
                        <img className={cx('avatar')} src={video.author.avatar} alt="" />
                        <div className={cx('item-info')}>
                            <div className={cx('item-content')}>
                                <a className={cx('authour')} href={`/@${video.author.unique_id}`}>
                                    <h3 className={cx('nickname')}>
                                        <strong>{video.author.nickname}</strong>
                                        {/* {account.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />} */}
                                    </h3>
                                    <h4 className={cx('name')}>{video.author.unique_id}</h4>
                                </a>
                                <Button className={cx('follow-btn')} outline small>
                                    Follow
                                </Button>
                                <div className={cx('title-video')}>
                                    {/* <span className="video-desc">test </span> */}
                                    <span className={cx('video-hashtag')}>
                                        <strong>{video.title}</strong>
                                    </span>
                                </div>
                                <h4 className="video-music">{video.music_info.title}</h4>
                                <div className={cx('video-container')}>
                                    <div className={cx('video-wrapper')}>
                                        <video
                                            className={cx('video-player')}
                                            src={video.wmplay}
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
                                                {convertToShortNumber(video.digg_count)}
                                            </strong>
                                        </div>
                                        <div className={cx('comment-btn')}>
                                            <Button action>
                                                <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                            </Button>
                                            <strong className={cx('count')}>
                                                {convertToShortNumber(video.comment_count)}
                                            </strong>
                                        </div>
                                        <div className={cx('share-btn')}>
                                            <Button action>
                                                <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                                            </Button>
                                            <strong className={cx('count')}>
                                                {video.share_count > 0
                                                    ? convertToShortNumber(video.share_count)
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
