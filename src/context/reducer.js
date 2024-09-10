const reducer = (state, action) => {
  if (action.type === "GET_ALL_LIST") {
    return { ...state, allPokeList: action.payload };
  }
  if (action.type === "UPDATE_LIST") {
    const updatedList = state.allPokeList.filter((poke) => {
      return poke.name.includes(action.payload);
    });
    return { ...state, filteredList: updatedList, isLoading: false };
  }
  if (action.type === "POKE_URL") {
    return { ...state, pokemonURL: action.payload };
  }
  if (action.type === "CHOOSE_POKEMON") {
    return { ...state, thePokemon: action.payload };
  }
  if (action.type === "LOADING-TRUE") {
    return { ...state, isLoading: true };
  }
  if (action.type === "TOGGLE_THEME") {
    const newTheme = state.theme === "night" ? "winter" : "night";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("reactStationTheme", newTheme);

    return { ...state, theme: newTheme };
  }
};
export default reducer;
