import React from "react";
import { Link } from "react-router-dom";
import DefaultButton from "../button/DefaultButton";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout_action } from "../../redux/actions/login.action";
import { handleSearch_action } from "../../redux/actions/search.action";
import { thunkSearch } from "../../thunk/search.thunk";

const Header = () => {
  const isLoggedIn = useSelector(
    (elem: { auth: { isLoggedIn: boolean } }) => elem.auth.isLoggedIn
  );
  const notifications = 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleKeyPress = (e: any) => {
    console.log(e.key);
    if (e.key === "Enter") {
      navigate("/search");
    }
  };

  return (
    <div className={"header"}>
      <Link to={isLoggedIn ? "/profile" : "/"} className={"no-link"}>
        <span className={"header__logo "}>Minibook</span>
      </Link>
      {false ? (
        <></>
      ) : (
        <>
          {isLoggedIn ? (
            <>
              <div style={{ margin: "auto 0", width: "180px" }}>
                <input
                  placeholder={"Search"}
                  className={"default-input"}
                  onKeyPress={handleKeyPress}
                  onChange={(event) =>
                    dispatch(thunkSearch(event.target.value))
                  }
                />
              </div>
              <div className={"header__notification-block"}>
                Notification <span>{notifications}</span>
              </div>

              <div style={{ margin: "auto 25px auto 0px" }}>
                <button
                  className={"default-button"}
                  onClick={() => {
                    dispatch(logout_action());
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className={"header__button-container"}>
              <DefaultButton text={"SIGN IN"} link={"/sign-in"} />
              <DefaultButton text={"SIGN UP"} link={"/sign-up"} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
