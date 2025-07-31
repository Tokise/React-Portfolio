import React from "react";
import "./Loader.css";

export default function Loader({ theme }) {
  const loaderStyle = theme === "light" ? "loader-light" : "loader-dark";

  return (
    <div className={`loader ${loaderStyle}`}>
      <div className="spinner"></div>
      <p>Loading portfolio...</p>
    </div>
  );
}