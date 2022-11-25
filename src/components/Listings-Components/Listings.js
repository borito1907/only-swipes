import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import ListingCard from './ListingCard.js'

function Listings(props) {

    const listings = JSON.parse(JSON.stringify(props.listings));

    return (
        <Container>
            <h1>Listings</h1>
            <Grid container spacing={1}>
                {listings.map((listing) => (
                    <Grid item xs={12} md={6} lg={4} key={listing.listerID}>
                        <ListingCard listing={listing} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Listings;