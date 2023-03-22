import axios from 'axios';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AddProduct.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AddProduct() {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [trademark, setTrademark] = useState('');

    const addProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/products', {
            image: image,
            name: name,
            price: price,
            trademark: trademark,
        });
        setImage('');
        setName('');
        setPrice('');
        setTrademark('');
    };
    return (
        <div className={cx('add-product')}>
            <div className={cx('add-product-path')}>
                <Link to={cx('/')} className={cx('add-product-path-home')}>
                    Trang chủ
                </Link>
                <span className={cx('add-product-path-space')}>/</span>
                <p className={cx('add-product-path-name')}>Thêm sản phẩm</p>
            </div>
            <div className={cx('add-product-content')}>
                <div className={cx('add-product-item')}>
                    <label className={cx('add-product-item-name')}>Ảnh sản phẩm:</label>
                    <input
                        className={cx('add-product-item-input')}
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className={cx('add-product-item')}>
                    <label className={cx('add-product-item-name')}>Tên sản phẩm:</label>
                    <input
                        className={cx('add-product-item-input')}
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={cx('add-product-item')}>
                    <label className={cx('add-product-item-name')}>Giá sản phẩm:</label>
                    <input
                        className={cx('add-product-item-input')}
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className={cx('add-product-item')}>
                    <label className={cx('add-product-item-name')}>Thương hiệu:</label>
                    <input
                        className={cx('add-product-item-input')}
                        type="text"
                        name="trademark"
                        value={trademark}
                        onChange={(e) => setTrademark(e.target.value)}
                    />
                </div>
                <button onClick={addProduct} className={cx('btn-add')}>
                    Thêm sản phẩm
                </button>
            </div>
        </div>
    );
}

export default AddProduct;
