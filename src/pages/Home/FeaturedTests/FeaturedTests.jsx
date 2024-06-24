import { useEffect, useState } from 'react';
import FeaturedTestCard from '../../Shared/FeaturedTestsCard/FeaturedTestsCard';

const FeaturedTests = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tests')
      .then(res => res.json())
      .then(data => setTests(data));
  }, []);

  return (
    <div className="my-10">
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-center text-indigo-500">
          Diagnostic Tests
        </h3>
        <h2 className="text-3xl font-semibold text-center">Featured Tests</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {tests.map(data => (
          <FeaturedTestCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTests;
