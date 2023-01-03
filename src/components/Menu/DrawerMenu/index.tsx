import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { RiLogoutBoxLine } from "react-icons/ri";
import { theme } from "../../../styles/theme";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
  const { signOut, user } = useAuth();

  return (
    <>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay mt={["15vh", "9vh"]} />
        <DrawerContent ml={"auto"} mt={"80px"} w={["450px", "350px"]}>
          <DrawerHeader
            borderBottomWidth="1px"
            color={"gray.400"}
            fontWeight={"700"}
          >
            {user.name}
          </DrawerHeader>
          <DrawerBody m={"20px 0px"}>
            <Flex alignItems={"center"}>
              <Center
                w={"60px"}
                height={"60px"}
                bg={"red.500"}
                borderRadius={"5px"}
                cursor={"pointer"}
                _hover={{
                  bg: "red.600",
                }}
                as={"button"}
                onClick={() => signOut()}
              >
                <RiLogoutBoxLine size={32} color={theme.colors.white} />
              </Center>
              <Flex flexDirection={"column"}>
                <Heading as={"h3"} size={"md"} ml={"2"}>
                  Sair da minha conta
                </Heading>
                <Text fontSize={"0.9rem"} ml={"2"} color={"gray.400"}>
                  Sair da minha conta agora
                </Text>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
