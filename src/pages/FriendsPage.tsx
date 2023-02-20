import React from "react";
import photo from "../assets/user-photo.jpg";
import { Link } from "react-router-dom";
const friends: { photo: string; name: string }[] = [];
for (let i = 0; i <= 29; i++) friends.push({ photo, name: "Jane Joe" });

const FriendsPage = () => {
  return (
    <div className={"friendsPage"}>
      <span className={"default-title"}>Friends</span>
      <div className={"friendsPage__friend-container"}>
        {friends.map((elem, index) => (
          <Link to={`/profile/${index}`} className={"no-link"}>
            <div className={"friendsPage__friend"}>
              <img src={elem.photo} />
              <span>{elem.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
