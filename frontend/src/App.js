import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';

import Financial from './pages/financial';
import Vehicles from './pages/vehicles';
import BuyNewVehicle from './pages/Buy';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Financial} exact />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/new-vehicle" component={BuyNewVehicle} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
