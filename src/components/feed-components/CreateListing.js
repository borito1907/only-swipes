import * as React from 'react';

import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    RadioGroup,
    Radio,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useToast
} from '@chakra-ui/react'

import { db } from "../../lib/firebase.js";
import { collection, setDoc, doc } from "firebase/firestore";

import { useAuth } from '../../hooks/auth'

function CreateListing({ onClose }) {

    const toast = useToast();

    const [location, setLocation] = React.useState('Anywhere');
    const [mealPeriod, setMealPeriod] = React.useState('');
    const [listingType, setListingType] = React.useState('');
    const [price, setPrice] = React.useState(9.00);

    const { user, isLoading } = useAuth();
    if (isLoading) return "Loading..."

    const listerUsername = user.username;
    const listerAvi = user.avatar;


    const submitListing = async (e) => {

        e.preventDefault();

        const today = new Date();
        let timePosted = today.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' });

        const listingsCollectionRef = doc(collection(db, "listings"));
        await setDoc(listingsCollectionRef,
            {
                listerUsername: listerUsername,
                listingType: listingType,
                location: location,
                mealPeriod: mealPeriod,
                timePosted: timePosted,
                price: price,
                id: listingsCollectionRef.id,
                avi: user.avatar
            });




        toast({
            title: "Listing Posted!",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        })

        setLocation("Anywhere");
        setMealPeriod('');
        setListingType('');
        setPrice(9.00)
    };


    return (
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="sm">
            <Box textAlign="center">
                <Heading>Create New Listing</Heading>
            </Box>
            <Box my={4} textAlign="left">
                <form onSubmit={submitListing}>

                    <FormControl>
                        <FormLabel>Listing Type</FormLabel>
                        <RadioGroup onChange={setListingType} value={listingType}>
                            <Stack direction='row'>
                                <Radio value='Buy'>Buy</Radio>
                                <Radio value='Sell'>Sell</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <FormControl mt={3}>
                        <FormLabel>Meal Period</FormLabel>
                        <RadioGroup onChange={setMealPeriod} value={mealPeriod}>
                            <Stack direction='row'>
                                <Radio value='Breakfast'>Breakfast</Radio>
                                <Radio value='Lunch'>Lunch</Radio>
                                <Radio value='Dinner'>Dinner</Radio>
                                <Radio value='Late Night'>Late Night</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <FormControl mt={3}>
                        <FormLabel>Location</FormLabel>
                        <Select onChange={(e) => setLocation(e.target.value)} value={location}>
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

                    <FormControl mt={3}>
                        <FormLabel>Price</FormLabel>
                        <NumberInput defaultValue={9} precision={2} step={1}>
                            <NumberInputField onChange={(e) => setPrice(e.target.value)} value={price} />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <Stack direction='row' mt={4}>
                        <Button colorScheme='blue' width="50%" type="submit">Post</Button>
                        <Button colorScheme='gray' width="50%" onClick={onClose}>Cancel</Button>
                    </Stack>

                </form>
            </Box>
        </Box>
    )
}

export default CreateListing;