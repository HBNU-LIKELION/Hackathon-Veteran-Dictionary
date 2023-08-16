import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dir } from "../store/directionSlice";

const SearchPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                ></input>
                <button className="find_icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </header>

            <section>
                <div class="content">
                    <div class="word_box">
                        <input class="word_box" type="submit" value="블루투스" onClick={() => move2()}></input>
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
