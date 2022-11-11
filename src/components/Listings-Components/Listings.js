import Listing from './Listing.js'

function Listings(props) {

    const listings = JSON.parse(JSON.stringify(props.listings));

    return (
        <div>
            {/* Should loop through all the listings */}
            <Listing
                listerName={listings.listerName}
                timePosted={listings.timePosted}
                hallName={listings.hallName}
                mealPeriod={listings.mealPeriod}
                listingType={listings.listingType}
            />

        </div>
    );
}

export default Listings;