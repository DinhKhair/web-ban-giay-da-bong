import classNames from 'classnames/bind';
import styles from '~/components/Pagination/Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ totalProducts, productsPerPage, setCurrentPage, currentPage }) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className={cx('pagination')}>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={cx(page === currentPage ? 'active' : '')}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
}

export default Pagination;
