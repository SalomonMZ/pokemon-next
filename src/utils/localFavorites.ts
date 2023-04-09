const toggleFavorite = (id: number) => {
  console.log("toggleFavorite call");

  const { localStorage } = window;

  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId != id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isFavorite = (id: number): boolean => {
  console.log("isFavorite call");

  if (typeof window === "undefined") {
    return false;
  }

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorite,
  isFavorite,
  pokemons,
};
