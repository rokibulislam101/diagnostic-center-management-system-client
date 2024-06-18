import { Helmet } from 'react-helmet-async';
import Slider from '../Banner/Slider';
import FeaturedTests from '../FeaturedTests/FeaturedTests';
import Conversion from '../Conversion/Conversion';
import Doctors from '../Doctors/Doctors';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedTests></FeaturedTests>
      <Conversion></Conversion>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
