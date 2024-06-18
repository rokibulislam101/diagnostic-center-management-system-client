import { Helmet } from 'react-helmet-async';
import Slider from '../Banner/Slider';
import FeaturedTests from '../FeaturedTests/FeaturedTests';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedTests></FeaturedTests>
    </div>
  );
};

export default Home;
