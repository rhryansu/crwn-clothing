import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

function Navigation() {
  return (
    <Fragment>
      <div>
        <div className="navigation flex justify-between items-center box-border mx-8 my-2">
          <Link className="logo" to="/">
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link
              className="nav-link font-semibold decoration-4 underline-offset-4 hover:underline decoration-red-500"
              to="/shop"
            >
              Shop
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;
