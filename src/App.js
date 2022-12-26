import './App.css';
import React, {useEffect, useState} from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import { NavBar } from './components/NavBar';
// import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const API_URL = 'https://www.omdbapi.com?apikey=56163937';


const App = () => {
  const [movies, setMoives] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMoives(data.Search)
  }

  useEffect(() => {
    searchMovies('Star Wars')
  }, []);

  return (
    <>
      <NavBar />
      <div className='app'>
          <h1><Link to={'/'}>Montoya's Movie Mania</Link></h1>
        <div className='search'>
          <input placeholder='Search For Movies' value={searchTerm} onChange= {(e) => setSearchTerm(e.target.value)} />
          <img src={SearchIcon} alt ='search' onClick={() => searchMovies(searchTerm)} />
        </div>
        {
          movies?.length > 0 ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found!</h2>
            </div>
          )}
      </div>
    </>
  );
}

export default App;
