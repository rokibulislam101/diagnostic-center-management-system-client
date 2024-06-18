import gallery01 from '../../../assets/events/urology.jpg';
import gallery02 from '../../../assets/events/cardiology.jpg';
import gallery03 from '../../../assets/events/comdianostic.jpg';
import gallery04 from '../../../assets/events/healthins.jpg';
import gallery05 from '../../../assets/events/mriscanning.jpg';
import gallery06 from '../../../assets/events/neurosurgery.jpg';

const Gallery = () => {
  return (
    <div className="p-4 mx-10 sm:mx-20 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={gallery01} alt="Urology" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Urology</h2>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={gallery02} alt="Cardiology" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Cardiology</h2>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={gallery03} alt="Computer Diagnostics" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Computer Diagnostic</h2>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={gallery04} alt="Health Insurance" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Health Insurance</h2>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={gallery05} alt="MRI Scanning" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-bold">MRI Scanning</h2>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={gallery06} alt="Neurosurgery" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Neurosurgery</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
