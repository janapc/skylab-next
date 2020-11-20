import React, { useState } from "react";
import {
  Input as ChakraInput,
  InputProps,
  InputRightElement,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface IInput extends InputProps {
  text: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}

const Input: React.FC<IInput> = ({ text, iconLeft, iconRight, ...props }) => {
  const [focus, setFocus] = useState(false);
  
  return (
    <InputGroup
      alignItems="center"
      height="50px"
      {...props}
    >
      <InputLeftElement
        pointerEvents="none"
        width="3rem"
        height="100%"
        color={focus ? "#8257e5" : "#333"}
        children={iconLeft}
        _focus={{ color: '#fff'}}
      />
      <ChakraInput
        focusBorderColor="purple.500"
        backgroundColor="gray.800"
        fontSize="sm"
        placeholder={text}
        height="100%"
        borderRadius="sm"
        onBlur={(p) => setFocus(false)}
        onFocus={(p) => setFocus(true)}
      />
      <InputRightElement
        children={iconRight}
        color={focus ? "#8257e5" : "#333"}
        width="3rem"
        height="100%"
      />
    </InputGroup>
  );
};

export default Input;
