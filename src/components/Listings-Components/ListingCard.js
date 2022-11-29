import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { db } from "../../firebase.js";
import { collection, deleteDoc, doc } from "firebase/firestore";


function ListingCard({ listing }) {

    // const listingsCollectionRef = collection(db, "listings");

    const userID = "3";

    const deleteListing = async (id) => {
        const listingDoc = doc(db, "listings", id);
        await deleteDoc(listingDoc);
    };


    return (
        <div>
            <Card elevation={1} sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={listing.listingType + "ing"}
                    subheader={"Listed at " + listing.timePosted}
                />

                <CardContent>
                    <Typography variant="body2">
                        {listing.mealPeriod} swipe for {listing.location}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="medium"> Contact {listing.listingType}er </Button>
                    {listing.listerID === userID &&
                        <Button onClick={() => { deleteListing(listing.id) }} size="medium" color="error"> Remove Listing </Button>
                    }
                </CardActions>

            </Card>
        </div>
    );


}

export default ListingCard;