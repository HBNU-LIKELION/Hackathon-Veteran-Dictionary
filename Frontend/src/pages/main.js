// import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { dir } from "../store/directionSlice";

// const MainPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const move = () => {
//     navigate('/word');
//     dispatch(dir('right'));
//   };
//   const move2 = () => {
//     navigate('/search');
//     dispatch(dir('right'));
//   }

//   return (
//     <div className="basic-wrapper">
//       <header>
//         <input class="search" type="text" placeholder="단어를 검색해보세요!" onClick={() =>move2()}></input>
//         <button class="find_icon"><i class="fa-solid fa-magnifying-glass"></i></button>
//     </header>

//     <section>
//         <div class="content">
//             <div class="today-word">오늘의 단어</div>
//             <div class="today-word-image">
//                 <div class="overlay"></div>
//                 <div class="rectangle"></div>
//                 <div class="question-container">
//                     <span class="word-category">테이크 아웃</span>
//                     <span class="word-meaning">이 무슨 말인지</span>
//                 </div>
//             </div>
//         </div>
//         <div class="button-group">
//             <div class="know">알아요</div>
//             <input class="dont-know" type="submit" value="몰라요" onClick={() =>move()}></input>
//         </div>
//     </section>
//     </div>
//   );
// };

// export default MainPage;

import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { dir } from "../store/directionSlice";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MainPage = () => {

  const [values, setValues] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //API연동
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

  //image 바꾸기
  const backgroundImageStyle = {
    backgroundImage: `url(${values.image})` // values 객체에서 이미지 URL을 가져와서 배경 이미지로 설정
  };
  
  const move = () => {
    navigate('/word', {
      state: values
    });
    dispatch(dir('right'));
  };
  
  const move2 = () => {
    navigate('/search');
    dispatch(dir('right'));
  }


  return (
    <div className="basic-wrapper">
      <header>
        <input class="search" type="text" placeholder="단어를 검색해보세요!" onClick={() =>move2()}></input>
        <button class="find_icon"><i class="fa-solid fa-magnifying-glass"></i></button>
    </header>

    <section>
        <div class="content">
            <div class="today-word">단어 퀴즈</div>
            <div class="today-word-image" style={backgroundImageStyle}>
                <div class="overlay"></div>
                <div class="rectangle"></div>
                <div class="question-container">
                    <span class="word-category">
                      {values.title}
                    </span>
                </div>
            </div>
        </div>
        <br></br>
        <div class="button-group">
            <div class="know">알아요</div>
            <input class="dont-know" type="submit" value="몰라요" onClick={() =>move()}></input>
        </div>
    </section>
    </div>
  );
};

export default MainPage;