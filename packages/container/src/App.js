import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));
import Header from './components/Header';
import { Progress } from './components/Progress';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ca',
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path="/auth" >
                <AuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard" >
                {isSignedIn ? <DashboardApp /> : <Redirect to="/" />}
              </Route>
              <Route path="/">
                 <MarketingApp />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
