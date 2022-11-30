import React, { Component } from 'react';
import { useAuth } from "../../hooks/auth";
import { auth, db } from "../../lib/firebase";


import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
  } from "@chakra-ui/react";

function EditProfile ( isOpenDetails, onCloseDetails) {
    const { user, isLoading: authLoading } = useAuth();


    if (authLoading) return "Loading...";



    async function handleChange(data){
        
    }

    function updateProfile () {

    }

    return (
        <Modal isOpen={isOpenDetails} onClose={onCloseDetails}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Profile Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <HStack spacing="5">
                
                <FormControl py="4">
                  <FormLabel htmlFor="picture">Change Profile Details</FormLabel>
                  <input type="file" accept="image/*" onChange={handleChange} />
                </FormControl>
              </HStack>
              {/* submit button */}
              <Button
                loadingText="Uploading"
                w="full"
                my="6"
                colorScheme="purple"
                onClick={updateProfile}
                // isLoading={fileLoading}
              >
                Save
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      );
}

export default EditProfile;