import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
