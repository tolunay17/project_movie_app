import styles from './FilterMovies.module.scss'
import MovieListItem  from './MovieListItem.js';

  const filterMovies = ({ data }) => {
    return (
      <ul className={styles.list}>
            { data.results.map(movie => 
            <li key={movie.id}>
              <MovieListItem movie={movie}>

              </MovieListItem>
            </li>)
            }
          </ul>
    
    )
  }
 export default filterMovies