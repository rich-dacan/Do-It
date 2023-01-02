import { Center, theme } from '@chakra-ui/react'
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface GoBackBtnProps {
  top: string;
  left: string;
  comeBack: () => void;
}

export const GoBackButton: React.FC<GoBackBtnProps> = ({ top, left, comeBack }) => {
  return (
    <Center 
      as="button" 
      position="absolute"
      top={top}  
      left={left}
      fontSize={"2xl"}
      width={["60px", "80px"]}
      height={["60px", "60px"]}
      bg={'purple.500'}
      _hover={{
        bg: "purple.600"
      }}
      borderRadius={'5px'}
      onClick={comeBack}
    >
      <FaArrowLeft 
        color={theme.colors.white}
        size={25}
      />
    </Center>
  )
}
