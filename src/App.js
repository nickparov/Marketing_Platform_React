import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch} from 'react-router-dom';

import './assets/css/style.css';

const UsersPage = lazy(() => import('./containers/UsersPage/UsersPage'));

class App extends Component {
  render() {
    return (
      <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" render={() => <UsersPage/>}/>
        </Switch>
      </Suspense>
      </div>
    );
  }
}

export default App;
