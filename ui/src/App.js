import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home.js'
import Viewsheets from './Components/Viewsheets.js'
import Editsheets from './Components/Editsheets'
import Upload from './Components/Upload'
import './App.css';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home/>  
        </Route>
        <Route path='/Viewsheets'>
          <Viewsheets/>
        </Route>
        <Route path='/Editsheets'>
          <Editsheets/>
        </Route>
        <Route path='/Upload'>
          <Upload/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
