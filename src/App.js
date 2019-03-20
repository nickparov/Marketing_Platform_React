import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch} from 'react-router-dom';

import './assets/css/style.css';
import './assets/plugins/themify-icons/themify-icons.css'

import PageWrapper from './containers/PageWrapper/PageWrapper';

const PartnersPage = lazy(() => import('./containers/PartnersPage/PartnersPage'));
const UsersPage = lazy(() => import('./containers/UsersPage/UsersPage'));

class App extends Component {

  render() {
    return (
      <PageWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/partners" exact render={(props) => <PartnersPage {...props}/>}/>
            <Route path="/" render={(props) => <UsersPage {...props}/>}/>
          </Switch>
        </Suspense>
      </PageWrapper>
    );
  }
}

export default App;
