import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide01.jpg';
import slider2 from '../../../assets/home/slide02.jpg';
import slider3 from '../../../assets/home/slide03.jpg';
import slider4 from '../../../assets/home/slide04.jpg';

const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        className="mySwiper h-[600px]"
        loop={true}
      >
        <SwiperSlide>
          <img src={slider1} className="w-full h-full rounded-none" />
          <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 text-center sm:px-48">
              <h2 className="text-6xl font-bold">
                Solar Panels Convert Sunlight to Energy
              </h2>
              <p>
                Solar panels harness sunlight and convert it into electrical
                energy through photovoltaic cells. These cells absorb photons
                from sunlight, generating an electric current that can be used
                to power homes and businesses.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="w-full h-full rounded-none" />
          <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 text-center sm:px-48">
              <h2 className="text-6xl font-bold">
                AI Enhances Medical Diagnostics
              </h2>
              <p>
                Artificial intelligence (AI) is revolutionizing medical
                diagnostics by analyzing complex medical data quickly and
                accurately. AI algorithms can identify patterns in imaging
                scans, lab results, and patient histories.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="w-full h-full rounded-none" />
          <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 text-center sm:px-48">
              <h2 className="text-6xl font-bold">
                3D Printing Transforms Manufacturing
              </h2>
              <p>
                3D printing, or additive manufacturing, allows for the creation
                of complex and customized products layer by layer from digital
                models. This technology is transforming manufacturing by
                reducing waste.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="w-full h-full rounded-none" />
          <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 text-center sm:px-48">
              <h2 className="text-6xl font-bold">
                Drones Capture Aerial Photos
              </h2>
              <p>
                Drones equipped with high-resolution cameras are revolutionizing
                aerial photography. They can capture stunning images and videos
                from unique vantage points, previously inaccessible or costly
                with traditional methods.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
