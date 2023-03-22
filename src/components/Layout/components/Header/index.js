import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { faFutbol, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '~/components/CartContext';
import { Link } from 'react-router-dom';
import Search from '~/components/Layout/components/Search';
import MenuMobile from '../MenuMobile';

const cx = classNames.bind(styles);

function Header() {
    const { Carts } = useContext(CartContext);
    return (
        <div className={cx('header-navbar')}>
            <Link to="/" className={cx('header-navbar-logo')}>
                <FontAwesomeIcon className={cx('header-navbar-icon')} icon={faFutbol} />
                Khair
            </Link>
            <Search />
            <div className={cx('header-navbar-item')}>
                <Link to="/cart" className={cx('header-navbar-item-cart')}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className={cx('header-navbar-item-cart-notice')}>{Carts.length}</span>
                </Link>
                <Link to="/upload" className={cx('header-navbar-item-add-product')}>
                    Thêm sản phẩm
                </Link>
                <MenuMobile />
            </div>
        </div>
    );
}

export default Header;
