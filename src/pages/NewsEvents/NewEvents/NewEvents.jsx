import eventsImg from '../../../assets/events/newsevents.jpg';
import bannerImg from '../../../assets/events/banner.jpg';

const NewEvents = () => {
  return (
    <div>
      <div className="relative">
        <img src={bannerImg} className="w-full h-52 rounded-none" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515c7] to-[rgba(21, 21, 21, 0)]">
          <h2 className="text-2xl text-center font-bold text-white">
            News & Events
          </h2>
        </div>
      </div>
      <div className="px-5 md:px-20" data-aos="fade-up" data-aos-delay="200">
        <div className="md:flex justify-center gap-16 p-10 my-10">
          <div className="rounded-2xl md:w-[600px]">
            <img className="w-full" src={eventsImg} alt="" />
          </div>
          <div className="md:w-1/2 mt-0">
            <h1 className="font-bold text-4xl mb-5">
              Peace Diagnostic Center A Modern Approach to Healthcare
              Excellence.
            </h1>
            <p>
              In an era where healthcare is rapidly evolving, transforming
              diagnostic centers is key to ensuring precision, efficiency, and
              superior patient care. This comprehensive guide explores
              innovative strategies to modernize diagnostic centers.
            </p>
            <button className="btn mt-5 bg-indigo-500 hover:bg-indigo-700 text-white">
              Get Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvents;
