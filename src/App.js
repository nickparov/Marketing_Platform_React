import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './assets/css/style.css';
import './assets/plugins/themify-icons/themify-icons.css'

import SingleObject from './components/SingleObject/SingleObject';
import PageWrapper from './components/UI/PageWrapper/PageWrapper';

const PartnersPage = lazy(() => import('./containers/PartnersPage/PartnersPage'));
const UsersPage = lazy(() => import('./containers/UsersPage/UsersPage'));

class App extends Component {

  render() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
          <PageWrapper>
            <Switch>
              {/* DIVIDE */}
              {/* ADMIN / PAGES */}
              {/* home/:name  ->  partners/users */}
              <Route path="/objects/:id" exact render={(props) => <SingleObject {...props} />} />
              <Route path="/partners" exact render={(props) => <PartnersPage {...props}/>}/>
              <Route path="/" render={(props) => <UsersPage {...props}/>}/>
            </Switch>
          </PageWrapper>
        </Suspense>
    );
  }
}

export default withRouter(App);
