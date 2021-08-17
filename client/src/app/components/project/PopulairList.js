import { useState, useEffect } from 'react';
import FilterMovies from './FilterMovies';

const API = "https://api.themoviedb.org/3/movie/popular?api_key=e98128cef7b0c7ec91cd68220f6435a1&language=en-US&page=1";

const PopulairList = () => {
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
      <FilterMovies data={data}/>

       }

    </div>
  )
};

export default PopulairList;