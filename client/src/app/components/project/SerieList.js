import { useState, useEffect } from 'react';
import FilterSeries from './FilterSeries';

const API = "https://api.themoviedb.org/3/discover/tv?api_key=e98128cef7b0c7ec91cd68220f6435a1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";


const SerieList = () => {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ Loading, setLoading ] = useState(true);


  useEffect(() => {
    getData();
  }, []);
  
      const getData = async () => {
        try {
          const response = await fetch(API);
          if (!response.ok) {
            setError("Oops there was an error with your link api");
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          setError(error);
          
        } finally {
          setLoading(false);
        }
      }
      console.log(data)
  
  return (
    <div>
      { error ? 'error': Loading || !data ? 'Loading':
      <FilterSeries data={data}/>

       }

    </div>
  )
};

export default SerieList;