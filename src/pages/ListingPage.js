import Listings from '../components/Listings-Components/Listings.js'

const listings = [
    { "listerID": "1", "timePosted": "7:00am", "hallName": "The Study", "mealPeriod": "Breakfast", "listingType": "Sell" },
    { "listerID": "2", "timePosted": "9:00am", "hallName": "Rende", "mealPeriod": "Lunch", "listingType": "Buy" }
];


function ListingPage() {

    return (
        <div>
            <br />
            <Listings listings={listings} />
        </div >
    );
}

export default ListingPage;