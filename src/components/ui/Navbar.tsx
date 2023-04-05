import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="ditto"
        width={"50px"}
        height={"50px"}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemon
      </Text>

      {/* "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" */}
      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favoritos</Text>
    </div>
  );
};