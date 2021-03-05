import './App.css';
import {Button,makeStyles} from '@material-ui/core'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import LandingPage from "./Components/LandingPage/LandingPage"
import AboutPage from './Components/AboutPage/AboutPage'
import Experience from './Components/Experience/Experience'

const useStyles = makeStyles((theme)=>({
  root :{
    minHeight : '100vh',

  }
}));

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        {/* <div className={classes.root}> */}
          <LandingPage/>
          <AboutPage/>
        {/* </div> */}
        <Experience />
      </Router>
    </div>
  );
}

export default App;
