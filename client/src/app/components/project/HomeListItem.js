import { Link } from 'react-router-dom';
import * as Routes from '../../routes'
import styles from './ProjectDetails.module.scss';


const HomeListItem = ({ movie }) => {
  return (
    <article className={styles.MovieListEach}>     
    <Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>
      <picture className={styles.picture}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      </picture>
      </Link> 
      <div className={styles.content}>
        <h3 className={styles.title}>{ movie.title }</h3>
      </div>   
    </article>
  )
};
export default HomeListItem;