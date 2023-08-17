// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { dir } from "../store/directionSlice";

// const WordPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const move = () => {
//     navigate('/main');
//     dispatch(dir('left'));
//   };
//   return (
//     <div className="basic-wrapper">
//       <header>
//         <input
//           className="search"
//           type="text"
//           placeholder="단어를 검색해보세요!"
//         ></input>
//         <button className="find_icon">
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </button>
//       </header>
//       <section>
//         <div className="content">
//           {/* <img class="word_img" src="take_aout.jpg"> */}
//           <div className="word_exam_bar">
//             <div className="word_mean_bar">
//               <p className="mean">포장하기</p>
//               <p>라는 뜻이에요</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <footer>
//         <input
//           className="bottom-btn"
//           type="submit"
//           value="뒤로 가기"
//           onClick={() =>move()}
//         ></input>
//       </footer>
//     </div>
//   );
// };

// export default WordPage;

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dir } from "../store/directionSlice";
import { useLocation } from 'react-router-dom';

const WordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //image 바꾸기
  const backgroundImageStyle = {
    backgroundImage: `url(${location.state.image})` // values 객체에서 이미지 URL을 가져와서 배경 이미지로 설정
  };

  const move = () => {
    navigate('/main');
    dispatch(dir('left'));

  };

  const move2 = () => {
    navigate('/search');
    dispatch(dir('right'));

  };

  return (
    <div className="basic-wrapper">
      <header>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <input
          className="search"
          type="text"
          placeholder={location.state.title}
          onClick={() =>move2()}
        ></input>
        <button className="find_icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      </header>

      <section>
      <div className="word_mean_bar" style={{letterSpacing: '3px', color: 'orange', fontSize:'35px'}}>{location.state.title}</div>
      <div class="today-word-image" style={backgroundImageStyle}></div>
        <div className="content">
          {/* <img class="word_img" src="take_aout.jpg"> */}
          {/* <p className="mean">{location.state.title}</p> */}
          <div className="word_exam_bar">
            <div className="word_mean_bar" style={{letterSpacing: '3px'}}>
              <p className="mean_content" >{location.state.content}</p>
              
            </div>
          </div>
        </div>
      </section>
      <footer>
        <input
          className="bottom-btn"
          type="submit"
          value="뒤로 가기"
          onClick={() =>move()}
        ></input>
      </footer>
    </div>
  );
};

export default WordPage;
