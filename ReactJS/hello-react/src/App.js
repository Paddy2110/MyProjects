import React,{Component} from 'react';
//import Greet from './components/Greet'
//import PersonDetails from './components/PersonDetails'
//import Wel from './components/Welcome'
import Home from './Route/Home'; 
import About from './Route/About'; 
import Contact from './Route/Contact'; 
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import './App.css';

/*function App() {
  return (
    <div>
      <PersonDetails></PersonDetails>
      
      <Greet name = "Pradeep " surname = "Shrivastava"></Greet>
      <Wel></Wel>    
    </div>
  );
}*/

export class App extends Component 
{
render ()
{
  return (
    <Router>
    <div className = "App"></div>
    <ul> 
      <li> 
        <Link to="/">Home</Link> 
      </li> 
      <li> 
        <Link to="/about">About Us</Link> 
      </li> 
      <li> 
        <Link to="/contact">Contact Us</Link> 
      </li> 
    </ul> 
              <switch>    
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route> 
              <Route exact path='/contact' component={Contact}></Route> 
              </switch>   
    </Router>
  );
}

}

export default App;
