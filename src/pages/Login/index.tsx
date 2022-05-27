import { Button, Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { FaEnvelope, FaLock } from 'react-icons/fa'
import Logo from '../../assets/logo-secondary.svg'
import {Input} from '../../components/Form/Input'

interface SignInData {
  email: string,
  password: string,
  // onSubmit: SubmitHandler<FormValues>,
}

export const Login = () => {

  const signInSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório!").email('Email inválido!'),
    password: yup.string().required('Senha obrigatória!').min(8),
  })

  const { formState: { errors }, register, handleSubmit} = useForm<SignInData>({
    resolver: yupResolver(signInSchema)
  })
  
  const handleSignIn = (data: SignInData) => console.log(data)

  return (
    <Flex
      p={"10px 15px "}
      align={"center"}
      height={"100vh"}
      bgGradient={"linear(to-r, purple.800 65%, #fff 35%)"}
      color={"#fff"}
    >
      <Flex 
        w={"100%"} 
        justify={"center"} 
        flexDirection={"row"}
      >
        <Grid w={"100%"} paddingRight={"100px"}>

          <Image src={Logo} alt={"do_it_logo"} boxSize={"120px"}/>
          <Heading as={"h1"}> 
            O jeito fácil, grátis 
          </Heading>
          <Text>
            flexível e atrativo de gerenciar 
            <b>seus projetos em uma única plataforma!</b>
          </Text>
        </Grid>
        <Grid 
          onSubmit={ handleSubmit(handleSignIn) }
          as={"form"} 
          mt={"4"} 
          w={"100%"} 
          p={"30px 15px"} 
          border={"3px solid"} 
          borderColor={"gray.100"} 
          borderRadius={"5px"} 
          bg={"#FFF"} 
          color={"gray.900"} 
          mr={"100px"}
        >   
          <Heading size={"lg"}>
            Bem vindo de volta!
          </Heading>
          <VStack mt={"4"} spacing={"6"}>
            <Input 
              type={"email"} 
              placeholder='Digite seu email' 
              icon={FaEnvelope} 
              label='Email'
              error={errors.email}
              {...register("email")}
            />
            <Input 
              type={"password"} 
              placeholder='Digite sua senha' 
              icon={FaLock} 
              label='Senha' 
              error={errors.password}
              {...register("password")}
            />
          </VStack>
          <Button type='submit' mt={"40px"} bg={'purple.800'} color={"#fff"}> Entrar </Button>
        </Grid>
      </Flex>
    </Flex>
  )
}
