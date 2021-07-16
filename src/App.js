import './App.css';
import Navigation from './Components/Navbar/Navbar'
import About from './Pages/About/About';
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Project'
import Contact from './Pages/Contact/Contact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path='/projects' component={Projects}/>
              <Projects/>
            <Route exact path="/contact"/>
              <Contact/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
