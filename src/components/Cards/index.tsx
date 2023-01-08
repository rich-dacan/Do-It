import { Box, Center, Flex, Heading, Progress, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const MainCard: React.FC = () => {
  return (
    <Box
      m={["0px", "35px 60px"]}
      ml={["10px"]}
      w={["90vw", "456px"]}
      p={["10px", "20px 25px"]}
      cursor={"pointer"}
      transition={"border 0.2s, ease 0s, transform 0.2s"}
      borderRadius={"5px"}
      borderWidth={"1px"}
      borderColor={"gray.50"}
      boxShadow={"md"}
      _hover={{ transform: "translateY(-7px)", borderColor: "gray.100" }}
    >
      <Flex>
        <Heading as={"h2"} fontSize={"20px"}>
          Studying database-driven concepts
        </Heading>
        <Flex>
          <Center
            as="button"
            w={"30px"}
            h={"30px"}
            ml={"25px"}
            border={"1px solid #9E9EA7"}
            borderRadius={"5px"}
            _hover={{ bg: "gray.100" }}
          >
            <FaTrash size={18} color={theme.colors.gray["300"]} />
          </Center>
          <Center
            as="button"
            w={"30px"}
            h={"30px"}
            ml={"25px"}
            border={"1px solid #9E9EA7"}
            borderRadius={"5px"}
            _hover={{ bg: "gray.100" }}
          >
            <FaCheck size={18} color={theme.colors.gray["300"]} />
          </Center>
        </Flex>
      </Flex>
      <Text color={"gray.400"} fontSize={"14px"} mt={"15px"}>
        Start study through Kenzie app, for 1 hour and a half
      </Text>
      <Progress size="sm" isIndeterminate mt={"15px"} colorScheme={"purple"} />
      <Text color={"gray.300"} fontSize={"12px"} mt={"15px"}>
        07 March 2021
      </Text>
    </Box>
  );
};
