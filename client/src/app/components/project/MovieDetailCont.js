import { FiEye } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";

import styles from './ProjectDetails.module.scss';

const MovieDetailsCont = ({ data }) => {
  return (
    <article className={styles.datalistItem}>      

      <div className={styles.picture}>
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} />
      </div>
      
      <div className={styles.content}>
        <p className={styles.overview}>{ data.overview }</p>
        <span className={styles.release_date}>{ data.vote_average } / 10 rating out of {data.vote_count} Votes </span>
      <section>
        <h1 className={styles.title}>{data.name !== undefined ? data.name : data.title } </h1>
        <p>{data.episode_run_time !== undefined ? `${data.episode_run_time} min`: data.runtime + "min"}</p>
      </section>
      </div>   
      <footer className={styles.meta}>
        <span className={styles.numReviews}><VscPreview /><span>{ data.numReviews }</span></span>
        <span className={styles.numViews}><FiEye /><span>{ data.numViews }</span></span>
      </footer>   
    </article>
  )
};

export default MovieDetailsCont;