import React, { useState } from "react";
import { usePokemon } from "../context/context";
import pokeBall from "../assets/pokeBall.jpg";

import { Link } from "react-router-dom";

const PokemonList = () => {
  const { filteredList, updatePokemonUrl, isLoading } = usePokemon();
  const [itemsCount, setItemsCount] = useState(10);
  const handleSeeMore = () => {
    filteredList.length > itemsCount + 10
      ? setItemsCount(itemsCount + 10)
      : setItemsCount(filteredList.length);
  };
  if (isLoading) {
    return (
      <article className="h-60 w-full flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>;
      </article>
    );
  }

  return (
    <article className="bg-base-200 rounded-btn  mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 px-6 py-12">
        {filteredList.slice(0, itemsCount).map((poke) => {
          const { name, url } = poke;
          const pokeId = url.match(/\d/g).slice(1).join("");
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
          return (
            <Link
              to={`/pokemon/${pokeId}`}
              className="card   bg-base-100  shadow-xl rounded-btn hover:shadow-2xl cursor-pointer"
              key={name}
              onClick={() => {
                updatePokemonUrl(url);
              }}
            >
              <figure>
                <img src={imgUrl} id={imgUrl} className="w-48" />
              </figure>
              <div className="card-body bg-base-200">
                <h2 className="card-title justify-center">{name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
      {filteredList.length > 10 && (
        <div>
          {filteredList.length > itemsCount && (
            <button
              className="btn btn-secondary block mx-auto mb-8 capitalize text-lg"
              onClick={handleSeeMore}
            >
              {" "}
              show more
            </button>
          )}
          {filteredList.length === itemsCount && (
            <button
              className="btn btn-secondary block mx-auto mb-8 capitalize text-lg"
              onClick={() => setItemsCount(10)}
            >
              {" "}
              show less
            </button>
          )}
        </div>
      )}
    </article>
  );
};

export default PokemonList;
