import Head from "next/head";
import { FC, PropsWithChildren, useEffect } from "react";
import { Navbar } from "../ui";
import { useRouter } from "next/router";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

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
        <meta property="og:title" content="Find your pokemon" />
        <meta
          property="og:description"
          content="The best way to lookup for your chilhood pokemon"
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
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
