import { Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import Logo from '../../assets/logo-secondary.svg'
import {Input} from '../../components/Form/Input'

export const Login = () => {
  const { formState: {errors}, register, handleSubmit} = useForm()
  return (
    <Flex
      p={"10px 15px "}
      align={"center"}
      height={"100vh"}
      bgGradient={"linear(to-r, purple.800 65%, #fff 35%)"}
      color={"#fff"}
    >
      <Flex w={"100%"} justify={"center"} flexDirection={"row"}>
        <Grid w={"100%"} paddingRight={"100px"}>

         <Image src={Logo} alt={"do_it_logo"} boxSize={"120px"}/>
         <Heading as={"h1"}> O jeito fácil, grátis </Heading>
         <Text>
           flexível e atrativo de gerenciar 
           <b>seus projetos em uma única plataforma!</b>
         </Text>
        </Grid>
        <Grid as={"form"} mt={"4"} w={"100%"} p={"30px 15px"} border={"3px solid"} borderColor={"gray.100"} borderRadius={"5px"} bg={"#FFF"} color={"gray.900"} mr={"100px"}>   
          <Heading size={"lg"}>
            Bem vindo de volta!
          </Heading>
          <VStack mt={"4"} spacing={"6"}>
            <Input placeholder='Digite seu email' icon={FaEnvelope} name='email' label='Email'/>
            <Input type={"password"} placeholder='Digite sua senha' icon={FaLock} label='Senha' {...register("password")}/>
          </VStack>
        </Grid>

      </Flex>
    </Flex>
  )
}
