import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage-component';

import { Switch, Route } from 'react-router-dom';

const HatsPage = () => <div>Hats Page</div>;

function App() {
  return (
    <div className='App'>
      {/* <Switch> */}
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      {/* </Switch> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
