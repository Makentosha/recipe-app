import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './App.css';
import MainContainer from './layout/MainContainer';
import {Switch} from 'react-router';

axios.defaults.baseURL = 'https://www.food2fork.com/api/';

axios.interceptors.response.use((res) => {
  if (res.data.error === 'limit') {
    throw new Error('The limit was past. Change the keys order in the \'src/config/api.js\'');
  }

  return res;
});

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:selected' component={MainContainer}/>
        <Redirect from='/' to='/search'/>
      </Switch>
    </BrowserRouter>);
}

export default App;
