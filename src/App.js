import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage'
import DetailsPage from 'pages/DetailsPage'
import Checkout from 'pages/Checkout'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        {/* paramaeter id untuk nama detailpage */}
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
      </Router>
    </div>
  );
}

export default App;
