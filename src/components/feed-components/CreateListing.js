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
    Select
} from '@chakra-ui/react'


import { db } from "../../lib/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const userID = "3";

function CreateListing() {

    const listerID = userID;
    const [location, setLocation] = React.useState('Anywhere');
    const [mealPeriod, setMealPeriod] = React.useState('');
    const [listingType, setListingType] = React.useState('');

    const listingsCollectionRef = collection(db, "listings");

    const listingsRef = collection(db, "listings");

    const submitListing = async (e) => {

        e.preventDefault();


        const date = new Date();
        let timePosted = date.getHours() + ':' + date.getMinutes();

        await addDoc(listingsRef, {
            listerID: listerID,
            listingType: listingType,
            location: location,
            mealPeriod: mealPeriod,
            timePosted: timePosted
        });

        setLocation("Anywhere");
        setMealPeriod('');
        setListingType('');


    };


    return (
        <Flex width="full" align="center" justifyContent="center" mt={6}>
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

                        <FormControl mt={4}>
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

                        <FormControl mt={4}>
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

                        <Button width="full" mt={4} type="submit">Post</Button>

                    </form>
                </Box>
            </Box>
        </Flex>
        // <Container>
        //     <h1>Create New Listing</h1>
        //     <Card sx={{ maxWidth: 500 }} >
        //         <CardHeader
        //             title="New Listing"
        //         />
        //         <CardContent>
        //             <form onSubmit={submitListing}>
        //                 <FormControl sx={{ m: 1, minWidth: 120 }}>
        //                     <FormLabel>Listing Type</FormLabel>
        //                     <RadioGroup value={listingType} onChange={(e) => setListingType(e.target.value)}>
        //                         <FormControlLabel value="Buy" control={<Radio />} label="Buy" />
        //                         <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
        //                     </RadioGroup>
        //                 </FormControl>

        //                 <FormControl sx={{ m: 1, minWidth: 120 }}>
        //                     <FormLabel>Meal Period</FormLabel>
        //                     <RadioGroup value={mealPeriod} onChange={(e) => setMealPeriod(e.target.value)}>
        //                         <FormControlLabel value="Breakfast" control={<Radio />} label="Breakfast" />
        //                         <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
        //                         <FormControlLabel value="Dinner" control={<Radio />} label="Dinner" />
        //                         <FormControlLabel value="Late Night" control={<Radio />} label="Late Night" />
        //                     </RadioGroup>
        //                 </FormControl>

        //                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        //                     <FormLabel>Location</FormLabel>
        //                     <Select
        //                         labelId="location-label"
        //                         id="location"
        //                         value={location}
        //                         onChange={(e) => setLocation(e.target.value)}
        //                         label="location"
        //                         defaultValue="Anywhere"
        //                     >
        //                         <MenuItem value={"Anywhere"}>Anywhere</MenuItem>
        //                         <MenuItem value={"Epicuria"}>Epicuria</MenuItem>
        //                         <MenuItem value={"De Neve"}>De Neve</MenuItem>
        //                         <MenuItem value={"Bplate"}>Bplate</MenuItem>
        //                         <MenuItem value={"Rende"}>Rende</MenuItem>
        //                         <MenuItem value={"Bcafe"}>Bcafe</MenuItem>
        //                         <MenuItem value={"The Study"}>The Study</MenuItem>
        //                         <MenuItem value={"The Drey"}>The Drey</MenuItem>
        //                         <MenuItem value={"Epicuria Ackerman"}>Epicuria at Ackerman</MenuItem>
        //                         <MenuItem value={"Food Truck"}>Food Truck</MenuItem>
        //                         <MenuItem value={"ASUCLA"}>ASUCLA Ticket</MenuItem>
        //                     </Select>
        //                 </FormControl>

        //                 <br />

        //                 <Stack spacing={2} direction="row">
        //                     <Button type="submit" variant="contained">Post</Button>
        //                     {/* <Button type="cancel" variant="contained" color="error">Cancel</Button> */}
        //                 </Stack>
        //             </form>

        //         </CardContent>
        //     </Card>
        // </Container >
    )
}

export default CreateListing;