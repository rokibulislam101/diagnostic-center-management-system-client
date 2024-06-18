
import { useEffect, useState } from 'react';
import FeaturedTestCard from '../../Shared/FeaturedTestsCard/FeaturedTestsCard';

const FeaturedTests = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('ftdata.json')
      .then(res => res.json())
      .then(data => setTests(data));
  }, []);

  return (
    <div className="my-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-center">Featured Tests</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5 my-10">
        {tests.map(data => (
          <FeaturedTestCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTests;


// import { useEffect, useState } from 'react';
// import FeaturedTestCard from '../../Shared/FeaturedTestsCard/FeaturedTestsCard';

// const FeaturedTests = () => {
//   const [tests, setTests] = useState([]);

//   useEffect(() => {
//     fetch('ftdata.json')
//       .then(res => res.json())
//       .then(data => {
//         // Sort data if needed
//         const sortedData = data.sort((a, b) =>
//           a.someField > b.someField ? 1 : -1
//         ); // replace 'someField' with the appropriate field to sort by
//         setTests(sortedData);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="flex flex-col justify-center mb-4">
//         <h2 className="text-3xl font-semibold text-center">Featured Tests</h2>
//       </div>
//       <div className="flex flex-wrap justify-center">
//         {tests.map(data => (
//           <FeaturedTestCard key={data._id} data={data} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedTests;
