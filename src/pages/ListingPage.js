import { useState, useEffect } from "react";

import Listings from '../components/Listings-Components/Listings.js'
import CreateListing from '../components/Listings-Components/CreateListing'

import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";


// const listings = [
//     { "listerID": "1", "timePosted": "7:00am", "location": "The Study", "mealPeriod": "Breakfast", "listingType": "Sell" },
//     { "listerID": "2", "timePosted": "9:00am", "location": "Rende", "mealPeriod": "Lunch", "listingType": "Buy" }
// ];


function ListingPage() {


    const [listings, setListings] = useState([]);
    const listingsCollectionRef = collection(db, "listings");

    useEffect(() => {
        const getListings = async () => {
            const data = await getDocs(listingsCollectionRef);
            setListings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getListings();
    }, [listings]);



    return (
        <div>
            <CreateListing />
            <Listings listings={listings} />
        </div >
    );
}

export default ListingPage;