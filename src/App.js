import React from 'react';
import Login from './components/Login/Login';
import { Switch, Route } from 'react-router-dom';
import User from './components/Protected/User';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
