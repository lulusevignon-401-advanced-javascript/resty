import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import Help from './Help.js';
import History from './History.js';

const Main = props =>{

  return(
    <main>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        

      </Switch>
    </main>
  )
}

export default Main;