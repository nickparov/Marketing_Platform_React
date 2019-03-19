import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch} from 'react-router-dom';

import './assets/css/style.css';

import Wrapper from './containers/Wrapper/Wrapper';

const PartnersPage = lazy(() => import('./containers/PartnersPage/PartnersPage'));
const UsersPage = lazy(() => import('./containers/UsersPage/UsersPage'));

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/partners" exact render={(props) => <PartnersPage {...props}/>}/>
            <Route path="/" render={(props) => <UsersPage {...props}/>}/>
          </Switch>
        </Suspense>
      </Wrapper>
    );
  }
}

export default App;
