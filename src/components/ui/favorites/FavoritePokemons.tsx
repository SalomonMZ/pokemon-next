import { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";
import { Grid } from "@nextui-org/react";

interface Props {
  favoritePokemonsIDs: number[];
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemonsIDs }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemonsIDs.map((favId) => (
        <FavoriteCardPokemon pokemonId={favId} key={favId} />
      ))}
    </Grid.Container>
  );
};
