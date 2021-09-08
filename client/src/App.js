import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'; 
import {Route, Switch} from 'react-router-dom'; 
import SearchPage from './pages/search.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={SearchPage}></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;