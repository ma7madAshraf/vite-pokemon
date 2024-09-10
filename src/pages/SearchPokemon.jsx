import React from "react";
import searchBg from "../assets/searchBg.jpg";
import { useState } from "react";
import { usePokemon } from "../context/context";
import PokemonList from "../components/PokemonList";

const SearchPokemon = () => {
  const { updateList, filteredList } = usePokemon();

  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    updateList(searchVal);
  };

  return (
    <section>
      <article className="w-4/5 mx-auto    flex justify-center items-center ">
        <div>
          <h2 className="text-5xl mb-8 tracking-wide text-slate-900">
            Search Pokemon
          </h2>
          <form className="flex flex-col sm:flex-row items-center gap-y-4 gap-x-2">
            <label className=" input input-bordered flex items-center gap-2 outline-none">
              <input
                type="text"
                className="grow outline-none"
                placeholder="Search"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                autoFocus
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <button onClick={handleSearch} className="btn btn- btn-primary ">
              search
            </button>
          </form>
        </div>
      </article>
      {filteredList && <PokemonList />}
    </section>
  );
};

export default SearchPokemon;
