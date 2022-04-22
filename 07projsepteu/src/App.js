import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/App.css';
import MenuDuJour from './composants/MenuDuJour';
import Maison from './composants/Maison';
import Contact from './composants/Contact';
import NouvArt from './composants/NouvArt';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  let text = localStorage.getItem("articlesJSON");
  let titotable = JSON.parse(text);
  console.log (titotable);

  const dispatch = useDispatch();
  dispatch({  type: "ARTICLEZ",  payload: titotable  });

  return (
    <BrowserRouter>
      <MenuDuJour/>
      <Routes>
        <Route path='/maison' element={<Maison/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/nouvart' element={<NouvArt/>}/>
        <Route path='/*' element={<Maison/>}/>
      </Routes>
    </BrowserRouter>
)}

export default App;



// enlevé à cause de powershell
  // "eslintConfig": {
  //   "extends": [
  //     "react-app",
  //     "react-app/jest"
  //   ]
  // },
