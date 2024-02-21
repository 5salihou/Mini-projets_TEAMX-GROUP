import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"
import React, { useContext, useState } from "react"
import { GlobalContexte } from "../../contexte/Wrapper";
import InputsGroup from "../InputsGroup";

export default function DrawerProduct() {
    const { isOpen, onClose, AddProduct, errors } = useContext(GlobalContexte);
    const [form, setForm] = useState({});
    const onChangeHandler = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    };
    const onAdd = () => {
      AddProduct(form);
    };
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create / Update Product</DrawerHeader>
  
            <DrawerBody>
              <stack spacing={"24px"}>
                <InputsGroup name="name" onChangeHandler={onChangeHandler} errors={errors?.name} />
                <InputsGroup name="price" onChangeHandler={onChangeHandler} errors={errors?.price} />
                <InputsGroup name="quantity" onChangeHandler={onChangeHandler} errors={errors?.quantity} />
              </stack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='green' onClick={()=> onAdd()}>Save</Button>
            </DrawerFooter> 
          </DrawerContent>
        </Drawer>
      </>
    )
  }