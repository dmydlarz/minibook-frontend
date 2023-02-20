import React from "react";
import { Link } from "react-router-dom";
interface ButtonProp {
  text: string;
  link: string;
}

const DefaultButton = (props: ButtonProp) => {
  const { text, link } = props;
  return (
    <Link to={link} className={"no-link"}>
      <button className="default-button">{text}</button>
    </Link>
  );
};

export default DefaultButton;
