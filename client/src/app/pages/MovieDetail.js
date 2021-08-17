import { BaseLayout } from '../layouts';
import { MovieDetailsCont } from '../components/project';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';

const MoviePage = () => {

  const { id } = useParams();
  const MOVIE_API = `https://api.themoviedb.org/3/movie/${id}?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&append_to_response=video`
  const { data, isLoading } = useFetch( MOVIE_API )
  return (
    <BaseLayout>
    { isLoading || !data ? 'loading':
      <MovieDetailsCont data={ data }/>
     }
    </BaseLayout>


  );
};

export default MoviePage;