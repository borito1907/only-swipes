import Listings from '../components/Listings-Components/Listings.js'

const listings =
    { "listerName": "Serafin", "timePosted": "7:00am", "hallName": "Rende", "mealPeriod": "lunch", "listingType": "buy" };


function ListingPage() {

    return (
        <div>
            <Listings listings={listings} />
        </div>
    );
}

export default ListingPage;