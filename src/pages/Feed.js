import { useState, useEffect } from "react";

import ListingsView from '../components/feed-components/ListingsView.js'
// import CreateListing from '../components/Listings-Components/CreateListing'

import { db } from "../lib/firebase.js";
import { collection, getDocs } from "firebase/firestore";

import Button from '@mui/material/Button';

function Feed() {


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
            {/* <CreateListing /> */}

            <ListingsView listings={listings} />
        </div >
    );
}

export default Feed;