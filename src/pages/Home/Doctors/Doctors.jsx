import { useState } from 'react';
import DoctorsCard from '../../Shared/DoctorsCard/DoctorsCard';
import useDoctors from '../../Hooks/useDoctors';

const Doctors = () => {
  const [doctors] = useDoctors();
  const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:5000/doctors')
  //     .then(res => res.json())
  //     .then(data => setDoctors(data));
  // }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="my-10">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-center text-indigo-500">Our Team</h3>
        <h2 className="text-3xl font-semibold text-center">Meet Our Doctors</h2>
        <p className="text-center lg:px-80">
          Etiam condimentum aliquam odio, ut consectetur enim. Nullam metus
          purus, pharetra quis tempus id, feugiat a augue. Etiam condimentum
          aliquam odio, ut consectetur enim.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {doctors.slice(0, showAll ? doctors.length : 3).map(data => (
          <DoctorsCard key={data._id} data={data} />
        ))}
      </div>
      <div className="flex justify-center">
        {showAll ? (
          <button
            className="px-4 py-2 bg-indigo-500 font-bold text-white rounded-full"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-indigo-500 font-bold text-white rounded-full"
            onClick={handleShowAll}
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Doctors;

