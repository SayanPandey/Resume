import './App.css';
import {Button} from '@material-ui/core'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import LandingPage from "./Components/LandingPage/LandingPage"
import AboutPage from './Components/AboutPage/AboutPage'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <LandingPage/>
        <AboutPage/>
      </Router>
    </div>
  );
}

export default App;
