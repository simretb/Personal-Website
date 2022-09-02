
import Navbar from './components/Navbar/Navbar'
import Home from './Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




function App() {
  return (

    <Router>
      
     <Switch>
        <div className="App">
            <Navbar/>
            <Route path='/home-container' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/myskills' component={Skills}/>
          
            <Footer/>
      </div>
      
      </Switch>

   
    

    </Router>

    
  );
}

export default App;
