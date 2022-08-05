import './App.css';
import Home from './components/Home/Home';
import Create from './components/create/Create';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Edit from './components/Edit/Edit';
function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
