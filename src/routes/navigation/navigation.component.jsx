import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const { isVisible } = useContext(CartContext);

  return (
    <Fragment>
      <div>
        <div className="flex justify-between items-center box-border mx-8 my-4">
          <Link className="logo" to="/">
            <CrwnLogo className="logo hover:sepia transition ease-in-out duration-500" />
          </Link>
          <div className="flex ">
            <Link
              className="flex items-center nav-link mx-2 font-semibold decoration-4 underline-offset-4 hover:underline decoration-red-500"
              to="/shop"
            >
              Shop
            </Link>
            {currentUser ? (
              <span
                onClick={signOutUser}
                className="flex items-center cursor-pointer mx-2 font-semibold decoration-4 underline-offset-4 hover:underline decoration-red-500"
              >
                Sign out
              </span>
            ) : (
              <Link
                className="flex items-center mx-2 font-semibold decoration-4 underline-offset-4 hover:underline decoration-red-500"
                to="/auth"
              >
                Sign in
              </Link>
            )}
            <CartIcon />
          </div>
          {isVisible && <CartDropdown />}
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;
