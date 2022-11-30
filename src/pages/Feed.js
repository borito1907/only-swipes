import { useState, useEffect } from "react";

import ListingsView from '../components/feed-components/ListingsView.js'
import CreateListing from '../components/feed-components/CreateListing'

import { db } from "../lib/firebase.js";
import { collection, getDocs, query } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

const listings = [{ "listerID": "2", "listingType": "Sell", "location": "Rende", "mealPeriod": "Lunch", "timePosted": "9:00" }];

function Feed() {

    const listingsRef = collection(db, "listings");
    const q = query(listingsRef)
    const [listings] = useCollectionData(q, { id: 'id' })

    return (
        <div>
            <ListingsView listings={listings} />
        </div >
    );
}

export default Feed;