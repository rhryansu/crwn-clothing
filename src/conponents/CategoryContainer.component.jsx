import React from "react";

function CategoryContainer(props) {
  return (
    <div className="h-64 w-96 flex grow hover:opacity-80 ease-in-out duration-300 cursor-pointer">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${props.url})` }}
      >
        <div className="flex w-full h-full items-center justify-center">
          <h2 className="font-semibold text-white text-4xl">{props.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
