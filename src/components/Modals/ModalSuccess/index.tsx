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

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  redirect?: () => void;
}

export const ModalSuccess: React.FC<ModalSuccessProps> = ({
  isOpen,
  onClose,
  redirect,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex>
            <Center
              bg={"purple.500"}
              color={"white"}
              mr={"7px"}
              width={"25px"}
              height={"30px"}
              borderRadius={"5px"}
            >
              <FaExclamation size={20} />
            </Center>
            <Text textAlign={"center"}>Yesss...</Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton
          bg={"red.600"}
          color={"white"}
          _hover={{ bg: "red" }}
        />
        <ModalBody>
          <Text textAlign={"center"}>
            Seu cadastro deu super certo, <b>vamos lá</b>
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
              Ir para o login agora
            </Button>
            <Text m={"20px 0 30px 0"} textAlign={"center"}>
              Você já pode começar criando <b>suas listas</b> de tarefas agora
              mesmo...
            </Text>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
