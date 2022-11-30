import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, SimpleGrid, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'

import { auth, db } from "../../lib/firebase.js";
import { collection, deleteDoc, doc, addDoc } from "firebase/firestore";
import { useAuth } from '../../hooks/auth'

function ListingCard({ listing }) {

    const { user, isLoading } = useAuth();
    if (isLoading) return "Loading..."


    const deleteListing = async (id) => {
        const listingDoc = doc(db, "listings", id);
        await deleteDoc(listingDoc);
    };

    const handleCreate = async () => {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        const withSlashes = [month, day, year].join('/');

        const { id } = await addDoc(collection(db, "chats"), {
            chatter1: user.username,
            chatter2: listing.listerID,
            isNewChat: true,
            date: withSlashes
        })
    }

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
                        <Button colorScheme='blue' onClick={() => { handleCreate() }}> Contact {listing.listingType}er </Button>
                        {listing.listerID === user.username &&
                            <Button onClick={() => { deleteListing(listing.id) }} colorScheme='red' variant='outline'> Remove </Button>
                        }
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );


}

export default ListingCard;