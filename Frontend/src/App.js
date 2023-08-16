// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import React from 'react';
// import LoadPage from './pages/load';
// import MainPage from './pages/main';
// import WordPage from './pages/word';
// import './css/load.css';
// import './css/main.css';
// import './css/word.css';
// import './css/app.css';

// function App() {
//   const direction = useSelector((state) => {
//     return state.counter.value;
//   });
//   const location = useLocation();

//   return (
//     <div className="background">
//       <TransitionGroup 
//       className={`transitions-wrapper-${direction}`}>
//         <CSSTransition
//           key={location.pathname}
//           classNames={direction}
//           timeout={500}
//         >
//           <Routes location={location}>
//             <Route
//               path="/"
//               element={<LoadPage style={{ position: 'absolute' }} />}
//             />
//             <Route
//               path="/main/"
//               element={<MainPage style={{ position: 'absolute' }} />}
//             />
//             <Route
//               path="/word/"
//               element={<WordPage style={{ position: 'absolute' }} />}
//             />
//           </Routes>
//         </CSSTransition>
//       </TransitionGroup>
//     </div>
//   );
// }

// export default App;


import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import LoadPage from './pages/load';
import MainPage from './pages/main';
import WordPage from './pages/word';
import SearchPage from './pages/search';
import './css/load.css';
import './css/main.css';
import './css/word.css';
import './css/app.css';
import './css/search.css';

function App() {
  const direction = useSelector((state) => {
    return state.counter.value;
  });
  const location = useLocation();

  return (
    <div className="background">
      <TransitionGroup 
      className={`transitions-wrapper-${direction}`}>
        <CSSTransition
          key={location.pathname}
          classNames={direction}
          timeout={500}
        >
          <Routes location={location}>
            <Route
              path="/"
              element={<LoadPage style={{ position: 'absolute' }} />}
            />
            <Route
              path="/main/"
              element={<MainPage style={{ position: 'absolute' }} />}
            />
            <Route
              path="/word/"
              element={<WordPage style={{ position: 'absolute' }} />}
            />
            <Route
              path="/search/"
              element={<SearchPage style={{ position: 'absolute' }} />}
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
