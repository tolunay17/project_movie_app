import { BaseLayout } from '../layouts';
import { Popular, Trending, Toprated } from '../components/project';


const HomePage = () => {
  
  return (
    <BaseLayout>

      <Popular/>
      <Trending/>
      <Toprated/>

    </BaseLayout>
  );
};

export default HomePage;