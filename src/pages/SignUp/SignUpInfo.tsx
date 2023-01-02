import React from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  theme,
} from "@chakra-ui/react";
import Logo from "../../assets/logo-secondary.svg";
import { FaForward } from "react-icons/fa";
import { MdOutlineBackupTable } from "react-icons/md";

export const SignUpInfo: React.FC = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingLeft={["10px", "10px", "100px"]}
    >
      <Image
        src={Logo}
        alt={"do_it_logo"}
        boxSize={["120px", "120px", "250px"]}
      />

      <VStack spacing="14">
        <Flex alignItems={"center"} w={"100%"}>
          <Center borderRadius="5px" bg="white" w="50px" h="50px" mr={"15px"}>
            <FaForward color={theme.colors.purple["800"]} size={25} />
          </Center>
          <Box>
            <Heading size={"lg"} mt={"3"}>
              Agilidade
            </Heading>
            <Text mt={"6px"} maxWidth={"300px"}>
              Agilize seus projetos com rapidez e muita performance
            </Text>
          </Box>
        </Flex>

        <Flex alignItems={"center"} w={"100%"}>
          <Center borderRadius="5px" bg="white" w="50px" h="50px" mr={"15px"}>
            <MdOutlineBackupTable
              color={theme.colors.purple["800"]}
              size={25}
            />
          </Center>
          <Box>
            <Heading size={"lg"} mt={"3"}>
              Simplicidade
            </Heading>
            <Text mt={"6px"} maxWidth={"300px"}>
              Armazene seus projetos em uma interface altamente usual
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
};
