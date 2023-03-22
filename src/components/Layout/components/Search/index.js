import classNames from 'classnames/bind';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);

function Search() {
    const [valueSearch, setValueSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [currentSearch] = useState(1);
    const [productsPerSearch] = useState(5);
    const [showResult, setShowResult] = useState(true);

    const debouncedValue = useDebounce(valueSearch, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchData([]);
            return;
        }
        axios
            .get('http://localhost:3000/products', {
                params: {
                    q: debouncedValue,
                },
            })
            .then((res) => {
                setSearchData(res.data);
            });
    }, [debouncedValue]);

    const lastCardIndex = currentSearch * productsPerSearch;
    const firstCardIndex = lastCardIndex - productsPerSearch;
    const currenSearchData = searchData.slice(firstCardIndex, lastCardIndex);

    return (
        <div className={cx('header-navbar-search')}>
            <div className={cx('header-navbar-search-item')}>
                <Tippy
                    interactive={true}
                    visible={showResult && searchData.length > 0}
                    render={(attrs) => (
                        <div className={cx('header-navbar-search-result')} tabIndex="-1" {...attrs}>
                            <h5 className={cx('header-navbar-search-result-title')}>Kết quả tìm kiếm</h5>
                            {currenSearchData.map((data) => {
                                return (
                                    <div key={data.id} className={cx('header-navbar-search-result-item')}>
                                        <Link to={cx(`/product/${data.id}`)} onClick={() => setValueSearch('')}>
                                            <img
                                                className={cx('header-navbar-search-result-item-image')}
                                                src={data.image}
                                                alt=""
                                            />
                                        </Link>
                                        <Link
                                            to={cx(`/product/${data.id}`)}
                                            className={cx('header-navbar-search-result-item-name')}
                                            onClick={() => setValueSearch('')}
                                        >
                                            {data.name}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    onClickOutside={() => setShowResult(false)}
                >
                    <input
                        className={cx('header-navbar-search-item-input')}
                        placeholder={'search...'}
                        value={valueSearch}
                        onChange={(e) => setValueSearch(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                </Tippy>
                <span className={cx('header-navbar-search-item-icon')}>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
        </div>
    );
}

export default Search;
