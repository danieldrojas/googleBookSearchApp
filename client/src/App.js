import React, { useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home/Home';
import SearchForm from './containers/SearchForm/SearchForm';
import API from './utils/API';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'


function App() {


  //make sure I can send date from server to front
  // useEffect(() => {

  //   const key = "AIzaSyC50jasZIMiI90vIhXUrCmR3piz8PaXyCI";
  //   const url = "https://www.googleapis.com/books/v1/volumes?q=harry&key="
  //   axios
  //     .get(url + key)
  //     .then((res) => {
  //       console.log(res.data)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // }, [])



  return (
    <div className="App">
      <Router>
        <NavBar />
        <SearchForm />
      </Router>
     
      
    </div>
  );
}

export default App;
