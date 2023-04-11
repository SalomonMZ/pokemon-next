import { Layout } from "@/components/layouts";
import { GetStaticProps } from "next";
import { NextPage } from "next";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";
import Image from "next/image";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon List">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    data: { results },
  } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = results.map((pokeInfo) => {
    const idStr = pokeInfo.url.split("/");
    const id = Number(idStr[idStr.length - 2]);
    return {
      ...pokeInfo,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg
`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
