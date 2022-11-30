// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid'
import ListingCard from './ListingCard.js'


import { SimpleGrid, Heading } from '@chakra-ui/react'

function ListingsView(props) {

    const listings = props.listings;

    return (
        <SimpleGrid mt={4} spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
            {listings?.map((listing) => (
                <ListingCard listing={listing} />
            ))}
        </SimpleGrid>
    );
}

export default ListingsView;