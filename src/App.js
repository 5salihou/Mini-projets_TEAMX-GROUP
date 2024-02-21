import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import ListUsers from './components/users/ListUsers';
import ListProducts from './components/products/ListProducts';
import { Box, Button } from "@chakra-ui/react";

const router = createBrowserRouter ([
  
  {
    path: '/ListUsers',
    element: <div>
                  <Box mb={'10px'} p="4" display={'flex'} justifyContent="space-between">
                    <Link to="/ListUsers">
                      <Button ml={'100px'} colorScheme='blue'>USERS</Button>
                    </Link>
                    <Link to="/ListProducts">
                      <Button mr={'1000px'} colorScheme='blue'>PRODUCTS</Button>
                    </Link>
                  </Box>
                  <ListUsers />
             </div>
  },
  {
    path: '/ListProducts',
    element: <div>
                  <Box mb={'10px'} p="4" display={'flex'} justifyContent="space-between">
                    <Link to="/ListUsers">
                      <Button ml={'100px'} colorScheme='blue'>USERS</Button>
                    </Link>
                    <Link to="/ListProducts">
                      <Button mr={'1000px'} colorScheme='blue'>PRODUCTS</Button>
                    </Link>
                  </Box>
                  <ListProducts/>
              </div>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
