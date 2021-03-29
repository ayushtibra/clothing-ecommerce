import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => <div>Hats Page</div>;

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
