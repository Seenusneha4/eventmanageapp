import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addevent from './Components/Addevent';
import Searchevent from './Components/Searchevent';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Addevent/>}/>
        <Route path="/search" exact element={<Searchevent/>}/>
        <Route path="/view" exact element={<Addevent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
