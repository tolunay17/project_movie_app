import { BaseLayout } from '../layouts';
import { SerieDetailsCont } from '../components/project';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';

const SerieDetail = () => {

  const { id } = useParams();
  const SERIE_API = `https://api.themoviedb.org/3/tv/${id}?api_key=e98128cef7b0c7ec91cd68220f6435a1`

  const { data, isLoading } = useFetch( SERIE_API )
  return (
    <BaseLayout>
    { isLoading || !data ? 'loading':
      <SerieDetailsCont data={ data }/>
     }
    </BaseLayout>


  );
};

export default SerieDetail;