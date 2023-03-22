import { useState, useEffect } from 'react';
// import classNames from 'classnames/bind';
import Menu from '~/components/Layout/components/Menu';
import axios from 'axios';
import CardProduct from '~/components/CardProduct';
import Pagination from '~/components/Pagination';
// const cx = classNames.bind();

function ProductHome() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(18);
    useEffect(() => {
        axios.get('http://localhost:3000/products').then((res) => {
            setProducts(res.data);
        });
    }, [products]);

    const lastCardIndex = currentPage * productsPerPage;
    const firstCardIndex = lastCardIndex - productsPerPage;
    const currentProducts = products.slice(firstCardIndex, lastCardIndex);
    return (
        <div>
            <Menu />
            <CardProduct currentProducts={currentProducts} products={products} />
            <Pagination
                totalProducts={products.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
}

export default ProductHome;
