import React from "react";
import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo-secondary.svg";

export const LoginInfo: React.FC = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingRight={"100px"}
      filter={"drop-shadow(15px 5px 10px #000)"}
    >
      <Image
        src={Logo}
        alt={"do_it_logo"}
        boxSize={["120px", "120px", "250px"]}
      />
      <Heading as={"h1"} mt={"3"}>
        O jeito fácil, grátis
      </Heading>
      <Text w={["300px", "330px"]} mt={"3"}>
        flexível e atrativo de gerenciar
        <b> seus projetos em uma única plataforma!</b>
      </Text>
    </Grid>
  );
};
