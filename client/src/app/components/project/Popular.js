import styles from './FilterMovies.module.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Popular = () => {
  
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=e98128cef7b0c7ec91cd68220f6435a1&language=en-US&page=1`)
      .then(response => setArray(response.data.results));
    }, []);
  
  return (
    
    <section>
      <h1>Popular</h1>
      <ul className={styles.list}>
        {
          array.map(f =>
            <li key={f.id}>
              {f.title && 
                <>
                  <Link to={`/movies/${f.id}`}><img src= {`https://image.tmdb.org/t/p/original/${f.poster_path}`} alt={f.title}/></ Link>
                  <div>
                    <p>
                      <Link to={`/movies/${f.id}`}>{f.title}</Link>
                    </p>
                  </div>
                </>
              }
              {f.name && 
                <>
                  <Link to={`/series/${f.id}`}><img src= {`https://image.tmdb.org/t/p/original/${f.poster_path}`} alt={f.name}/></ Link>
                  <div>
                    <p>
                      <Link style={{textDecoration: 'none' , color: 'black', fontWeight: 'bold'}} to={`/series/${f.id}`}>{f.name}</Link>
                    </p>
                  </div>
                </>
              }
              <p><span>{f.vote_average}</span></p>
            </li>
          )
        }
      </ul>
    </section>
  )
}

export default Popular