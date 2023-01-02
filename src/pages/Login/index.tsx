import { Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/AuthContext";
import { LoginInfo } from "./LoginInfo";
import { LoginForm } from "./LoginForm";
import { ModalSuccess } from "../../components/Modals/ModalSuccess";
import { ModalError } from "../../components/Modals/ModalError";
import { useHistory } from "react-router-dom";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  // const {
  //   isOpen: isModalSuccessOpen,
  //   onOpen: onModalSuccessOpen,
  //   onClose: onModalSuccessClose,
  // } = useDisclosure();

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const handleSignIn = ({ email, password }: any) => {
    setLoading(true);
    signIn({ email, password })
      .then(_ => {
        setLoading(false);
        // onModalSuccessOpen();
      })
      .catch(err => {
        setLoading(false);
        onModalErrorOpen();
        setError(err.response.data);
      });
  };

  return (
    <>
      {/* <ModalSuccess
        message="Login realizado com sucesso, <b>vamos lá!</b>"
        buttonMessage={""}
        secondaryText={
          "Você já pode começar criando <b>suas listas</b> de tarefas agora mesmo..."
        }
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
        redirect={() => history.push("/")}
      /> */}

      <ModalError
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
        error={error}
        buttonMessage={"Tentar novamente"}
        secondaryText={
          error === "Cannot find user"
            ? "Credenciais inválidas. <br/>Verifique seu email/senha e tente novamente."
            : "Você já pode começar criando <b>suas listas</b> de tarefas agora mesmo..."
        }
      />
      <Flex
        padding={["10px 15px", "10 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        height={["auto", "auto", "100vh", "100vh"]}
        bgGradient={[
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-r, purple.800 65%, white 35%)",
          "linear(to-r, purple.800 65%, white 35%)",
        ]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "90%", "65%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          <LoginInfo />
          <LoginForm
            errors={errors}
            handleSignIn={handleSubmit(handleSignIn)}
            loading={loading}
            register={register}
          />
        </Flex>
      </Flex>
    </>
  );
};
