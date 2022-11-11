

function Listing(props) {

    let listerName = props.listerName;
    let timePosted = props.timePosted;
    let hallName = props.hallName;
    let mealPeriod = props.mealPeriod;
    let listingType = props.listingType;

    return (
        <div>
            <h1>Listing 1</h1>
            {listerName} wants to {listingType} a {mealPeriod} swipe at {hallName}

            <br />
            Posted at: {timePosted}

        </div>
    );


}

export default Listing;