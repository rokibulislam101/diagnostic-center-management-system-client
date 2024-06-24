import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2'; // Ensure Swal is imported
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  const handleLogOut = async () => {
    try {
      await logout();
      Swal.fire({
        title: 'Logged out',
        text: 'You have been logged out successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/'); // Redirect to home page after successful logout
      });
    } catch (error) {
      console.error('Error logging out:', error);
      Swal.fire({
        title: 'Error',
        text: 'There was an error logging out. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-80 min-h-full bg-indigo-500 opacity-70 text-white text-center py-20 px-5">
        <h3 className="text-xl box-border shadow-xl p-5">Peace Diagnostic</h3>

        <ul className="menu my-10 text-lg">
          {isAdmin && (
            <>
              {/* Admin user */}
              <li>
                <NavLink to="/Dashboard/AllUsers">All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">Manage User</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminProfile">Admin Profile</NavLink>
              </li>
            </>
          )}
          {!isAdmin && user && (
            <>
              {/* Normal user */}
              <li>
                <NavLink to="/Dashboard/MyAppointment">
                  Upcoming Appointments
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/MyTestResults">Test results</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/AllUsers">All Users</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/Profile">My Profile</NavLink>
              </li>
            </>
          )}

          <div className="divider border-red-500"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost text-lg box-border shadow"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1 mx-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
