import { Box, Button } from "@mui/material";
import React from "react";
import { Content, Hero, Sidebar } from "src/components";
import Layout from "src/layout";
const Home = () => {
  return (
    <Layout>
      <Hero blogs={{ data: "name" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 20,
          padding: "20px",
        }}
      >
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
};

export default Home;
