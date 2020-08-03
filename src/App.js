import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './containers/Menu';
import Project from './components/Project';

import RecipeApp from './markdown/recipe-app';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/projects/0'>
            <Project markdown={RecipeApp}></Project>
          </Route>

          <Route path='/' component={Menu}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
