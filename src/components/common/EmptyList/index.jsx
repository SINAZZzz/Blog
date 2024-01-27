import React from "react";
import "./styles.css";

const EmptyList = () => (
  <div className="main">
    <div className="text">
      <p>Not Found</p>
    </div>
    <div class="loadingspinner">
      <div id="square1"></div>
      <div id="square2"></div>
      <div id="square3"></div>
      <div id="square4"></div>
      <div id="square5"></div>
    </div>
  </div>
);

export default EmptyList;
