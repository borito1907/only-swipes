

function ListingCard({ listing }) {


    return (
        <div>
            <h2>Listing</h2>
            {listing.listerName} wants to {listing.listingType} a {listing.mealPeriod} swipe at {listing.hallName}
            <br />
            Posted at: {listing.timePosted}
        </div>
    );


}

export default ListingCard;