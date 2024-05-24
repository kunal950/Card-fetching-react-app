import React from "react";

const Card = ({ index, url }) => {
  return (
    <div className="w-[300px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px] mb-10 mx-1">
      <div className="overflow-hidden bg-black">
        <div className="mt-5 mx-10">
          <img src={url} />
        </div>

        <div className=" text-center p-4 text-purple-900">
          <p className="font-bold text-lg leading-6">Card {index}</p>
          <p className="pb-5">This is card {index} description</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
