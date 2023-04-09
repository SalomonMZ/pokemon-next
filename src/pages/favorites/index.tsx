import { useEffect, useState } from "react";

import { Layout } from "@/components/layouts";
import { FavoritePokemons, NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemon - Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemonsIDs={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
