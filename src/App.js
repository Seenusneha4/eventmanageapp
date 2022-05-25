import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addevent from './Components/Addevent';
import Searchevent from './Components/Searchevent';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header/>
      <Addevent/>
      <Searchevent/>
    </div>
  );
}

export default App;
