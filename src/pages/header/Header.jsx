import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/images/crown.svg";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className='navigation'>
        <Link to={"/"} className='logo-container'>
          <Logo />
        </Link>
        <div className='nav-links-container'>
          <Link to={"/shop"} className='nav-link'>
            SHOP
          </Link>
          <Link to={"/sign-in"} className='nav-link'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
