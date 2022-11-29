import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, SimpleGrid, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'

import { db } from "../../lib/firebase.js";
import { collection, deleteDoc, doc } from "firebase/firestore";


function ListingCard({ listing }) {


    const userID = "3";

    const deleteListing = async (id) => {
        const listingDoc = doc(db, "listings", id);
        await deleteDoc(listingDoc);
    };


    return (
        <div>
            <Card>
                <CardBody>
                    <Stack>
                        <Heading size='md'>{listing.listingType + "ing"}</Heading>
                        <Text>{"Listed at " + listing.timePosted}</Text>
                        <Text>{listing.mealPeriod} swipe for {listing.location}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup>
                        <Button colorScheme='blue'> Contact {listing.listingType}er </Button>
                        {listing.listerID === userID &&
                            <Button onClick={() => { deleteListing(listing.id) }} colorScheme='red' variant='outline'> Remove </Button>
                        }
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );


}

export default ListingCard;