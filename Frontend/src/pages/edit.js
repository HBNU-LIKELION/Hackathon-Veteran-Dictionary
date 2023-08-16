import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dir } from "../store/directionSlice";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPage = () => {
    const [values, setValues] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // 추가: 검색어 상태 변수
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://3.38.116.107:8000/api/random-word/');
                setValues(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = async () => {
        if (searchTerm) {
            try {
                const response = await axios.get(`http://3.38.116.107:8000/api/search/?q=${searchTerm}`);
                setSearchTerm(response.data)
            } catch (error) {
                console.error('Error fetching search data:', error);
            }
        }
    };

    const move = () => {
        navigate('/main');
        dispatch(dir('left'));
    };

    const move2 = () => {
        navigate('/word');
        dispatch(dir('right'));
    };

    return (
        <div className="basic-wrapper">
            <header>
                <input
                    className="search"
                    type="text"
                    placeholder="단어를 검색해보세요!"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // 검색어 입력을 처리
                ></input>
                <button className="find_icon" onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </header>

            <section>
                <div className="content"> {/* class 대신 className 사용 */}
                    <div className="word_box"> {/* class 대신 className 사용 */}
                        <input className="word_box" type="submit" value="블루투스" onClick={() => move2()}></input>
                    </div>
                </div>
            </section>

            <footer>
                <input
                    className="bottom-btn"
                    type="submit"
                    value="뒤로 가기"
                    onClick={() => move()}
                ></input>
            </footer>
        </div>
    );
};

export default SearchPage;
