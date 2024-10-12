import { Button } from "@mui/material";
import React from "react";
import { Hero } from "src/components";
import Layout from "src/layout";
const Home = () => {
  return (
    <Layout>
      <Hero blogs={{ data: "name" }} />
    </Layout>
  );
};

export default Home;
