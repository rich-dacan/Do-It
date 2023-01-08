import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { SearchBox } from "../../components/SeachBox";
import { MainCard } from "../../components/Cards";

export const Dashboard = () => {
  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w={"100%"}
        // m={["0px", "35px 60px"]}
        mt={["20px", "0"]}
        templateColumns={"repeat(auto-fill, minmax(420px, 1fr))"}
        gap={10}
        paddingX={["2", "8"]}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(_ => (
          <MainCard />
        ))}
      </Grid>
      {/* <Flex flexWrap={"wrap"}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(_ => (
          <MainCard />
        ))}
      </Flex> */}
    </Box>
  );
};
