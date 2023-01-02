/* eslint-disable react/jsx-no-undef */
import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaExclamation } from "react-icons/fa";

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalError: React.FC<ModalErrorProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex>
            <Center
              bg={"red.600"}
              color={"white"}
              mr={"7px"}
              width={"25px"}
              height={"30px"}
              borderRadius={"5px"}
            >
              <FaExclamation />
            </Center>
            <Text textAlign={"center"}>Oops...</Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton
          bg={"red.600"}
          color={"white"}
          _hover={{ bg: "red" }}
        />
        <ModalBody>
          <Text textAlign={"center"}>Ocorreu algum erro!</Text>
        </ModalBody>

        <ModalFooter>
          <Flex flexDirection={"column"}>
            <Button
              variant="solid"
              bg="red.600"
              color="white"
              _hover={{ bg: "red" }}
              onClick={onClose}
            >
              Tentar novamente
            </Button>
            <Text m={"20px 0 30px 0"} textAlign={"center"}>
              Você já pode tentar novamente, <b>clicando</b> no botão acima ou
              aguarde alguns minutos...
            </Text>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
