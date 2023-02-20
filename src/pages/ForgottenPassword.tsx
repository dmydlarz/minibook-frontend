import React from "react";

const ForgottenPassword = () => {
  return (
    <div className={"forgottenPasswordPage"}>
      <div className={"default-block"}>
        <div className={"forgottenPasswordPage__inside-container"}>
          <span className={"default-title"}>Forgotten Password</span>
          <input className={"default-input"} placeholder={"Email address"} />
        </div>
        <div className={"forgottenPasswordPage__bottom-block"}>
          <button className={"default-button"}>RECOVER</button>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;
