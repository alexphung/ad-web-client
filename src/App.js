import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import ActiveDirectoryDemo from './components/demos/ActiveDirectoryDemo';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Route exact path="/" render={ props => ( 
            <React.Fragment>
              <Header />
            </React.Fragment>
        )} />
      </div>
      <Route path="/activedirectorydemo" component={ActiveDirectoryDemo} />
    </div>
    </Router>
  );
}

export default App;
