import React from "react";
import { Link } from "react-router-dom";

const LoginButtons = () => {
  return (
    <>
      <Link to={"/sign-in"} className={"no-link"}>
        <button className="default-button">SIGN IN</button>
      </Link>
      <Link to={"/sign-in"} className={"no-link"}>
        <button className={"default-button"}>SIGN UP</button>
      </Link>
    </>
  );
};

export default LoginButtons;
