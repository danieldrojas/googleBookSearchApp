import React from 'react';
import SearchForm from './containers/SearchForm/SearchForm';
import Save from './containers/Save/Save'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={SearchForm} />        
          <Route path="/api/books" component={Save} />   
        </Switch>
      </Router>
    </div>
  );
}

export default App;
