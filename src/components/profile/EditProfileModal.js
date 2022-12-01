import React, { Component } from 'react';
import { useAuth } from "../../hooks/auth";
import { auth, db } from "../../lib/firebase";
import EditProfile from './EditProfile';

import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";

function EditProfileModal () {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
          <Button 
            pos="absolute"
            mb="2"
            top="4"
            right="6"
            colorScheme='purple' 
            onClick={onOpen}
          >
            Edit Profile
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Profile Details</ModalHeader>
                <ModalCloseButton />

                <EditProfile isOpen={isOpen} onClose={onClose} />

                <ModalFooter>
                  <Button colorScheme='purple' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
              {/* provides the modal body */}
              


          </Modal>

      </>
  )
}


export default EditProfileModal;