import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import NewsEvents from '../pages/NewsEvents/NewsEvents/NewsEvents';
import About from '../pages/About/About/About';
import AllTests from '../pages/AllTests/AllTests/AllTests';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Secret from '../pages/Shared/Secret/Secret';
import PrivateRoutes from './PrivateRoutes';
import Appointment from '../pages/Appointment/Appointment';
import Dashboard from '../Layout/Dashboard';
import MyAppointment from '../pages/Dashboard/UserHome/MyAppointment';
import MyTestResults from '../pages/Dashboard/UserHome/MyTestResults';
import Profile from '../pages/Dashboard/UserHome/Profile';
import AllUsers from '../pages/Dashboard/AdminHome/AllUsers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/AllTests',
        element: <AllTests></AllTests>,
      },
      {
        path: '/NewsEvents',
        element: <NewsEvents></NewsEvents>,
      },
      {
        path: '/About',
        element: <About></About>,
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/Register',
        element: <Register></Register>,
      },
      {
        path: '/Appointment/:id',
        element: (
          <PrivateRoutes>
            <Appointment></Appointment>
          </PrivateRoutes>
        ),
      },
      {
        path: '/Secret',
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: 'Dashboard',
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // normal user routes
      {
        path: 'Profile',
        element: <Profile></Profile>,
      },
      {
        path: 'MyAppointment',
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: 'MyTestResults',
        element: <MyTestResults></MyTestResults>,
      },
      {
        path: 'AllUsers',
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
