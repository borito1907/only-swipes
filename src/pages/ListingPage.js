import Listings from '../components/Listings-Components/Listings.js'
import CreateListing from '../components/Listings-Components/CreateListing'

const listings = [
    { "listerID": "1", "timePosted": "7:00am", "location": "The Study", "mealPeriod": "Breakfast", "listingType": "Sell" },
    { "listerID": "2", "timePosted": "9:00am", "location": "Rende", "mealPeriod": "Lunch", "listingType": "Buy" }
];


function ListingPage() {

    return (
        <div>
            <br />
            <CreateListing />
            <br />
            <Listings listings={listings} />
        </div >
    );
}

export default ListingPage;