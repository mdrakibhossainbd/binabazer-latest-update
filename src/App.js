import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFount from './components/NotFound/NotFount';
import KrishiBazaar from './components/KrishiBazaar/KrishiBazaar/KrishiBazaar';
import MudiBazar from './components/MudiBazar/MudiBazar/MudiBazar';
import FashionBazar from './components/FashionBazar/FashionBazar/FashionBazar';
import ProductDetails from './components/ProductDetails/ProductDetails/ProductDetails';
import Login from './components/Login/Login/Login';
import Registration from './components/Registration/Registration/Registration';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/krishiBazaar">
          <KrishiBazaar></KrishiBazaar>
        </Route>
        <Route path="/mudiBazaar">
          <MudiBazar></MudiBazar>
        </Route>
        <Route path="/fashionBazaar">
          <FashionBazar></FashionBazar>
        </Route>
        <Route path="/singleProduct/:areaId">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/registration">
          <Registration></Registration>
        </Route>
        <Route path="*">
          <NotFount></NotFount>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
