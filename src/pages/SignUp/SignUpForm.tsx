import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import { Input } from "../../components/Form/Input";
import React from "react";

interface LoginFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignUpForm: React.FC<LoginFormProps> = ({
  handleSignUp,
  errors,
  register,
  loading,
}) => {
  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      padding="30px 15px"
      border="3px solid"
      borderRadius="3xl"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
      w={["100%", "100%", "40%", "40%"]}
      boxShadow={"-5px 5px 10px 1px #9e9ea7;"}
    >
      <Heading size="lg"> Crie sua conta </Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <Input
            placeholder="Digite seu nome"
            type="name"
            label="Nome"
            error={errors.name}
            icon={FaUserAlt}
            {...register("name")}
          />
          {!errors.name && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: João Sousa
            </Text>
          )}
        </Box>
        <Box w="100%">
          <Input
            placeholder="Digite seu login"
            type="email"
            label="Email"
            error={errors.email}
            icon={FaEnvelope}
            {...register("email")}
          />
          {!errors.email && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: nome@email.com
            </Text>
          )}
        </Box>
        <Input
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          error={errors.password}
          icon={FaLock}
          {...register("password")}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          label="Confirme sua senha"
          error={errors.confirmPassword}
          icon={FaLock}
          {...register("confirmPassword")}
        />
      </VStack>
      <Button
        type="submit"
        bg="purple.800"
        w="100%"
        color="white"
        h="60px"
        mt="4"
        borderRadius="8px"
        _hover={{
          background: "purple.500",
        }}
      >
        Finalizar cadastro
      </Button>
    </Grid>
  );
};
