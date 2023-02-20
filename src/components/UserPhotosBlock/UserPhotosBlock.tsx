import React from "react";
import photo from "../../assets/autumn.jpg";
import { Link } from "react-router-dom";

const photosArray: { photo: string }[] = [];
for (let i = 0; i <= 7; i++) photosArray.push({ photo });
const UserPhotosBlock = () => {
  return (
    <div className={"userPhotosBlock"}>
      <h2>Photos</h2>
      <div>
        {photosArray.map((elem) => (
          <Link to={"/photos"}>
            <img src={elem.photo} alt={"photo"} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPhotosBlock;
