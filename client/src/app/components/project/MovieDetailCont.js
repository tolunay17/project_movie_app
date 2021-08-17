import styles from './ProjectDetails.module.scss';

const MovieDetailsCont = ({ data }) => {
  const CREDITS = `https://api.themovieindb.org`
  return (
    <article className={styles.datalistItem}>      

      <div className={styles.picture}>
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} />
      </div>
      
      <div className={styles.content}>
        <section>
          <h1 className={styles.title}>{data.name !== undefined ? data.name : data.title } </h1>
          <p>{data.episode_run_time !== undefined ? `${data.episode_run_time} min`: data.runtime + " min"} | {data.genres.length !== 0 ?
          data.genres.map(genre => {return (genre.name + " - " ) } ) : "DATA_LENGTH" } | {data === "tv" ? "Movies " + data.episode_run_time : "Movie " + data.release_date}</p>
        </section>
          <p className={styles.overview}>{ data.overview }</p>
          <span className={styles.release_date}>{ data.vote_average } / 10 rating out of {data.vote_count} Votes </span>
      </div>   
      
      {data.production_companies !== undefined ? 
      <div>
        <h3>Production Companies</h3>
        <ul className={styles.companies}>
          { data.production_companies.map(company => {
            return(
              <li key={company.id}>
                { company.logo_path !== null ? 
              <img alt=" company logo" className={styles.compiesLogo} src={`https://image.tmdb.org/t/p/original${company.logo_path}`}></img> :  
              <img alt=" company logo" className={styles.compiesLogo} src={`https://haes.ca/operations/papua-new-guinea/`}></img> 
              }
              <p>{company.name}</p>
              </li>
            )
          }) }
        </ul>
      </div> 
      : "" 
    }
    {/* { creditData ? 
    
    <div>
      <h3>Cast and Crews</h3>
      <div>
        <h3>Cast</h3>
        <ul className={`${showAllCast ? styles.usersOpen : styles.usersClosed} ${styles.ul}`}>
          { crediteData.cast.length !== 0 ? creditData.cast.map(member => {
            return(
              <li key={members.cast_id}>
                {members.profile_path !== null ? <img alt=" " className={styles.img} src={`https.//image.tmdb.org/t/g/original${members.profile_path}`}></img> : <div className={styles.img}></div>}
                <p>{members.name} <h4 className={styles.red}> As</h4>{member.character}</p>
              </li>
            )
          }) : <p>None cast members were found</p>}
        </ul>
        <p onClick={togglecast} className={styles.hover}>{showAllCrew ? "hide them" : "show more of them"}</p>
      </div>
    </div>
    : ""
    } */}
    </article>
  )
};

export default MovieDetailsCont;