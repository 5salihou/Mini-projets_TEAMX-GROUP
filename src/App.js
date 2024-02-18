import { Box, Button, Container, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import {AiOutlinePlus} from "react-icons/ai"
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
        <Container maxW={'full'} p="4" fontSize={'18px'}>
          <Box mb={'4'} rounded="xl" bg='blue.600' w='100%' p={4} color='white'>
            This is the Box
          </Box>
          <Container mb={'4'} rounded="xl" maxW='2xl' bg='blue.600' centerContent>
              <Box padding='4' bg='blue.400' color='black' maxW='md'>
                Cette espace regroupe l'ensemble des utisateurs 
                de produits electronique et les produits eux meme !
              </Box>
            </Container>
            <Box rounded="lg" boxShadow="base">
              <Box p="4" display={'flex'} justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">List User</Text>
                <Button leftIcon={<AiOutlinePlus fontSize={'20px'} />} colorScheme='teal' variant='outline' maxW="300px" minW="150px">
                    Add User
                  </Button>
              </Box>
              <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>AVATAR</Th>
                      <Th>NOM</Th>
                      <Th>PRENOM</Th>
                      <Th>PROFESSION</Th>
                      <Th>ACTIONS</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Row />
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Container>
    </div>
  );
}

export default App;
