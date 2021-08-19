import styles from './ProjectDetails.module.scss';

const SerieDetailsCont = ({ data }) => {
  return (
    <article className={styles.datalistItem}>      
      <div className={styles.picture}>
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} />
      </div>
      
      <div className={styles.content}>
        <section>
          <h1 className={styles.title}>{data.name !== undefined ? data.name : data.title } </h1>
          <p>{data.episode_run_time !== undefined ? `${data.episode_run_time} min`: data.runtime + " min"} | {data.genres !== 0 ?
          data.genres.map(genre => {
            return (genre.name + " - " ) 
            } ) : "DATA_LENGTH" } | {data === "tv" ? "Series " + data.episode_run_time : "Series" + data.release_date}</p>
        </section>
          <p className={styles.overview}>{ data.overview }</p>
          <span className={styles.release_date}>{ data.vote_average } / 10 rating out of {data.vote_count} Votes </span>
      </div>   
      
      {data.production_companies !== undefined ? 
      <div>
       
      </div> 
      : "" 
    }
    </article>
  )
};

export default SerieDetailsCont;