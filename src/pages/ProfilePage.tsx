import React from "react";
import userPhoto from "../assets/user-photo.jpg";
import "../css/ProfilePage.css";
import AboutBlock from "../components/AboutBlock/AboutBlock";
import UserPhotosBlock from "../components/UserPhotosBlock/UserPhotosBlock";
import { useSelector } from "react-redux";
import { IUser } from "../interfaces/IUser";

const ProfilePage = () => {
  const user = useSelector((data: { auth: { user: IUser } }) => data.auth.user);
  return (
    <div className={"profilePage"}>
      <div className={"profilePage__user-block"}>
        <img
          src={userPhoto}
          alt={"user-photo"}
          className={"profilePage__user-img"}
        />
        <div className={"profilePage__user-inside-container"}>
          <div className={"username"}>
            {user.firstName} {user.lastName}
          </div>
          <span>
            Some quick example test to build on the card title and make up the
            bulk of the card's content.
          </span>
          <div className={"profilePage__status-container"}>
            <div className={"status-line"}>
              <span>Status</span>
              <span className={"status"}>Public</span>
            </div>
            <div className={"member-line"}>
              <span>Member Since</span>
              <span className={"data"}>Nov 08,2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className={"profilePage__main-block"}>
        <AboutBlock />
        <UserPhotosBlock />
      </div>
    </div>
  );
};

export default ProfilePage;
