import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Switch } from 'wouter';
import './index.css';

import App from './App.jsx';
import AuthPage from './pages/auth-page.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/auth" component={AuthPage} />
      <Route>404: Page not found</Route>
    </Switch>
  </StrictMode>
);