import cvImg from '../../../assets/home/conversion.jpg';

const Conversion = () => {
  return (
    <div className="bg-gray-800 px-20" data-aos="fade-up" data-aos-delay="200">
      <div className="md:flex justify-center items-center gap-16 p-10 my-20">
        <div className="md:w-1/2 text-white">
          <h1 className="font-bold text-4xl mb-5">
            Peace Diagnostic Center A Modern Approach to Healthcare Excellence.
          </h1>
          <p>
            In an era where healthcare is rapidly evolving, transforming
            diagnostic centers is key to ensuring precision, efficiency, and
            superior patient care. This comprehensive guide explores innovative
            strategies to modernize diagnostic centers.
          </p>
          <button className="btn mt-5 bg-indigo-500 hover:bg-indigo-700 text-white">Get Appointment</button>
        </div>
        <div className="rounded-2xl md:w-[600px] mt-10 md:mt-0">
          <img className="w-full" src={cvImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Conversion;
