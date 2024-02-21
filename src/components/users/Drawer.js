import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"
import React, { useContext, useState } from "react"
import { GlobalContexte } from "../../contexte/Wrapper";
import InputsGroup from "../utils/InputsGroup";

export default function DrawerExample() {
    const { isOpen, onClose, Add, errors } = useContext(GlobalContexte);
    const [form, setForm] = useState({});
    const onChangeHandler = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    };
    const onAdd = () => {
      Add(form);
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
            <DrawerHeader>Create / Update User</DrawerHeader>
  
            <DrawerBody>
              <stack spacing={"24px"}>
                <InputsGroup name="firstname" onChangeHandler={onChangeHandler} errors={errors?.firstname} />
                <InputsGroup name="lastname" onChangeHandler={onChangeHandler} errors={errors?.lastname} />
                <InputsGroup name="address" onChangeHandler={onChangeHandler} errors={errors?.address} />
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