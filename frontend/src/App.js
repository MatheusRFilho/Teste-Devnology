import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
