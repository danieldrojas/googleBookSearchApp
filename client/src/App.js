import React from 'react';
import SearchForm from './containers/SearchForm/SearchForm';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
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
