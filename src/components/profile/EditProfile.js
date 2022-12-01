import React from 'react';

import { db } from "../../lib/firebase.js";
import { collection, doc, updateDoc } from "firebase/firestore";
import { useForm } from "react-hook-form"
import { useAuth } from '../../hooks/auth'
import { useUpdateAvatar } from '../../hooks/users.js';


import {
    Button,
    Box,
    FormControl,
    FormLabel,
    Input,
    ModalBody,
    ModalFooter,
    useToast,
    Radio,
    RadioGroup,
    Select,
    Stack,
  } from "@chakra-ui/react";

function EditProfile (isOpen, onClose) {
    const [description, setDescription] = React.useState("")
    const [favDining, setFavDining] = React.useState('Anywhere');
    const [mealPlan, setMealPlan] = React.useState('No Meal Plan');
    const [building, setBuilding] = React.useState('Not Specified');
    const [paymentPref, setPaymentPref] = React.useState('Not Specified');
    const toast = useToast();

    const { register, handleSubmit, reset } = useForm();

    const {
        setFile,
        updateAvatar,
        isLoading: fileLoading,
        fileURL,
      } = useUpdateAvatar(user?.id);
    
      function handleChange(e) {
        setFile(e.target.files[0]);
      }

    

    const { user, isLoading } = useAuth();
    if (isLoading) return "Loading..."

    function submitEditProfile(data) {
        console.log(data.building)
    };
  

    return (
        <ModalBody>
            <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit(submitEditProfile)}>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input placeholder='Description of your account here...' />
                </FormControl>

                {/* pick building */}
                <FormControl mt={3}>
                    <FormLabel>Building</FormLabel>
                        <Select onChange={(e) => setBuilding(e.target.value)} value={building} {...register("building")}>
                            <option value={"Not Specified"}>Not Specified</option>
                            <option value={"Canyon Point"}>Canyon Point</option>
                            <option value={"Centennial Hall"}>Centennial Hall</option>
                            <option value={"Courtside"}>Courtside</option>
                            <option value={"Delta Terrace"}>Delta Terrace</option>
                            <option value={"Evergreen"}>Evergreen</option>
                            <option value={"De Neve - Gardenia"}>De Neve - Gardenia</option>
                            <option value={"De Neve - Holly"}>De Neve - Holly</option>
                            <option value={"De Neve - Plaza"}>De Neve - Plaza</option>
                            <option value={"Dykstra Hall"}>Dykstra Hall</option>
                            <option value={"Hedrick Hall"}>Hedrick Hall</option>
                            <option value={"Hedrick Summit"}>Hedrick Summit</option>
                            <option value={"Hitch  Suites"}>Hitch Suites</option>
                            <option value={"Olympic Hall"}>Olympic Hall</option>
                            <option value={"Rieber Hall"}>Rieber Hall</option>
                            <option value={"Rieber Terrace"}>Rieber Terrace</option>
                            <option value={"Rieber Vista"}>Rieber Vista</option>
                            <option value={"Saxon Suites"}>Saxon Suites</option>
                            <option value={"Sproul Cove"}>Sproul Cove</option>
                            <option value={"Sproul Hall"}>Sproul Hall</option>
                            <option value={"Sproul Landing"}>Sproul Landing</option>
                        </Select>
                </FormControl>

                {/* pick favorite dining hall */}
                <FormControl mt={3}>
                    <FormLabel>Favorite Dining Hall</FormLabel>
                        <Select onChange={(e) => setFavDining(e.target.value)} value={favDining}>
                            <option value={"Anywhere"}>Anywhere</option>
                            <option value={"Epicuria"}>Epicuria</option>
                            <option value={"De Neve"}>De Neve</option>
                            <option value={"Bplate"}>Bplate</option>
                            <option value={"Rende"}>Rende</option>
                            <option value={"Bcafe"}>Bcafe</option>
                            <option value={"The Study"}>The Study</option>
                            <option value={"The Drey"}>The Drey</option>
                            <option value={"Epicuria Ackerman"}>Epicuria at Ackerman</option>
                            <option value={"Food Truck"}>Food Truck</option>
                            <option value={"ASUCLA"}>ASUCLA Ticket</option>
                        </Select>
                </FormControl>

                {/* pick meal plan */}
                <FormControl mt={3}>
                    <FormLabel>Meal Plan</FormLabel>
                        <Select onChange={(e) => setMealPlan(e.target.value)} value={mealPlan}>
                            <option value={"No Meal Plan"}>No Meal Plan</option>
                            <option value={"11R"}>11R</option>
                            <option value={"11P"}>11P</option>
                            <option value={"14R"}>14R</option>
                            <option value={"14P"}>14P</option>
                            <option value={"19R"}>19R</option>
                            <option value={"19P"}>19P</option>
                        </Select>
                </FormControl>

                {/* payment preference */}
                <FormControl mt={3}>
                    <FormLabel>Payment Preference</FormLabel>
                    <RadioGroup onChange={setPaymentPref} value={paymentPref}>
                        <Stack direction='row'>
                            <Radio value='Cash'>Cash</Radio>
                            <Radio value='Zelle'>Zelle</Radio>
                            <Radio value='Venmo'>Venmo</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <ModalFooter>
                  <Button type="submit" colorScheme='purple' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </form>
            </Box>
        </ModalBody>
    );
}

export default EditProfile;