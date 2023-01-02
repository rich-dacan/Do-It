import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export const Dashboard = () => {
  const { signOut } = useAuth();
  return (
    <Flex justify={"space-around"} color={"purple.500"}>

      <Heading as={'h1'}>
        Dashboard
      </Heading>
      <Button onClick={ signOut }> Logout </Button>
      
    </Flex>
  )
};
