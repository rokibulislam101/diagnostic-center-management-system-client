import testsImg from '../../../assets/events/tests.jpg';

const TestsAppointment = () => {
  return (
    <div>
      <div className="relative py-10">
        <img
          src={testsImg}
          className="w-full h-full rounded-none"
          alt="Banner"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515c7] to-[rgba(21, 21, 21, 0)]">
          <h2 className="text-2xl text-center font-bold text-white">
            All Tests
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default TestsAppointment;
