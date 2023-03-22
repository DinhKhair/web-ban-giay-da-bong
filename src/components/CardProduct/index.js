import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CartContext from '~/components/CartContext';
import { useContext } from 'react';
import styles from '~/components/CardProduct/CardProduct.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardProduct({ currentProducts }) {
    const deleteProduct = (id, e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/products/${id}`);
    };
    const { addCart } = useContext(CartContext);
    return (
        <div className={cx('container-product')}>
            {currentProducts.map((product) => (
                <div key={product.id} className={cx('container-product-item')}>
                    <span
                        onClick={(e) => {
                            deleteProduct(product.id, e);
                        }}
                        className={cx('container-product-item-delete')}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <Link to={cx(`/product/${product.id}`)}>
                        <img className={cx('container-product-item-image')} src={product.image} alt="" />
                    </Link>
                    <Link to={cx(`/product/${product.id}`)} className={cx('container-product-item-name')}>
                        {product.name}
                    </Link>
                    <p className={cx('container-product-item-price')}>
                        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price)}
                    </p>
                    <Link
                        to={cx('/cart')}
                        onClick={() => addCart(product.id, product.image, product.name, product.price)}
                        className={cx('container-product-item-buy')}
                    >
                        Mua ngay
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CardProduct;
