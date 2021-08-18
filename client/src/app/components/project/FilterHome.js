import styles from './FilterMovies.module.scss'
import HomeListItem  from './HomeListItem.js';

  const filterHome = ({ data }) => {
    return (
      <ul className={styles.list}>
            { data.results.map(movie => 
            <li key={movie.id}>
              <HomeListItem movie={movie}>

              </HomeListItem>
            </li>)
            }
          </ul>
    
    )
  }
 export default filterHome