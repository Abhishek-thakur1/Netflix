import Home from './pages/home/Home'
import Watch from './pages/watch/watch.jsx'
import Register from './pages/register/register'
import Login from './pages/login/login.jsx'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const user = true
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/movies">
            <Home type="movies"/>
          </Route>
          <Route path="/series">
            <Home type="series"/>
          </Route>
          <Route path="/watch">
            <Watch/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
