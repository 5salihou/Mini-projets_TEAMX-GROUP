import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import { React, useContext } from 'react';
import { AiFillAccountBook, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContexte } from "../../contexte/Wrapper";

const RowProduct = ({ id, name, price, quantity }) => {
    const { DeleteProduct } = useContext(GlobalContexte);
    return (
        <Tr>
            <Td>
                <Avatar name={name}></Avatar>
            </Td>
            <Td>{name}</Td>
            <Td>{price}</Td>
            <Td>{quantity}</Td>
            <Td >
                <Box display="flex" gap="1">
                    <Button colorScheme='blue'>
                        <AiFillAccountBook />
                    </Button>
                    <Button colorScheme='yellow'>
                        <AiFillEdit />
                    </Button>
                    <Button colorScheme='red' onClick={() => DeleteProduct(id)}>
                        <AiFillDelete />
                    </Button>
                </Box>
            </Td>
        </Tr>
    );
};

export default RowProduct;