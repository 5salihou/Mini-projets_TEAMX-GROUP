import React from 'react';
import { Box, Button, Container, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import {AiOutlinePlus} from "react-icons/ai"
import Row from "./Row";
import { useContext, useEffect } from "react";
import { GlobalContexte } from "../../contexte/Wrapper";
import DrawerExample from "./Drawer";

function ListUsers() {
  const { FetchUsers, users, onOpen } = useContext(GlobalContexte);
  useEffect(() => {
    FetchUsers();
  }, );
  return (
    <div className="ListUsers">
          <Container maxW={'full'} p="4" fontSize={'18px'}>
            <Container mb={'4'} rounded="xl" maxW='2xl' bg='blue.600' centerContent>
              <Box padding='4' bg='blue.400' color='black' maxW='md'>
                Cette espace regroupe l'ensemble des utisateurs 
                de produits electronique et les produits eux meme !
              </Box>
            </Container>
            <Box rounded="lg" boxShadow="base">
              <Box p="4" display={'flex'} justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">List Users</Text>
                <Button
                  leftIcon={<AiOutlinePlus
                  fontSize={'20px'} />}
                  colorScheme='teal'
                  variant='outline'
                  maxW="300px"
                  minW="150px"
                  onClick={onOpen}>
                  Add User
                </Button>
              </Box>
              <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>AVATAR</Th>
                      <Th>FIRSTNAME</Th>
                      <Th>LASTNAME</Th>
                      <Th>ADDRESS</Th>
                      <Th>ACTIONS</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {users?.map(({ _id, firstname, lastname, address }) => {
                      return (
                        <Row
                          id={_id}
                          firstname={firstname}
                          lastname={lastname}
                          address={address}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <DrawerExample />
          </Container>
    </div>
  );
}

export default ListUsers;