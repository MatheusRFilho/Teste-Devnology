import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';

import Financial from './pages/financial';
import Vehicles from './pages/vehicles';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Financial} exact />
        <Route path="/vehicles" component={Vehicles} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
