import { useEffect, useState } from 'react';
import TestsCard from '../../Shared/TestsCard/TestsCard';
import bannerImg from '../../../assets/events/banner.jpg';

const TestsDetails = () => {
  const [tests, setTests] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/tests')
      .then(res => res.json())
      .then(data => setTests(data));
  }, []);

  const handleDateChange = e => {
    setSelectedDate(e.target.value);
  };

  const filteredTests = selectedDate
    ? tests.filter(test => test.dateline === selectedDate)
    : tests;

  return (
    <div>
      <div className="relative">
        <img
          src={bannerImg}
          className="w-full h-52 rounded-none"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515c7] to-[rgba(21, 21, 21, 0)]">
          <h2 className="text-2xl text-center font-bold text-white">
            All Tests
          </h2>
        </div>
      </div>
      <div className="max-w-sm my-5 md:my-10 mx-auto">
        <input
          type="date"
          name="date"
          id="date"
          className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
          onChange={handleDateChange}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {filteredTests.length > 0 ? (
          filteredTests.map(data => <TestsCard key={data._id} data={data} />)
        ) : (
          <p className="text-center text-gray-500">
            No tests available for the selected date.
          </p>
        )}
      </div>
    </div>
  );
};

export default TestsDetails;
