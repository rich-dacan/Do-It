import { Box } from "@chakra-ui/react";
import React from "react";

import { Header } from "../../components/Header";
import { SearchBox } from "../../components/SeachBox";

export const Dashboard = () => {
  return (
    <Box>
      <Header />
      <SearchBox />
    </Box>
  );
};
