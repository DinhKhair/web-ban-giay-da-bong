import { useState, useEffect } from 'react';
import Menu from '~/components/Layout/components/Menu';
import axios from 'axios';
import Pagination from '~/components/Pagination';
import CardProduct from '~/components/CardProduct';

function ProductMizuno() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(18);
    useEffect(() => {
        axios.get('http://localhost:3000/products/?trademark=Mizuno').then((res) => {
            setProducts(res.data);
        });
    }, []);
    const lastCardIndex = currentPage * productsPerPage;
    const firstCardIndex = lastCardIndex - productsPerPage;
    const currentProducts = products.slice(firstCardIndex, lastCardIndex);
    return (
        <div>
            <Menu />
            <CardProduct currentProducts={currentProducts} />
            <Pagination
                totalProducts={products.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
}

export default ProductMizuno;
