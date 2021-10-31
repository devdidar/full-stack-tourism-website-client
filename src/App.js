import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Trips from './Pages/Home/Trips/Trips';
import AuthProvider from './Pages/context/AuthProvider';
import Login from './Pages/Home/Login/Login/Login';
import TripDetails from './Pages/Home/TripDetails/TripDetails';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/Home/MyOrders/MyOrders';
import ManageOrders from './Pages/Home/ManageOrders/ManageOrders';
import AddATrip from './Pages/Home/AddATrip/AddATrip';
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/trips'>
            <Trips></Trips>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute  path='/tripDetails/:id'>
            <TripDetails></TripDetails>
          </PrivateRoute>
          <PrivateRoute  path='/myOrders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute  path='/manageOrders'>
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute  path='/addATrip'>
            <AddATrip></AddATrip>
          </PrivateRoute>
          <Route  path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
