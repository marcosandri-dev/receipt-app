import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';

export interface AppProps {

}

const App: React.FC<AppProps> = () => (

  <div className="App">
    <Header />
    <Switch>
      <Route path="/about">
        About me
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
);

export default App;
