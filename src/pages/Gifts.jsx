import React from "react";

import { Link } from "react-router-dom";
import { usePokemon } from "../context/context";

const Gifts = () => {
  const { giftImages } = usePokemon();

  return (
    <>
      <h2 className="capitalize w-fit mx-auto border-b-2 text-5xl font-semibold pb-4 mb-16 ">
        poke gifts
      </h2>
      <article className="bg-base-200 rounded-btn grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 px-6 py-12 mt-20">
        {giftImages.map((img) => {
          return (
            <Link
              to={`/gifts/${img.id}`}
              className="card   bg-base-100  shadow-xl rounded-btn hover:shadow-2xl cursor-pointer"
              key={img.id}
              onClick={() => {}}
            >
              <figure className=" h-5/6">
                <img
                  src={img.url}
                  alt={img.title}
                  className="object-fit h-full"
                />
              </figure>
              <div className="card-body bg-base-200 h-1/6 justify-center ">
                <h2 className="card-title justify-center items-center">
                  {img.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </article>
    </>
  );
};

export default Gifts;
