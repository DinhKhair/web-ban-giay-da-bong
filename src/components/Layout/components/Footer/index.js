import classNames from 'classnames/bind';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-icon')}>
                <a
                    href="https://www.facebook.com/profile.php?id=100010554797773&mibextid=ZbWKwL"
                    className={cx('footer-icon-facebook')}
                >
                    <FaFacebook />
                </a>
                <div className={cx('footer-icon-github')}>
                    <FaGithub />
                </div>
            </div>
            <h4 className={cx('footer-title')}>Giày đẹp</h4>
        </div>
    );
}

export default Footer;
