import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../assets/logo-secondary.svg'

export const Login = () => {
  return (
    <Flex
      p={"10px 15px "}
      align={"center"}
      height={"100vh"}
      bgGradient={"linear(to-r, purple.800 65%, #fff 35%)"}
      color={"#fff"}
    >
      <Image src={Logo}/>
    </Flex>
  )
}
