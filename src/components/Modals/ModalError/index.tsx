/* eslint-disable react/jsx-no-undef */
import {
  Box,
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
  error?: string;
  buttonMessage: string;
  secondaryText: string;
  onClose: () => void;
}

export const ModalError: React.FC<ModalErrorProps> = ({
  isOpen,
  error,
  buttonMessage,
  secondaryText,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader borderBottom={"1px solid #ccc"}>
          <Flex>
            <Center
              bg={"red.600"}
              color={"white"}
              mr={"7px"}
              width={"30px"}
              height={"30px"}
              borderRadius={"5px"}
            >
              <FaExclamation />
            </Center>
            <Text fontWeight={"700"} textAlign={"center"}>
              Oops...
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton
          mt={"7px"}
          bg={"red.600"}
          color={"white"}
          _hover={{ bg: "red" }}
        />
        <ModalBody pt={"25px"}>
          <Text textAlign={"center"}>
            {error ? (
              <p>
                Ocorreu o seguinte erro: <b>"{error}!"</b>
              </p>
            ) : (
              "Ocorreu algum erro!"
            )}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Flex flexDirection={"column"} w={"100%"}>
            <Button
              variant="solid"
              bg="red.600"
              color="white"
              _hover={{ bg: "red" }}
              onClick={onClose}
            >
              {buttonMessage}
            </Button>
            <Text m={"20px 0 30px 0"} textAlign={"center"}>
              <Box
                dangerouslySetInnerHTML={{
                  __html: secondaryText,
                }}
              />
            </Text>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
