import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Overlay from "../components/utils/Overlay";
import { useState } from "react";
import CategoryChip from "../components/utils/CategoryChip";
import CategoryList from "../components/CategoryList";

function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const categories = [
    "All",
    "category",
    "gaming",
    "sport",
    "proggramming",
    "sicence",
    "politics",
    "anime",
    "beayty",
    "computer programming",
    "Soundtrack",
    "All",
    "category",
    "gaming",
    "sport",
    "proggramming",
    "sicence",
    "politics",
    "anime",
    "beayty",
    "computer programming",
    "Soundtrack",
    "politics",
    "anime",
    "beayty",
  ];

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div className="z-10">
      {isOverlayOpen && <Overlay />}
      <Header overlayState={isOverlayOpen} onClick={toggleOverlay} />
      <div className="w-full flex justify-center pt-6">
        <div className="w-10/12 ">
          <CategoryList categories={categories} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
