import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Overlay from "../components/utils/Overlay";
import { useState } from "react";

function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div className="z-10">
      {isOverlayOpen && <Overlay />}
      <Header overlayState={isOverlayOpen} onClick={toggleOverlay} />
      <Outlet />
    </div>
  );
}

export default Home;
