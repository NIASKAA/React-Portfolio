import './App.css';
import {Navigation, Footer}from './Components'
import {Home, About, Projects, Contact} from './Pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {DiscordBot, Amiibo, PlugSelect, Nutricalifide, TechBlog, RamenShop} from './Pages/Projects'


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/projects/discordbot' component={DiscordBot}/>
            <Route exact path='/projects/nutricalifide' component={Nutricalifide}/>
            <Route exact path='/projects/ramenshop' component={RamenShop}/>
            <Route exact path='/projects/plugselect' component={PlugSelect}/>
            <Route exact path='/projects/techblog' component={TechBlog}/>
            <Route exact path='/projects/amiibo' component={Amiibo}/>
            <Route exact path="/contacts" component={Contact} />
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
