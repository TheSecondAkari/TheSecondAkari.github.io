import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/Mine" component={Mine} /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
