import React from "react";
import DefaultButton from "../components/button/DefaultButton";

const LandingPage = () => {
  return (
    <div className={"landing-page"}>
      <div className={"landing-page__container"}>
        <h1>MiniBook</h1>
        <h2>The minimalist Social Media Platform</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "85%",
            margin: "auto",
          }}
        >
          <DefaultButton text={"SIGN IN"} link={"/sign-in"} />
          <DefaultButton text={"SIGN UP"} link={"/sign-up"} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
