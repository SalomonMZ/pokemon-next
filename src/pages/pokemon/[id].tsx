import { pokeApi } from "@/api";
import { GetStaticPaths } from "next";
import { Layout } from "@/components/layouts";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Pokemon } from "@/interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonDetailPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Some pokemon">
      <h1>Hello {pokemon.name}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemon151.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data: pokemon } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonDetailPage;
