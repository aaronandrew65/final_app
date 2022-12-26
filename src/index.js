import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About'
import Login from './components/Login'
import MovieList from './components/MovieList'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path={'/'}>
          <App />
        </Route>
        <Route path={'/About'}>
          <About />
        </Route>
        <Route path={'/signin'}>
          <Login />
        </Route>
        <Route path={'/movies2watch'}>
          <MovieList />
        </Route>


      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

