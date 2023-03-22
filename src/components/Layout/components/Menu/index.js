import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('container-menu')}>
            <Link className={cx('container-menu-item')} to="/nike">
                Nike
            </Link>
            <Link className={cx('container-menu-item')} to="/adidas">
                Adidas
            </Link>
            <Link className={cx('container-menu-item')} to="/mizuno">
                Mizuno
            </Link>
            <Link className={cx('container-menu-item')} to="/puma">
                Puma
            </Link>
            <Link className={cx('container-menu-item')} to="/kamito">
                Kamito
            </Link>
        </div>
    );
}

export default Menu;
