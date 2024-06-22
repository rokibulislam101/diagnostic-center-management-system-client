import { createBrowserRouter } from 'react-router-dom';
import Main from "../Layout/Main";
import Home from '../pages/Home/Home/Home';
import NewsEvents from '../pages/NewsEvents/NewsEvents/NewsEvents';
import About from '../pages/About/About/About';
import AllTests from '../pages/AllTests/AllTests/AllTests';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Secret from '../pages/Shared/Secret/Secret';
import PrivateRoutes from './PrivateRoutes';

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
        path: '/Secret',
        element: (
          <PrivateRoutes>
            <Secret></Secret>,
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

