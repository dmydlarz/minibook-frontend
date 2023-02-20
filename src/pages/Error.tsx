import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = (props: { pageUrl: string }) => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate(props.pageUrl);
  }, 2500);
  return (
    <div
      style={{
        margin: "250px auto",
        textAlign: "center",
        fontSize: "32px",
        height: "50vh",
      }}
    >
      <div>404 Error</div>
      <div>Page Not Found</div>
    </div>
  );
};

export default Error;
