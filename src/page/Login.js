import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

import { useDispatch } from "react-redux";
import { AddUser } from "../store/UserSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        console.log(result.user);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(AddUser(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <h1>Welcome to ShopMe Store</h1>
      <h2>explore the shop by login instantly</h2>
      <button className="btn btn-login" onClick={() => handleClick()}>
        <GoogleIcon />
        Sigin with Google
      </button>
    </div>
  );
};

export default Login;
