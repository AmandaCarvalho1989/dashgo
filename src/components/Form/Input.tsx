import { FormControl, FormLabel, Input as ChakraInput , InputProps as ChakraInputProps} from "@chakra-ui/react";
import React from "react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
}
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
