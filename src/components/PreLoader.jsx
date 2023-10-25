import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

import "./PreLoader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Cosmos</span>

        <span>Network</span>
        {/* <span></span> */}
      </div>
    </div>
  );
};

export default PreLoader;
