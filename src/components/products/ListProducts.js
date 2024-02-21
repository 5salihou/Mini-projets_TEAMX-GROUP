import React, { useContext, useEffect } from 'react';
import RowProduct from './RowProduct';
import { Box, Button, Container, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GlobalContexte } from "../../contexte/Wrapper";
import DrawerProduct from './DrawerProduct';

function ListProducts() {
  const { FetchProducts, products, onOpen } = useContext(GlobalContexte);
  useEffect(() => {
    FetchProducts();
  }, );
  return (
    <div className="ListProducts">
          <Container maxW={'full'} p="4" fontSize={'18px'}>
            <Container mb={'4'} rounded="xl" maxW='2xl' bg='blue.600' centerContent>
              <Box padding='4' bg='blue.400' color='black' maxW='md'>
                Cette espace regroupe l'ensemble des utisateurs 
                de produits electronique et les produits eux meme !
              </Box>
            </Container>
            <Box rounded="lg" boxShadow="base">
              <Box p="4" display={'flex'} justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">List Products</Text>
                <Button
                  leftIcon={<AiOutlinePlus
                  fontSize={'20px'} />}
                  colorScheme='teal'
                  variant='outline'
                  maxW="300px"
                  minW="150px"
                  onClick={onOpen}>
                  Add Product
                </Button>
              </Box>
              <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>IMAGE</Th>
                      <Th>NAME</Th>
                      <Th>PRICE</Th>
                      <Th>QUANTITY</Th>
                      <Th>ACTIONS</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {products?.map(({ _id, name, price, quantity }) => {
                      return (
                        <RowProduct
                          id={_id}
                          name={name}
                          price={price}
                          quantity={quantity}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <DrawerProduct />
          </Container>
    </div>
  );
}

export default ListProducts;