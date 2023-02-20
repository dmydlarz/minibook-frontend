import React from "react";

const ModalPhoto = (props: { photo: string; setActiveModal: Function }) => {
  return (
    <div className={"modalPhoto"} onClick={() => props.setActiveModal(false)}>
      <img src={props.photo} alt={"photo"} />
    </div>
  );
};

export default ModalPhoto;
