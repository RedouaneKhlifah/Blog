import React from "react";
import { Input, Button } from "@material-tailwind/react";
import SearchIcon from "../../assets/img/icon/search.png";

export function SearchInpute() {
  return (
    <div className="flex justify-center items-center gap-0">
      <input
        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border border-r-0 focus:border-1  text-sm px-3 py-2.5  border-blue-gray-200 focus:border-gray-900  pr-20 rounded-l-2xl"
        type="text"
      />
      <Button size="sm" className="rounded-none rounded-r-2xl h-[37px]">
        <img className="h-4 " src={SearchIcon} alt="Search icon" />
      </Button>
    </div>
  );
}
export default SearchInpute;
