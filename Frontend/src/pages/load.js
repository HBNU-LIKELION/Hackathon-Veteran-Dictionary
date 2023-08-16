import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { dir } from "../store/directionSlice";

const LoadPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const move = () => {
    navigate('/main');
    dispatch(dir('right'));
  };

  return (

      <div className="basic-wrapper screen" onClick={()=>move()}>
        <div className="div">
          <div className="overlap-group">
            <div className="text-wrapper">HBNU</div>
          </div>
          <div className="flexcontainer">
            <div className="text">
              <span className="span">
                노련
                <br />
              </span>
            </div>
            <div className="text">
              <span className="span">
                한🦁
                <br />
              </span>
            </div>
            <div className="text">
              <span className="span">
                {' '}
                <br />
              </span>
            </div>
            <div className="text">
              <span className="span">사전</span>
            </div>
          </div>
        </div>
      </div>

  );
};

export default LoadPage;
