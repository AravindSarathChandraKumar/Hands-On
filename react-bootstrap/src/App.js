import './App.css';
import Home from './Components/Pages/Home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Contact from './Components/Pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
