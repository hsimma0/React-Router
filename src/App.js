import {Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Main from './pages/Main';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import stocks from './stock-data';

function App() {
  return (
    <div className="App">
    <Nav />
    <Switch>
    <Route exact path="/">
        <Main />
      </Route>

      <Route exact path="/stock"
        render={(routerProps) => <Dashboard stockInfo={stocks} {...routerProps}/>}>
      </Route>

      <Route  path="/stock/:symbol"
      render={(routerProps) => <Stock stockInfo={stocks} {...routerProps}/>}>
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
