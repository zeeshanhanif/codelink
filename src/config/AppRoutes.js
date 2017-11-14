import React from 'react'
import {
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
    <Route exact path="/" component={Home} />

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