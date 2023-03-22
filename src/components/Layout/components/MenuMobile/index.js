import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.scss';

const cx = classNames.bind(styles);

function MenuMobile() {
    return (
        <div className={cx('menu-mobile')}>
            <label htmlFor="menu-mobile-input" className={cx('menu-mobile-icon')}>
                <FontAwesomeIcon icon={faBars} />
            </label>
            <input type="checkbox" className={cx('menu-mobile-checkbox')} id="menu-mobile-input" />
            <label htmlFor="menu-mobile-input" className={cx('menu-mobile-overlay')}></label>
            <div className={cx('container-menu-mobile')}>
                <label htmlFor="menu-mobile-input" className={cx('container-menu-mobile-icon-close')}>
                    <FontAwesomeIcon icon={faClose} />
                </label>
                <Link className={cx('container-menu-mobile-item')} to="/nike">
                    Nike
                </Link>
                <Link className={cx('container-menu-mobile-item')} to="/adidas">
                    Adidas
                </Link>
                <Link className={cx('container-menu-mobile-item')} to="/mizuno">
                    Mizuno
                </Link>
                <Link className={cx('container-menu-mobile-item')} to="/puma">
                    Puma
                </Link>
                <Link className={cx('container-menu-mobile-item')} to="/kamito">
                    Kamito
                </Link>
                <Link to="/upload" className={cx('header-navbar-item-add-product')}>
                    Thêm sản phẩm
                </Link>
            </div>
        </div>
    );
}

export default MenuMobile;
