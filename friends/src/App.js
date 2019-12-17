import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>My Friends</Link>
        </div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/friends' component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;