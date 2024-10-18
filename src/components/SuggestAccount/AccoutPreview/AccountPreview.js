import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c10a54bac2dcf9c1c1b3f70bdcf6080c~c5_100x100.jpeg?lk3s=a5d48078&nonce=42838&refresh_token=bb89d3b9a3280429165497c22b98d85f&x-expires=1729393200&x-signature=rQ6Nmrfme4vdBqXFsIZChno4%2Bs4%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nickname</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Fullname</p>
                <p className={cx('stats')}>
                    <strong className={cx('value')}>8,2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8,2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
