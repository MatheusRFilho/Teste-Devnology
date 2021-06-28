import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';

import Financial from './pages/financial';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Financial} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
