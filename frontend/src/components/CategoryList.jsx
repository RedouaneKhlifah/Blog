import React, { useState } from "react";
import CategoryChip from "./utils/CategoryChip";
import ArrowRight from "../assets/img/icon/Arrow_Right.png";
import ArrowLeft from "../assets/img/icon/Arrow_Left.png";

function CategoryList({ categories }) {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollLeft = () => {
    // Scroll to the left by a certain amount, e.g., 100px
    const scrollAmount = 100;
    setScrollLeft(scrollLeft + scrollAmount);
  };
  const handleScrollRight = () => {
    // Scroll to the right by a certain amount, e.g., 100px
    const scrollAmount = 100;
    const newScrollLeft = scrollLeft - scrollAmount;

    // Calculate the maximum scroll left position to prevent scrolling beyond the end
    const maxScrollLeft = -100 * (categories.length - 9);
    setScrollLeft(Math.max(newScrollLeft, maxScrollLeft));
    console.log("maxScrollLeft " + maxScrollLeft);
    console.log("newScrollLeft " + newScrollLeft);

    console.log("scrollLeft " + scrollLeft);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex space-x-4"
        style={{ transform: `translateX(${scrollLeft}px)` }}
      >
        {categories.map((category, key) => (
          <CategoryChip key={key} value={category} />
        ))}
      </div>
      {scrollLeft < 0 && (
        <div className="pr-2 absolute backdrop-blur-md bg-white left-0 top-1/2 transform -translate-y-1/2  ">
          <div className="bg-white backdrop-blur-md ">
            <button
              className="hover:bg-gray-300 px-2 py-1  rounded-full"
              onClick={handleScrollLeft}
            >
              <img
                className="w-4 inline-block"
                src={ArrowLeft}
                alt="arrowRight"
              />
            </button>
          </div>
        </div>
      )}
      {scrollLeft > -100 * (categories.length - 9) && (
        <div className="pl-2  absolute backdrop-blur-md bg-white right-0 top-1/2 transform -translate-y-1/2  ">
          <div className="bg-white backdrop-blur-md ">
            <button
              className="hover:bg-gray-300 px-2 py-1  rounded-full"
              onClick={handleScrollRight}
            >
              <img
                className="w-4 inline-block"
                src={ArrowRight}
                alt="arrowRight"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryList;
