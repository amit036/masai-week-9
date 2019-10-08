import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar.js'
import Routes from './components/Route.js'
import SelectLocationCar from './components/SelectLocationCar.js';
class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
          <Navbar/>
          <Routes/>
      </BrowserRouter>
    );
  }
}
export default App;
