import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { FaExclamation} from 'react-icons/fa'
import { FieldError } from 'react-hook-form'
import { IconType } from 'react-icons/lib'

/*  
  Usa-se o extends para herdar todas as props vindo do InputProps do Chakra UI como as estilizações por exemplo; 
  Permite a utilização do operador ...rest.
*/
interface InputProps extends ChakraInputProps {
  name: string,
  label?: string,
  error?: FieldError | null
  icon?: IconType,

}

export const Input = ({name, error = null, icon:Icon, label, ...rest}: InputProps) => {
  return (
    <FormControl>
      {/* 
          !! Converte pra boolean
          Se label existir, renderize <FormLabel/>
      */}
      {!!label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection={"column"}>
      {Icon && 
        <InputLeftElement mt={"1"} >
          <Icon/>
        </InputLeftElement>
      }
        <ChakraInput {...rest} name={name} bg={"gray.50"} variant={"outline"} _hover={{bg: "gray.100"}} _placeholder={{color: "gray.300", fontSize: "small"}} size={"lg"} h={"60px"} />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>

    </FormControl>
  )
}
