import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpInfo } from "./SignUpInfo";
import { SignUpForm } from "./SignUpForm";
import { GoBackButton } from "../../components/Buttons/GoBackButton";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { ModalSuccess } from "../../components/Modals/ModalSuccess";
import { ModalError } from "../../components/Modals/ModalError";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

// interface SignUpData {
//   name: string;
//   email: string;
//   password: string;
// }

export const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = ({ name, email, password }: any) => {
    setLoading(true);

    api
      .post("/register", { name, email, password })
      .then(res => {
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch(err => {
        setLoading(false);
        onModalErrorOpen();
      });
  };

  return (
    <>
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
        redirect={() => history.push("/")}
      />

      <ModalError isOpen={isModalErrorOpen} onClose={onModalErrorClose} />

      <Flex
        padding={["10px 15px 50px 15px", "10 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        height={["auto", "auto", "100vh", "100vh"]}
        bgGradient={[
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
        ]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "90%", "65%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
        >
          {isWideVersion ? (
            <>
              <GoBackButton
                top="50px"
                left="35px"
                comeBack={() => history.push("/")}
              />
              <SignUpForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                loading={loading}
                register={register}
              />
              <SignUpInfo />
            </>
          ) : (
            <>
              <GoBackButton
                top="28px"
                left="75vw"
                comeBack={() => history.push("/")}
              />
              <SignUpInfo />
              <SignUpForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                loading={loading}
                register={register}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};
