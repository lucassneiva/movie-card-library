import React from 'react';

import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieCard />
    </div>
  );
}

export default App;
