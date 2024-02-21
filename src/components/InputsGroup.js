import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const InputsGroup = ({name, onChangeHandler, errors}) => {
  return (
    <FormControl isInvalid={errors}>
        <FormLabel>{name}</FormLabel>
        <Input type='text' name={name} onChange ={onChangeHandler} />
        {errors &&
        errors?.map((err) =>{
            return (<FormErrorMessage>{err}</FormErrorMessage>);
        })}
    </FormControl>
  );
};

export default InputsGroup