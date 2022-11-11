import Listing from './Listing.js'

function Listings(props) {

    const listings = JSON.parse(JSON.stringify(props.listings));

    return (
        <div>
            {/* Should loop through all the listings */}
            {listings.map((listing) => (
                <Listing
                    listerName={listing.listerName}
                    timePosted={listing.timePosted}
                    hallName={listing.hallName}
                    mealPeriod={listing.mealPeriod}
                    listingType={listing.listingType}
                />
            ))}


        </div>
    );
}

export default Listings;