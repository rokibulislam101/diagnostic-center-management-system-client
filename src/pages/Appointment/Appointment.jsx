import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Appointment = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(user?.email || '');
  const [name, setName] = useState(user?.displayName || ''); // Using displayName from user
  const [photo, setPhoto] = useState(user?.photoURL || ''); // Using photoURL from user
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await axios.get(
          `https://finalasmt-project-server.vercel.apptests/${id}`
        );
        setTest(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, [id]);

  const handleBooking = async () => {
    const bookingData = {
      email,
      name,
      photo,
      testId: test._id,
      testName: test.category,
      testPrice: test.price,
      testDate: new Date().toISOString().split('T')[0], // Using current date for simplicity
    };

    try {
      await axios.post(
        'https://finalasmt-project-server.vercel.appreservations',
        bookingData
      );
      Swal.fire({
        title: 'Success!',
        text: 'Appointment successful',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setBookingSuccess(true);
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue with your booking. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Helmet>
        <title>Appointment</title>
      </Helmet>
      {test && (
        <>
          <div className="flex flex-col md:flex-row">
            <img
              src={test.image}
              alt={test.category}
              className="md:w-1/2 w-full h-auto object-cover"
            />
            <div className="md:w-1/2 w-full md:pl-4 mt-4 md:mt-0">
              <p className="text-gray-500">
                {new Date(test.dateline).toISOString().split('T')[0]}
              </p>
              <h1 className="text-2xl font-bold">{test.category}</h1>
              <p className="mt-2">{test.description}</p>
              <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">${test.price}</span>
                  <span className="text-lg">Available Slots: {test.slots}</span>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded mb-4"
                  value={email}
                  readOnly
                  disabled
                />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded mb-4"
                  value={name}
                  readOnly
                  disabled
                />
                <input
                  type="text"
                  placeholder="Enter your photo URL"
                  className="w-full p-2 border rounded mb-4"
                  value={photo}
                  readOnly
                  disabled
                />
                {!bookingSuccess ? (
                  <button
                    onClick={handleBooking}
                    className="w-full bg-blue-500 text-white p-2 rounded"
                  >
                    Book Now
                  </button>
                ) : (
                  <div className="w-full bg-green-500 text-white p-2 rounded text-center">
                    Submit Successfully
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Appointment;

// import React, { useState, useEffect, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../../providers/AuthProvider';
// import Swal from 'sweetalert2';

// const Appointment = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const [test, setTest] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [email, setEmail] = useState(user?.email || '');
//   const [bookingSuccess, setBookingSuccess] = useState(false);

//   useEffect(() => {
//     const fetchTest = async () => {
//       try {
//         const response = await axios.get(`https://finalasmt-project-server.vercel.apptests/${id}`);
//         setTest(response.data);
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTest();
//   }, [id]);

//   const handleBooking = async () => {
//     const bookingData = {
//       email,
//       testId: test._id,
//       testName: test.category,
//       testPrice: test.price,
//       testDate: test.dateline,
//     };

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('https://finalasmt-project-server.vercel.appreservations', bookingData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       Swal.fire({
//         title: 'Success!',
//         text: 'Appointment successful',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });
//       setBookingSuccess(true);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'There was an issue with your booking. Please try again later.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {test && (
//         <>
//           <div className="flex flex-col md:flex-row">
//             <img
//               src={test.image}
//               alt={test.category}
//               className="md:w-1/2 w-full h-auto object-cover"
//             />
//             <div className="md:w-1/2 w-full md:pl-4 mt-4 md:mt-0">
//               <p className="text-gray-500">
//                 {new Date(test.dateline).toISOString().split('T')[0]}
//               </p>
//               <h1 className="text-2xl font-bold">{test.category}</h1>
//               <p className="mt-2">{test.description}</p>
//               <div className="mt-4 p-4 border rounded-lg bg-gray-50">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-lg font-bold">${test.price}</span>
//                   <span className="text-lg">Available Slots: {test.slots}</span>
//                 </div>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full p-2 border rounded mb-4"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                 />
//                 {!bookingSuccess ? (
//                   <button
//                     onClick={handleBooking}
//                     className="w-full bg-blue-500 text-white p-2 rounded"
//                   >
//                     Book Now
//                   </button>
//                 ) : (
//                   <div className="w-full bg-green-500 text-white p-2 rounded text-center">
//                     Submit Successful
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Appointment;
