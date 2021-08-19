import styles from './FilterSeries.module.scss'
import SerieListItem  from './SerieListItem.js';

const filterSeries = ({ data }) => {
  return (
    <ul className={styles.list}>
          { data.results.map(serie => 
          <li key={serie.id}>
            <SerieListItem serie={serie}>

            </SerieListItem>
          </li>)
          }
        </ul>
  
  )
}
export default filterSeries



