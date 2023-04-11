import { SmallPokemon } from "@/interfaces";
import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
  const router = useRouter();
  const onPokemonClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Card isHoverable isPressable onClick={onPokemonClick}>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={img} width="100%" height={140} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{name}</Text>
          <Text>#{id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
