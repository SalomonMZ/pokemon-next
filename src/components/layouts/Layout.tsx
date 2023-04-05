import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Salomon Moreno" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title || "Unknown"}`}
        />
        <meta
          name="keywords"
          content={`${title || "Unknown"}, pokemon, pokedex`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
