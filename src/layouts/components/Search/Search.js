import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { ManifyingGlass } from '~/components/Icon/Icon';
import * as searchServices from '~/services/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 800);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounceValue.trim()) {
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounceValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounceValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const renderSearchResult = (attributes) => (
        <div className={cx('search-result')} tabIndex="-1" {...attributes}>
            <PopperWrapper>
                <h3 className={cx('search-title')}>Account</h3>
                {searchResult.map((result) => (
                    <AccountItem key={result.id} data={result} />
                ))}
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={renderSearchResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search account and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-button')} onMouseDown={handleSubmit}>
                        <ManifyingGlass />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
