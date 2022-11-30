import { useState, useEffect } from "react";

import ListingsView from '../components/feed-components/ListingsView.js'
import CreateListing from '../components/feed-components/CreateListing'

import { db } from "../lib/firebase.js";
import { collection, getDocs, query } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Heading } from '@chakra-ui/react'

function Feed() {

    const listingsRef = collection(db, "listings");
    const q = query(listingsRef)
    const [listings] = useCollectionData(q, { id: 'id' })

    return (
        <div>
            <Heading mt={4} paddingLeft="2" mb="4" size="lg" color="purple" textAling="center">Listings</Heading>
            <ListingsView listings={listings} />
        </div >
    );
}

export default Feed;