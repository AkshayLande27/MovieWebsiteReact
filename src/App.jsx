import { useState,useEffect } from 'react'

import './App.css'
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

//apikey- 432f3f45

const API_URL="https://www.omdbapi.com/?apikey=432f3f45"

const movie1={
  "Title": "Spiderman",
  "Year": "2010",
  "imdbID": "tt1785572",
  "Type": "movie",
  "Poster": "N/A"
}


function App() {

  const [movies,setMovies]=useState([]);
   const [searchTerm,setSearchTerm]=useState('');


  const SearchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data =await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    SearchMovies('spiderman');
  },[]);


  return (
    <div className='app'>
      <h1>MovieMania</h1>

      <div className='search'>
        <input type='text' placeholder='Search for movies'  
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}
          
        }
        />
        <img src={searchIcon} alt="Search" 
        onClick={()=>SearchMovies(searchTerm)}/>
      </div>

      {
        movies?.length>0
        ?(
            <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie} />
            ))}
             </div>
        ):
        (
          <div className='empty'>
            <h2>No movies found</h2>
            </div>
        )}

      

    </div>
  );
};

export default App
