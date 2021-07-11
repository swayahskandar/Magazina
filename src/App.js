import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Continue from './pages/Continue';

// import nousContact from './pages/nouContact';
import { MovieDesc } from "./Components copy/MovieDescription/MovieDesc";
import { moviesData } from "./Components copy/Moviesdata";
import MovieApp from "./pages/MovieApp";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signed' component={Continue} exact /> 
        <Route
        exact
        path="/movies"
        render={() => (
          <MovieApp moviesList={moviesList} setMoviesList={setMoviesList} />
        )}
      />

      <Route
        
        path="/description/:movieId"
        render={(props) => <MovieDesc moviesList={moviesList} {...props} />}
        exact/>
       {/* <Route path='/contact' component={nousContact} exact />  */}
      </Switch>
   
    </Router>
    
  );
}

export default App;
