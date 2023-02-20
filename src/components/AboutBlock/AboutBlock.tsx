import React from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../interfaces/IUser";

const AboutBlock = () => {
  const user = useSelector((data: { auth: { user: IUser } }) => data.auth.user);

  return (
    <div className={"aboutBlock"}>
      <div className={"aboutBlock__about"}>
        <span>About</span>
      </div>
      <div className={"aboutBlock__container"}>
        <div className={"aboutBlock__aboutBlock"}>
          <div>
            <span>First Name</span>
            <span>{user.firstName}</span>
          </div>

          <div>
            <span>Gender</span>
            <span>{user.gender}</span>
          </div>

          <div>
            <span>Current Location</span>
            <span>{user.location}</span>
          </div>

          <div>
            <span>Email Address</span>
            <span>{user.email}</span>
          </div>
        </div>
        <div className={"aboutBlock__aboutBlock"}>
          <div>
            <span>Last Name</span>
            <span>{user.lastName}</span>
          </div>

          <div>
            <span>Contact Number</span>
            <span>{user.number}</span>
          </div>

          <div>
            <span>Current Country</span>
            <span>{user.country}</span>
          </div>

          <div>
            <span>Birthday </span>
            <span>{user.birthday}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
