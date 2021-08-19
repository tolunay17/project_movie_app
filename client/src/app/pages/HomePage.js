import { BaseLayout } from '../layouts';
import { Popular, Trending } from '../components/project';


const HomePage = () => {
  
  return (
    <BaseLayout>

      <Popular/>
      <Trending/>

    </BaseLayout>
  );
};

export default HomePage;