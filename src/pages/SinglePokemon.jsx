import axios from "axios";
import React, { useEffect, useState } from "react";
import pokeCard from "../assets/pokemonCard.png";
import loading from "../assets/loading.gif";

import { Link, useLoaderData } from "react-router-dom";
const pokeQuery = (params) => {
  return {
    queryKey: ["pokemon", params],
    queryFn: () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;
      return axios(url);
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const resp = await queryClient.ensureQueryData(pokeQuery(params));
    return resp.data;
  };
const SinglePokemon = () => {
  const thePokemon = useLoaderData();

  const [isFlipped, setIsFlipped] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const frontView = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${thePokemon.id}.png`;
  const backView = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${thePokemon.id}.png`;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeout(() => setIsFlipped(false), 3000);
  }, []);
  if (thePokemon.name) {
    return (
      <div className="">
        <h2 className="uppercase text-3xl w-fit p-2 mx-auto mb-6 border-b-2  ">
          {thePokemon.name}
        </h2>
        {isLoading && (
          <div>
            <img
              src={loading}
              alt="loader"
              className="mx-auto mt-24 rounded-btn"
            />
          </div>
        )}
        {!isLoading && (
          <div
            style={{ transformStyle: "preserve-3d" }}
            className={`${
              isFlipped ? `[transform:rotateY(180deg)]` : ``
            }  relative duration-1000 w-[288.5px] h-[400px]  mx-auto  `}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* front face */}
            {!isLoading && (
              <div
                style={{ backfaceVisibility: "hidden" }}
                className=" card bg-yellow-300 h-full  shadow-xl p-4 flex flex-col gap-y-4"
              >
                <div className="flex justify-around text-lg font-bold text-slate-900  capitalize">
                  <p className="capitalize ">{thePokemon.name}</p>
                  {thePokemon.stats && (
                    <p className=" text-xl">
                      <span className="text-xs font-semibold">
                        {thePokemon.stats[0].stat.name}{" "}
                      </span>
                      {thePokemon.stats[0].base_stat}
                    </p>
                  )}
                </div>

                <div className="shadow-inner rounded-btn shadow-black bg-yellow-100 flex justify-around overflow-hidden">
                  <img src={frontView} alt="poke img" className="w-32" />
                  <img src={backView} alt="poke img" className="w-32" />
                </div>

                <div className="type flex justify-around">
                  {thePokemon.types &&
                    thePokemon.types.map((type, index) => {
                      return (
                        <h3
                          key={index}
                          className="bg-primary text-neutral-content w-fit py-1 px-2 text-lg font-semibold capitalize rounded-btn"
                        >
                          {type.type.name}
                        </h3>
                      );
                    })}
                </div>

                <div className="flex flex-col gap-y-2 my-1 font-semibold">
                  {thePokemon.abilities &&
                    thePokemon.abilities.map((ab, index) => {
                      return (
                        <h4
                          key={index}
                          className="badge badge-secondary p-2 capitalize"
                        >
                          {" "}
                          {ab.ability.name}
                        </h4>
                      );
                    })}
                </div>
                <div className=" grid grid-cols-2 gap-x-1 border border-slate-500 p-2 rounded-btn gap-y-1 text-slate-800">
                  {thePokemon.stats &&
                    thePokemon.stats.map((stat, index) => {
                      return (
                        <div
                          key={index}
                          className="grid grid-cols-5 gap-x-2 text-xs"
                        >
                          <div className="badge badge-warning w-full capitalize col-span-4  ">
                            {stat.stat.name.length > 12
                              ? stat.stat.name.replace("special", "Sp")
                              : stat.stat.name}
                          </div>
                          {stat.base_stat}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
            {/* back face */}
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="face absolute top-0 [transform:rotateY(180deg)]"
            >
              <div className="image">
                <img src={pokeCard} alt="" />
              </div>
            </div>
          </div>
        )}
        <Link
          to="/pokemon"
          className="btn btn-primary w-fit flex items-center mx-auto mt-24 capitalize text-xl font-semibold"
        >
          back to search{" "}
        </Link>
      </div>
    );
  }
};

export default SinglePokemon;
