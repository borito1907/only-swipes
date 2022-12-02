import ListingCard from './ListingCard.js'

import { SimpleGrid } from '@chakra-ui/react'

function ListingsView(props) {

    const listings = props.listings;

    return (
        <SimpleGrid mt={4} spacing={4} mr={6} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
            {listings?.map((listing) => (
                <ListingCard listing={listing} />
            ))}
        </SimpleGrid>
    );
}

export default ListingsView;