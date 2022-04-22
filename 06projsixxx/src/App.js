import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './composants/Header';
import Navside from './composants/Navside';
import About from './lesvues/About';
import Todolist from './lesvues/Todolist';
import Maison from './lesvues/Maison';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // tester de virer className="App" pour voir comment réagi bootstrap
    <div className="App"> 
      <div className='container-fluid'>
        <div className='row'>
            <BrowserRouter>
            <Header/>
            <Navside/>
              <Routes>
                <Route path='/' element={<Maison/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/todolist' element={<Todolist/>}/>
                <Route path='/*' element={<Maison/>}/>
              </Routes>
            </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;


// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
