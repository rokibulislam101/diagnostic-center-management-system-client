import bannerImg from '../../../assets/events/banner.jpg';
import groupImg from '../../../assets/events/team-group.jpg';

import styles from './Choose.module.css';

const Choose = () => {
  return (
    <div>
      <div className="relative">
        <img src={bannerImg} className="w-full h-52 rounded-none" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515c7] to-[rgba(21, 21, 21, 0)]">
          <h2 className="text-2xl text-center font-bold text-white">
            About Us
          </h2>
        </div>
      </div>
      <div>
        <div className="px-5 md:px-20" data-aos="fade-up" data-aos-delay="200">
          <div className="md:flex justify-center gap-16 p-10 my-10">
            <div className="md:w-1/2 md:px-10">
              <h3 className="font-bold text-indigo-500">About Clinic</h3>
              <h1 className="font-bold text-4xl mb-5">
                Why patients choose our center
              </h1>
              <p>
                Etiam condimentum aliquam odio, ut consectetur enim. Nullam
                metus purus, pharetra quis tempus id, feugiat a augue. Also
                condimentum aliquam odio, ut consectetur enim. Ut sit amet
                iaculis nulla, sed dapibus justo. Nullam quis placerat massa,
                vitae ullamcorper nulla.
              </p>
              <button className="btn mt-5 bg-indigo-500 rounded-full px-10 hover:bg-indigo-700 text-white">
                Read more
              </button>
            </div>
            <div className="md:w-1/2 md:px-10 mt-10 md:mt-0">
              <h3 className="font-bold text-indigo-500">Clinic Skills</h3>
              <h1 className="font-bold text-2xl mb-5">Our Specialisations</h1>
              <div className="flex justify-around">
                <div
                  className={styles['radial-progress']}
                  style={{ '--value': '306deg' }}
                  role="progressbar"
                >
                  <h2 className="text-3xl font-bold">85%</h2>
                  <p className="font-bold">Neurosurgery</p>
                </div>
                <div
                  className={styles['radial-progress']}
                  style={{ '--value': '245deg' }}
                  role="progressbar"
                >
                  <h2 className="text-3xl font-bold">68%</h2>
                  <p className="font-bold">MRI-Diagnostic</p>
                </div>
                <div
                  className={styles['radial-progress']}
                  style={{ '--value': '274deg' }}
                  role="progressbar"
                >
                  <h2 className="text-3xl font-bold">76%</h2>
                  <p className="font-bold">Cardiology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={groupImg} className="px-10 md:px-20" alt="Team-Group" />
      </div>
    </div>
  );
};

export default Choose;
