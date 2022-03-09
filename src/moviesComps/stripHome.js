import React from "react";
import "./css/home.css";

export const StripHome = (props) => {
  return (
    <div
      style={{ backgroundImage: "url(/images/stripMovies2.jpg)" }}
      className="strip_home container-fluid d-flex align-items-center"
    >
      <div className="container text-center"></div>
    </div>
  );
};
