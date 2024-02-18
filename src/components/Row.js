import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { AiFillAccountBook, AiFillDelete, AiFillEdit } from 'react-icons/ai';

const Row = () => {
    return (
        <Tr>
            <Td>
                <Avatar name="nom prenom"></Avatar>
            </Td>
            <Td>feet</Td>
            <Td>fatt</Td>
            <Td>centimetres (cm)</Td>
            <Td >
                <Box display="flex" gap="1">
                    <Button colorScheme='blue'>
                        <AiFillAccountBook />
                    </Button>
                    <Button colorScheme='yellow'>
                        <AiFillEdit />
                    </Button>
                    <Button colorScheme='red'>
                        <AiFillDelete />
                    </Button>
                </Box>
            </Td>
        </Tr>
    );
};

export default Row;