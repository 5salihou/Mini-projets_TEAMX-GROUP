import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import { React, useContext } from 'react';
import { AiFillAccountBook, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContexte } from "../../contexte/Wrapper";

const Row = ({ id, firstname, lastname, address }) => {
    const { Delete } = useContext(GlobalContexte);
    return (
        <Tr>
            <Td>
                <Avatar name={firstname}></Avatar>
            </Td>
            <Td>{firstname}</Td>
            <Td>{lastname}</Td>
            <Td>{address}</Td>
            <Td >
                <Box display="flex" gap="1">
                    <Button colorScheme='blue'>
                        <AiFillAccountBook />
                    </Button>
                    <Button colorScheme='yellow'>
                        <AiFillEdit />
                    </Button>
                    <Button colorScheme='red' onClick={() => Delete(id)}>
                        <AiFillDelete />
                    </Button>
                </Box>
            </Td>
        </Tr>
    );
};

export default Row;