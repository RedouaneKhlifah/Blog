import React from "react";
import { Chip } from "@material-tailwind/react";

export function CategoryChip({ value }) {
  return (
    <div className="flex gap-2">
      <Chip value={value} />
      {/* <Chip variant="gradient" value="chip gradient" />
      <Chip variant="outlined" value="chip outlined" />
      <Chip variant="ghost" value="chip ghost" /> */}
    </div>
  );
}

export default CategoryChip;
