import { Link } from 'react-router-dom';
import * as Routes from '../../routes'
import styles from './ProjectDetails.module.scss';


const SerieListItem = ({ serie }) => {
  return (
    <article className={styles.SerieListEach}>     
    <Link to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>
      <picture className={styles.picture}>
        <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.title} />
      </picture>
      </Link> 
      <div className={styles.content}>
        <h3 className={styles.title}>{ serie.title }</h3>
      </div>   
    </article>
  )
};

export default SerieListItem;