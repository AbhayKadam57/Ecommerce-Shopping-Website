import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import { Logout } from "../store/UserSlice";
import { clearCart } from "../store/CartSlice";

const Navbar = () => {
  const { CartQuantity } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.clear();

    dispatch(clearCart());
    dispatch(Logout());

    signOut(auth)
      .then(() => window.location.assign("/"))
      .catch((err) => console.log(err));

    // navigate("/login");
  };

  return (
    <div className="nav-head">
      <div className="item">
        <Link to="/" style={{ color: "white" }}>
          <h2>ShopMe store</h2>
        </Link>
      </div>
      <div className="item">
        <Link to="/cart" style={{ color: "white" }}>
          <ShoppingCartOutlinedIcon />
          <p className="badge">{CartQuantity}</p>
        </Link>
      </div>
      <button className="logout" onClick={() => handleClick()}>
        <>Log out</>
      </button>
      <div className="profile">
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
