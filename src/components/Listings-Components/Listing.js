

function Listing(props) {

    let listerName = props.listerName;
    let timePosted = props.timePosted;
    let hallName = props.hallName;
    let mealPeriod = props.mealPeriod;
    let listingType = props.listingType;

    return (
        <div>
            <h2>Listing</h2>
            {listerName} wants to {listingType} a {mealPeriod} swipe at {hallName}
            <br />
            Posted at: {timePosted}

        </div>
    );


}

export default Listing;