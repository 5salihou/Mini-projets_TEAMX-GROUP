import { createContext, useState } from "react";
import axios from "axios";
import { useDisclosure, useToast } from  '@chakra-ui/react';

export const GlobalContexte = createContext();

export default function Wrapper({ children }) {

    const [errors, setErrors] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    // requettes consernants User
    const [users, setUsers] = useState();
    const FetchUsers = () => {
        axios.get('/api/user')
        .then(res=>{
            setUsers(res.data);
        })
        .catch(err=>{
            console.log(err.response.data);
        });
    }
    const Delete = (id) => {
        axios.delete(`/api/user/${id}`)
        .then(res=>{
            setUsers(users.filter(u => u._id !== id));
            toast({
                title: 'User Deleted',
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
        })
        .catch(err=>{
            console.log(err.response.data);
        });
    }
    const Add = (form) => {
        axios.post('/api/user', form)
        .then(res=>{
            setUsers(res.data);
        })
        .catch(err=>{
            setErrors(err.response.data.error);
        });
    };

    // requettes consernants Product
    const [products, setProducts] = useState();
    const FetchProducts = () => {
        axios.get('/api/product')
        .then(res=>{
            setProducts(res.data);
        })
        .catch(err=>{
            console.log(err.response.data);
        });
    }
    const DeleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
        .then(res=>{
            setProducts(products.filter(u => u._id !== id));
            toast({
                title: 'Product Deleted',
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
        })
        .catch(err=>{
            console.log(err.response.data);
        });
    }
    const AddProduct = (form) => {
        axios.post('/api/Product', form)
        .then(res=>{
            setProducts(res.data);
            toast({
                title: 'Product Add',
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
        })
        .catch(err=>{
            setErrors(err.response.data.error);
        });
    };

    return (
        <GlobalContexte.Provider value={{
            FetchUsers, users, Delete, Add,
            isOpen, onOpen, onClose, errors, setErrors,
            FetchProducts, products, AddProduct, DeleteProduct }}>
            {children}
        </GlobalContexte.Provider>
        );
}