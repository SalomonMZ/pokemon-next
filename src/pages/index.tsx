import { Layout } from "@/components/layouts";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <>
        <h1>Hello World</h1>
        <Button color="gradient">Hi there!</Button>
      </>
    </Layout>
  );
};

export default HomePage;
