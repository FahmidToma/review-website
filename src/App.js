
import './App.css';
import { ButtonGroup ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/header';
import Home from './Components/Home/home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Components/Services/services';
import About from './Components/About/about';
import Notfound from './Components/Notfound/notfound';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';



function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path='/home'>
      <Home></Home>
      </Route>
      <Route exact path='/services'>
        <Services></Services>
      </Route>
      <Route exact path='/aboutus'>
        <About></About>
      </Route>
      <Route exact path='/contact'>
        <Contact></Contact>
      </Route>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route exact path='/*'>
        <Notfound></Notfound>
      </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
      
     
  
    </div>
  );
}

export default App;
