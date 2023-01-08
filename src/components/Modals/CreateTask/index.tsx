import React from "react";
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
  VStack,
} from "@chakra-ui/react";
import { BiTask } from "react-icons/bi";
import { Input } from "../../Form/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { theme } from "../../../styles/theme";
import { TextArea } from "../../Form/TextArea";

interface CrateTaskProps {
  isOpen: boolean;
  error?: string;
  onClose: () => void;
}

const createTaskSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório").max(100),
});

export const CrateTask: React.FC<CrateTaskProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader borderBottom={"1px solid #ccc"}>
          <Flex>
            <Center
              bg={"purple.600"}
              color={"white"}
              mr={"7px"}
              width={"30px"}
              height={"30px"}
              borderRadius={"5px"}
            >
              <BiTask color={theme.colors.white} />
            </Center>
            <Text fontWeight={"700"} textAlign={"center"}>
              Adicionar
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton
          mt={"7px"}
          bg={"red.600"}
          color={"white"}
          _hover={{ bg: "red" }}
        />
        <ModalBody as={"form"}>
          <VStack spacing={"5"} mt={"4"}>
            <Input
              label="Titulo"
              // error={errors.title}
              {...register("title")}
              placeholder="Digite o título"
            />
            <TextArea
              label="Descrição"
              // error={errors.description}
              {...register("description")}
              placeholder="Digite sua descrição"
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Flex flexDirection={"column"} w={"100%"}>
            <Button
              variant="solid"
              bg="purple.600"
              color="white"
              _hover={{ bg: "purple.800" }}
              onClick={onClose}
            >
              Adicionar Tarefa
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
