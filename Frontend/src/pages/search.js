import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dir } from "../store/directionSlice";
import React, { useState } from 'react';

const SearchPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const move = () => {
        navigate('/word', {
            state: searchResult[0]
        });
        dispatch(dir('right'));
    };

    const move2 = () => {
        navigate('/main');
        dispatch(dir('right'));
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://3.38.116.107:8000/api/search/?q=${searchQuery}`);
            const data = await response.json();
            setSearchResult(data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    console.log(searchQuery[0]);

    return (
        <div className="basic-wrapper">
            <header>
                    <form onSubmit={handleSearch} style={{ flexDirection: "row", display: "flex" }}>
                        <input
                            className="search"
                            type="text"
                            placeholder="단어를 검색해보세요!"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="find_icon" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
            </header>

            <section>
                <div class="content">
                    {searchResult && searchResult.length > 0 ? (
                        <div class="word_box">
                            <input class="word_box"
                                type="submit"
                                value={searchResult[0].title}
                                onClick={() => move()} />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </section>

            <footer>
                <input
                    className="bottom-btn"
                    type="submit"
                    value="뒤로 가기"
                    onClick={() => move2()}
                ></input>
            </footer>
        </div>
    );
};

export default SearchPage;
