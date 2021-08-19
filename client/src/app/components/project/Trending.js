import styles from './FilterMovies.module.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Trending = () => {
  
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=e98128cef7b0c7ec91cd68220f6435a1`)
      .then(response => setArray(response.data.results));
    }, []);
  
  return (
    
    <section>
      <h1>Trending</h1>
      <ul className={styles.list}>
        {
          array.map(film =>
            <li key={film.id}>
              {film.title && 
                <>
                  <Link to={`/movies/${film.id}`}><img src= {`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title}/></ Link>
                    <p>
                      <Link style={{textDecoration: 'none' , color: 'black', fontWeight: 'bold'}} to={`/movies/${film.id}`}>{film.title}</Link>
                    </p>
                    <p>{film.vote_average}</p>
                </>
              }
            </li>
          )
        }
      </ul>
    </section>
  )
}

export default Trending