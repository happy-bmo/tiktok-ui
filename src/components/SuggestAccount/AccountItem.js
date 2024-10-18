import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccoutPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c10a54bac2dcf9c1c1b3f70bdcf6080c~c5_100x100.jpeg?lk3s=a5d48078&nonce=42838&refresh_token=bb89d3b9a3280429165497c22b98d85f&x-expires=1729393200&x-signature=rQ6Nmrfme4vdBqXFsIZChno4%2Bs4%3D&shp=a5d48078&shcp=81f88b70"
                    alt="..."
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>nickname</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>

                    <p className={cx('name')}>Fullname</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
