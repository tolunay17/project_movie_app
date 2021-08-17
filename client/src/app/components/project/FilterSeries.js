import styles from './FilterSeries.module.scss'
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

const filterSeries = ({ data }) => {

return (
  <ul className={styles.list}>
        { data.results.map(show => 
        <li key={show.id}>
          <h3>{show.name}</h3>
            <img alt="" src={IMAGE_URL + show.poster_path}></img>
            <p>{show.overview}</p>
        </li>)
        }
      </ul>

)
}
export default filterSeries



