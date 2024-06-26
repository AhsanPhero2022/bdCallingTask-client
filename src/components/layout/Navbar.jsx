import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const navitem = (
    <>
      <Link to="/buyAService">
        <li>Buy</li>
      </Link>
      <Link to="/propertyDetails">
        <li>Sell</li>
      </Link>
      <li>Services</li>
      <Link to="/aboutPage">
        <li>About</li>
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navitem}
            </ul>
          </div>
          <div>
            <ul className="menu menu-horizontal hidden px-1 lg:flex gap-6">
              {navitem}
            </ul>
          </div>
        </div>
        <div className="navbar-center ">
          <img className="w-8" src={logo} alt="logo" />
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
