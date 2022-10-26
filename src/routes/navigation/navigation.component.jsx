import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div>
        <div className="navigation flex justify-between items-center box-border mx-8 my-4">
          <Link className="logo" to="/">
            <CrwnLogo className="logo hover:sepia transition ease-in-out duration-500" />
          </Link>
          <div className="nav-links-container">
            <Link
              className="nav-link mx-2 font-semibold decoration-4 underline-offset-4 hover:underline decoration-red-500"
              to="/shop"
            >
              Shop
            </Link>
            {currentUser ? (
              <span onClick={signOutUser} className="cursor-pointer mx-2 font-semibold decoration-4 underline-offset-4 hover:underline decoration-red-500">
                Sign out
              </span>
            ) : (
              <Link
                className="nav-link mx-2 font-semibold decoration-4 underline-offset-4 hover:underline decoration-red-500"
                to="/auth"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;
