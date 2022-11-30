// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid'
import ListingCard from './ListingCard.js'


import { SimpleGrid } from '@chakra-ui/react'

function ListingsView(props) {

    const listings = props.listings;

    return (
        // <Container>
        //     <h1>{Object.keys(listings).length} Listings</h1>
        //     <Grid container spacing={1}>
        //         {listings.map((listing) => (
        //             <Grid item xs={12} md={6} lg={4} key={listing.listerID}>
        //                 <ListingCard listing={listing} />
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Container>
        <SimpleGrid mt={4} spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
            {listings?.map((listing) => (
                <ListingCard listing={listing} />
            ))}
        </SimpleGrid>
    );
}

export default ListingsView;