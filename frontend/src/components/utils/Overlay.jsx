import React from "react";

function Overlay(state) {
  console.log(state);
  return <div className="fixed inset-0 bg-black opacity-50 z-2 block"></div>;
}

export default Overlay;
