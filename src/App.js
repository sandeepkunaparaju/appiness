import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css'; 
import SignIn from './_components/SignIn';
import Dashboard from './_components/Dashboard';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {history} from './_helpers/history';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
