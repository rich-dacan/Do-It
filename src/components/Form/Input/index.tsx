import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { IconType } from 'react-icons/lib'
import { resourceUsage } from 'process'

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

// Criado uma tipagem pra definir os tipos de cada elemento do objeto abaixo
type inputVariationOptions = {
  [key: string]: string,
}

const inputVariations: inputVariationOptions = {
  error: 'red.500',
  default: 'gray.200',
  focus: 'purple.800',
  filled: 'green.500',
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
{ name, error = null, icon:Icon, label, ...rest }, ref 
) => {

  // const inputsRef = useRef<HTMLInputElement>(null)

  const [variation, setVariation] = useState('default')
  const [value, setValue]         = useState('')
  
  useEffect(() => {

    if(error) {
      return setVariation('error')
    }

  }, [error])

  const handleInputFocus = useCallback(() => {
  
    if(!error) {
      return setVariation('focus')
    }

  }, [error])

  const handleInputBlur = useCallback(() => {

    if(value.length > 0 && !error) {

      return setVariation('filled')
    }

  }, [error, value])

  return (
    <FormControl isInvalid={!!error}>
      {/* 
          !! Converte pra boolean
          Se label existir, renderize <FormLabel/>
      */}
      {!!label && <FormLabel>{ label }</FormLabel>}

      <InputGroup flexDirection={"column"}>
      {Icon && 
        <InputLeftElement color={ inputVariations[variation] } mt={"1"} >
          <Icon/>
        </InputLeftElement>
      }
        <ChakraInput 
          ref={ref}
          {...rest} 
          name={name} 
          color={ inputVariations[variation] } 
          borderColor={ inputVariations[variation] }
          onFocus={ handleInputFocus }
          onBlurCapture={ handleInputBlur }
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          bg={"gray.50"} 
          variant={"outline"} 
          _hover={{bg: "gray.100"}} 
          _placeholder={{color: "gray.300", fontSize: "small"}} 
          size={"lg"} h={"60px"} 
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}

      </InputGroup>

    </FormControl>
  )
}
export const Input =  forwardRef(InputBase)
