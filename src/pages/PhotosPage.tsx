import React, { useState } from "react";
import photo from "../assets/autumn.jpg";
import ModalPhoto from "../components/ModalPhoto/ModalPhoto";
import Header from "../components/Header/Header";

const photos: { photo: string }[] = [];
for (let i = 0; i <= 29; i++) photos.push({ photo });

const PhotosPage = () => {
  const [activeModal, setActiveModal] = useState(false);

  const [activePhoto, setActivePhoto] = useState(photos[0].photo);
  return (
    <>
      {activeModal && (
        <ModalPhoto photo={activePhoto} setActiveModal={setActiveModal} />
      )}
      <Header />
      <div className={"photosPage"}>
        <span className={"default-title"}>Photos</span>
        <div className={"photosPage__images-container"}>
          {photos.map((elem) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              src={elem.photo}
              onClick={() => {
                setActivePhoto(elem.photo);
                setActiveModal(true);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotosPage;
