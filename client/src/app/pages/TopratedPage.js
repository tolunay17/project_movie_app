import { BaseLayout } from '../layouts';
import { Toprated, SerieList } from '../components/project';


const TopratedPage = () => {
  
  return (
    <BaseLayout>

      <Toprated/>
      <SerieList/>
    </BaseLayout>
  );
};

export default TopratedPage;