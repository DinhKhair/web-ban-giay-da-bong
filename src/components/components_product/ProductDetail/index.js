import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import CartContext from '~/components/CartContext';
import styles from './ProductDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faRotate, faSocks, faTruckFast } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const productDetailApi = async () => {
            const res = await axios.get(`http://localhost:3000/products/${id}`);
            setProduct(res.data);
        };
        productDetailApi();
    }, [id]);
    const { addCart } = useContext(CartContext);
    const priceVnd = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price);
    return (
        <div className={cx('product-detail-wrapper')}>
            <div className={cx('product-detail-path')}>
                <Link to={cx('/')} className={cx('product-detail-path-home')}>
                    Trang chủ
                </Link>
                <span className={cx('product-detail-path-space')}>/</span>
                <p className={cx('product-detail-path-name')}>Chi tiết sản phẩm</p>
            </div>
            <div className={cx('product-detail')}>
                <img className={cx('product-detail-image')} src={product.image} alt="" />
                <div className={cx('product-detail-content')}>
                    <h2 className={cx('product-detail-name')}>{product.name}</h2>
                    <h2 className={cx('product-detail-price')}>{priceVnd}</h2>
                    <h5 className={cx('product-detail-trademark')}>Thương hiệu: {product.trademark}</h5>
                    <h4 className={cx('product-detail-size-title')}>Chọn Size:</h4>
                    <ul className={cx('product-detail-list-size')}>
                        <li className={cx('product-detail-list-size-number')}>37</li>
                        <li className={cx('product-detail-list-size-number')}>38</li>
                        <li className={cx('product-detail-list-size-number')}>39</li>
                        <li className={cx('product-detail-list-size-number')}>40</li>
                        <li className={cx('product-detail-list-size-number')}>41</li>
                    </ul>
                    <div className={cx('product-detail-btn')}>
                        <Link
                            to={cx('/cart')}
                            onClick={() => addCart(product.id, product.image, product.name, product.price)}
                            className={cx('product-detail-btn-buy')}
                        >
                            MUA NGAY
                        </Link>
                        <button
                            onClick={() => addCart(product.id, product.image, product.name, product.price)}
                            className={cx('product-detail-btn-add-cart')}
                        >
                            THÊM VÀO GIỎ HÀNG
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('product-detail-policy')}>
                <div className={cx('product-detail-policy-item')}>
                    <div className={cx('product-detail-policy-item-icon')}>
                        <FontAwesomeIcon icon={faSocks} />
                    </div>
                    <div className={cx('product-detail-policy-item-content')}>
                        <h4 className={cx('product-detail-policy-item-title')}>ƯU ĐÃI TẶNG KÈM</h4>
                        <p className={cx('product-detail-policy-item-description')}>
                            Tặng kèm vớ dệt kim cho mỗi đơn hàng Giày đá bóng trên 1 triệu.
                        </p>
                    </div>
                </div>
                <div className={cx('product-detail-policy-item')}>
                    <div className={cx('product-detail-policy-item-icon')}>
                        <FontAwesomeIcon icon={faRotate} />
                    </div>
                    <div className={cx('product-detail-policy-item-content')}>
                        <h4 className={cx('product-detail-policy-item-title')}>ĐỔI HÀNG DỄ DÀNG</h4>
                        <p className={cx('product-detail-policy-item-description')}>
                            Hỗ trợ khách hàng đổi size hoặc mẫu trong vong 7 ngày.
                        </p>
                    </div>
                </div>
                <div className={cx('product-detail-policy-item')}>
                    <div className={cx('product-detail-policy-item-icon')}>
                        <FontAwesomeIcon icon={faTruckFast} />
                    </div>
                    <div className={cx('product-detail-policy-item-content')}>
                        <h4 className={cx('product-detail-policy-item-title')}>CHÍNH SÁCH GIAO HÀNG</h4>
                        <p className={cx('product-detail-policy-item-description')}>
                            COD Toàn quốc | Freeship khi khách hàng thanh toán chuyển khoản trước với đơn hàng.
                        </p>
                    </div>
                </div>
                <div className={cx('product-detail-policy-item')}>
                    <div className={cx('product-detail-policy-item-icon')}>
                        <FontAwesomeIcon icon={faCreditCard} />
                    </div>
                    <div className={cx('product-detail-policy-item-content')}>
                        <h4 className={cx('product-detail-policy-item-title')}>THANH TOÁN TIỆN LỢI</h4>
                        <p className={cx('product-detail-policy-item-description')}>
                            Chấp nhận các loại hình thanh toán bằng thẻ, tiền mặt, chuyển khoản.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
