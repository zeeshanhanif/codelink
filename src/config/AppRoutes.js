import React from 'react'
import {
  HashRouter,
  BrowserRouter,
  Route
} from 'react-router-dom'

import {
  App,
  Home
} from './../components/index';

const ParentApp = () => (
  <div>
    <App />

    {/* App routing goes here!! */}
      <Route exact path="/codelink" component={Home} />
    {/* <Route path="/codelink">
    </Route> */}

  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={ParentApp} />
    </BrowserRouter>
  )
};

export default AppRoutes;