import { Outlet, useLocation } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navber from "../pages/Shared/Header/Navber"

const main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('Login') || location.pathname.includes('Register')
  return (
    <div>
      {noHeaderFooter || <Navber/>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer/>}
    </div>
  );
}

export default main
