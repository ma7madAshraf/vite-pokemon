import { createContext, useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import gift1 from "../assets/gift1.jpg";
import gift2 from "../assets/gift2.jpg";
import gift3 from "../assets/gift3.jpg";
import gift4 from "../assets/gift4.jpg";
import gift5 from "../assets/gift5.jpg";
import gift6 from "../assets/gift6.jpg";
import gift7 from "../assets/gift7.jpg";
import gift8 from "../assets/gift8.jpg";
import gift9 from "../assets/gift9.jpg";
import gift10 from "../assets/gift10.jpg";

const initialState = {
  allPokeList: [],
  filteredList: [
    { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "magneton", url: "https://pokeapi.co/api/v2/pokemon/82/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
  ],
  pokemonURL: "",
  giftImages: [
    { url: gift1, title: "Charizard ", id: "1" },
    { url: gift2, title: "eevee figurine", id: "2" },
    { url: gift3, title: "poke cards", id: "3" },
    { url: gift4, title: "Pikachu & Squirtle", id: "4" },
    { url: gift5, title: "poke figurine", id: "5" },
    { url: gift6, title: "Snorlax ", id: "6" },
    { url: gift7, title: "Pikachu doll", id: "7" },
    { url: gift8, title: "poke play", id: "8" },
    { url: gift9, title: "Lapras ", id: "9" },
    { url: gift10, title: "Charizard", id: "10" },
  ],
  thePokemon: {},
  isLoading: false,
  theme: "winter",
};

const PokeContext = createContext();
const PokeProvider = ({ children }) => {
  useEffect(() => {}, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  // get all pokemons
  const getAllList = async () => {
    try {
      const resp = await axios(
        "https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0"
      );
      const allList = resp.data.results;
      dispatch({ type: "GET_ALL_LIST", payload: allList });
    } catch (error) {
      console.log(error);
    }
  };

  //update filtered list
  const updateList = (searchVal) => {
    dispatch({ type: "LOADING-TRUE" });

    dispatch({ type: "UPDATE_LIST", payload: searchVal });
  };

  // choose pokemon
  const updatePokemon = async (link) => {
    dispatch({ type: "CHOOSE_POKEMON", payload: link });
  };
  const updatePokemonUrl = (url) => {
    dispatch({ type: "POKE_URL", payload: url });
  };
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    getAllList();
  }, []);
  return (
    <PokeContext.Provider
      value={{
        ...state,
        updateList,
        updatePokemon,
        updatePokemonUrl,
        toggleTheme,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export const usePokemon = () => useContext(PokeContext);
export { PokeProvider };

[
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
  { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
  { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
  { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
  { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
  { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
  { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
];
