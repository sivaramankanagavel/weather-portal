import React from 'react';
import SignIn from './components/SignIn/SignIn.component';
import { Routes, Route } from 'react-router-dom';
import TopNavigation from './components/TopNavigation/TopNavigation.component';
import SignUp from './components/SignUp/SignUp.component';
import Home from './components/Home/Home.component';
import AddCities from './components/AddCities/AddCities.component';

import './app.scss';


function App() {
  return (
    <div className="app">
      <TopNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/add-city' element={<AddCities />} />
      </Routes>
    </div>
  );
}

export default App;
