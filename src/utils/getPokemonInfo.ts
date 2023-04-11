import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (nameOrID: string) => {
  const {
    data: { id, name, sprites },
  } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrID}`);

  return {
    id,
    name,
    sprites,
  };
};
