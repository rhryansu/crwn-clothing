import React from "react";

function CategoryContainer(props) {
  return (
    <div id={props.id}>
      <div
        className="w-96 h-64 grid place-items-center
        text-center m-auto hover:opacity-80 ease-in-out duration-300 cursor-pointer"
        style={{ backgroundImage: `url(${props.url})` }}
      >
        <div>
          <h2 className="font-semibold text-white text-4xl">{props.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
