import {Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Main from './pages/Main';
import Stock from './pages/Stock'

function App() {
  return (
    <div className="App">
    <Nav />
      <Route path="/">
        <Main />
      </Route>

      <Route path="/stock">
        <Stock />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
    </div>
  );
}

export default App;
