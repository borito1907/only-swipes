import ListingCard from './ListingCard.js'

function Listings(props) {

    const listings = JSON.parse(JSON.stringify(props.listings));

    return (
        <div>
            {/* Should loop through all the listings */}
            {listings.map((listing) => (
                <ListingCard listing={listing} />
            ))}


        </div>
    );
}

export default Listings;