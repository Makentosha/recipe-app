import React from 'react';
import './App.css';
import MainContainer from "./layout/MainContainer";
import axios from 'axios';

axios.defaults.baseURL = 'https://www.food2fork.com/api/';

axios.interceptors.response.use((res) => {
  if (res.data.error === 'limit') {
    throw new Error('The limit was past. Change the keys order in the \'src/config/api.js\'');
  }

  return res;
});

function App() {
  return <MainContainer></MainContainer>;
}

export default App;
