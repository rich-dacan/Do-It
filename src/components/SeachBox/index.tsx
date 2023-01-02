import { Button, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { Input } from "../Form/Input";
import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const SearchBox: React.FC = () => {
  return (
    <Flex
      mt={6}
      w={"100%"}
      p={["0 10px 0 10px", "0 60px 30px 60px"]}
      borderBottom={"2px solid #F5F5F5"}
      flexDirection={["column", "row"]}
      alignItems={["center", "stretch"]}
    >
      <Flex as={"form"} alignItems={"center"}>
        <Input
          name="Search Box"
          placeholder="Pesquisar por tarefa"
          w={["70vw", "35vw"]}
          border={"2px solid #0E0E0F"}
        />
        <Center
          as="button"
          cursor={"pointer"}
          fontSize={"2xl"}
          bg={"purple.600"}
          h={"60px"}
          ml={"4px"}
          width={"65px"}
          borderRadius={"5px"}
          _hover={{ bg: "purple.800" }}
        >
          <FaSearch size={32} color={theme.colors.white} />
        </Center>
      </Flex>
      <Button
        bg={"purple.500"}
        color={"white"}
        h={"60px"}
        w={["90vw", "250px"]}
        ml={["0px", "14px"]}
        mt={["10px", "0"]}
        _hover={{ bg: "purple.800" }}
      >
        Adicionar nova tarefa
      </Button>
    </Flex>
  );
};
