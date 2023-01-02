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

interface ModalSuccessProps {
  isOpen: boolean;
  message: string;
  buttonMessage: string;
  secondaryText: string;
  onClose: () => void;
  redirect?: () => void;
}

export const ModalSuccess: React.FC<ModalSuccessProps> = ({
  isOpen,
  message,
  buttonMessage,
  secondaryText,
  onClose,
  redirect,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader borderBottom={"1px solid #ccc"}>
          <Flex>
            <Center
              bg={"purple.500"}
              color={"white"}
              mr={"7px"}
              width={"30px"}
              height={"30px"}
              borderRadius={"5px"}
            >
              <FaExclamation size={20} />
            </Center>
            <Text fontWeight={"bold"} textAlign={"center"}>
              Yesss...
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton
          mt={"7px"}
          bg={"red.600"}
          color={"white"}
          _hover={{ bg: "red" }}
        />
        <ModalBody>
          <Text textAlign={"center"}>
            <Box
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            />
          </Text>
        </ModalBody>

        <ModalFooter>
          <Flex flexDirection={"column"}>
            <Button
              variant="solid"
              bg="purple.500"
              color="white"
              height={"60px"}
              _hover={{ bg: "purple.800" }}
              onClick={redirect}
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
