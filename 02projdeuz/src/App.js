import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {userState} from 'react';
import './App.css';
import About from './lesvues/About';
import Maison from './lesvues/Maison';
// import Banana from './composants/Banana/Banana';
// import Navigation from './composants/Navigation/Navigation';
// import PiedPage from './lesvues/PiedPage/PiedPage';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const [cady, updateCady] = userState([]);

  return (
    <div className="App">
      {/* <Banana/>
      <Navigation cady={cady} updateCady = {updateCady}/>
      <PiedPage/> */}

      <Maison/>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maison/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>

      </BrowserRouter> */}
    </div>
  );
}

export default App;
