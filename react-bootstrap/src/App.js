import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Pricing from './Components/Pricing';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Banner/>
        <Pricing/>
      </Router>
     
    </div>
  );
}

export default App;
