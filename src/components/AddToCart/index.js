import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '~/components/CartContext';
import styles from './AddToCart.module.scss';

const cx = classNames.bind(styles);

function AddToCart() {
    const { Carts, deleteCart, btnIncrease, btnReduced } = useContext(CartContext);
    const totalPrice = Carts.reduce(function (total, cart) {
        return total + cart.price * cart.quantity;
    }, 0);
    const priceVnd = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(totalPrice);

    return (
        <div className={cx('cart-list')}>
            <div className={cx('cart-list-path')}>
                <Link to={cx('/')} className={cx('cart-list-path-home')}>
                    Trang chủ
                </Link>
                <span className={cx('cart-list-path-space')}>/</span>
                <p className={cx('cart-list-path-name')}>Giỏ hàng</p>
            </div>
            {Carts.map((cart, index) => (
                <div key={index} className={cx('cart-list-item')}>
                    <Link to={cx(`/product/${cart.id}`)}>
                        <img className={cx('cart-list-item-img')} src={cart.image} alt="" />
                    </Link>
                    <Link to={cx(`/product/${cart.id}`)} className={cx('cart-list-item-name')}>
                        {cart.name}
                    </Link>
                    <p className={cx('cart-list-item-price')}>
                        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(cart.price)}
                    </p>
                    <div className={cx('cart-list-item-quantity')}>
                        <button
                            onClick={() => btnReduced(index, cart.id, cart.image, cart.name, cart.price, cart.quantity)}
                            className={cx('cart-list-item-quantity-count')}
                        >
                            -
                        </button>
                        <p className={cx('cart-list-item-quantity-input')}>{cart.quantity}</p>
                        <button
                            onClick={() =>
                                btnIncrease(index, cart.id, cart.image, cart.name, cart.price, cart.quantity)
                            }
                            className={cx('cart-list-item-quantity-count')}
                        >
                            +
                        </button>
                    </div>
                    <button onClick={() => deleteCart(index)} className={cx('cart-list-item-btn-delete')}>
                        Xóa
                    </button>
                </div>
            ))}
            <div className={cx('cart-list-total')}>
                <div className={cx('cart-list-total-title')}>Thành tiền:</div>
                <h3 className={cx('cart-list-total-price')}>{priceVnd}</h3>
            </div>
        </div>
    );
}

export default AddToCart;
