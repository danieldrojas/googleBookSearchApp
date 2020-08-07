import React, { useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home/Home';
import SearchForm from './containers/SearchForm/SearchForm';



function App() {

  useEffect(() => {
    axios
      .get("/api/config")
      .then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])



  return (
    <div className="App">
      <Home />
      <SearchForm />
    </div>
  );
}

export default App;
