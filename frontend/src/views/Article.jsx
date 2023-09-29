import React from "react";
import ArticleCard from "../components/ArticleCard";

function Article() {
  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 pt-6 w-11/12">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}

export default Article;
