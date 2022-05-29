import { Box, Button, Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { FaEnvelope, FaLock } from 'react-icons/fa'
import Logo from '../../assets/logo-secondary.svg'
import {Input} from '../../components/Form/Input'
import { useAuth } from '../../contexts/AuthContext'

interface SignInData {
  email: string,
  password: string,
}

export const Login = () => {

  const [ loading, setLoading ] = useState(false)
  const { signIn, user } = useAuth()

  const signInSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório!").email('Email inválido!'),
    password: yup.string().required('Senha obrigatória!'),
  })

  console.log(user);

  const { formState: { errors }, register, handleSubmit} = useForm<SignInData>({
    resolver: yupResolver(signInSchema)
  })
  
  const handleSignIn = ({ email, password }: SignInData) => {

    setLoading(true)

    signIn({ email, password })
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false))

    
  }

  return (
    <Flex
      p={["10px 15px ", "10px 15px", "0", "0"]}
      align={"center"}
      justify={"center"}
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 50%, #fff 50%)",
        "linear(to-b, purple.800 50%, #fff 50%)",
        "linear(to-r, purple.800 65%, #fff 35%)",
        "linear(to-r, purple.800 65%, #fff 35%)"
      ]}
      color={"#fff"}
    >
      <Flex 
        w={["100%", "80%", "90%", "70%"]} 
        justify={"center"} 
        alignItems={["flex-start","center"]}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Grid w={["100%", "100%", "50%", "50%"]} paddingRight={"100px"}>
          <Image 
            src={Logo} 
            alt={"do_it_logo"} 
            boxSize={["120px", "120px","250px"]}
            
          />
          <Heading as={"h1"} mt={"3"}> 
            O jeito fácil, grátis 
          </Heading>
          <Text w={['300px', '330px']} mt={"3"} >
            flexível e atrativo de gerenciar 
            <b> seus projetos em uma única plataforma!</b>
          </Text>
        </Grid>
        <Grid 
          onSubmit={ handleSubmit(handleSignIn) }
          as={"form"} 
          mt={"14"} 
          w={["100%", "90%", "40%", "40%"]} 
          p={"30px 15px"} 
          border={"3px solid"} 
          borderColor={"gray.100"} 
          borderRadius={"5px"} 
          bg={"#FFF"} 
          color={"gray.900"} 
          mr={"100px"}
        >   
          <Heading size={"lg"} textAlign={"center"}>
            Bem vindo de volta!
          </Heading>
          <VStack mt={"4"} spacing={"6"}>
            <Box w={"100%"} >
              <Input 
                type={"email"} 
                placeholder='Digite seu email' 
                icon={FaEnvelope} 
                label='Email'
                error={errors.email}
                {...register("email")}
              />
              {!errors.email && <Text fontSize={"xs"} ml={1} mt={2.5} color={"gray.300"} >Ex: name@email.com</Text>}
            </Box>
            <Input 
              type={"password"} 
              placeholder='Digite sua senha' 
              icon={FaLock} 
              label='Senha' 
              error={errors.password}
              {...register("password")}
            />
          </VStack>
          <VStack m={4} spacing={5}>
            <Button 
              isLoading={loading}
              type='submit' 
              w={"100%"}
              mt={"40px"} 
              h={"60px"}
              bg={'purple.800'} 
              color={"#fff"}
              _hover={{bg: 'purple.900'}}
            > 
              Entrar 
            </Button>
            <Text color={'gray.400'} fontSize={"sm"} mt={"5"}>Ainda não possui uma conta?</Text>
            <Button
              isLoading={loading} 
              type='submit' 
              w={"100%"}
              mt={"40px"} 
              h={"60px"}
              bg={'gray.100'} 
              color={"gray.300"}
              _hover={{bg: 'gray.200', color: 'gray.400'}}
            >Cadastrar</Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  )
}
