import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const userID = "2";

function CreateListing() {

    const listerID = userID;
    var timePosted;
    const [location, setLocation] = React.useState('Anywhere');
    const [mealPeriod, setMealPeriod] = React.useState('');
    const [listingType, setListingType] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        const date = new Date();
        timePosted = date.getHours() + ':' + date.getMinutes();

        //send to db

    }

    return (
        <Container>
            <Card sx={{ maxWidth: 450 }} >
                <CardHeader
                    title="New Listing"
                />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <FormLabel>Listing Type</FormLabel>
                            <RadioGroup value={listingType} onChange={(e) => setListingType(e.target.value)}>
                                <FormControlLabel value="Buy" control={<Radio />} label="Buy" />
                                <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <FormLabel>Meal Period</FormLabel>
                            <RadioGroup value={mealPeriod} onChange={(e) => setMealPeriod(e.target.value)}>
                                <FormControlLabel value="Breakfast" control={<Radio />} label="Breakfast" />
                                <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
                                <FormControlLabel value="Dinner" control={<Radio />} label="Dinner" />
                                <FormControlLabel value="Late Night" control={<Radio />} label="Late Night" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <FormLabel>Location</FormLabel>
                            <Select
                                labelId="location-label"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                label="location"
                            >
                                <MenuItem value="">
                                    <em>Anywhere</em>
                                </MenuItem>
                                <MenuItem value={"Epicuria"}>Epicuria</MenuItem>
                                <MenuItem value={"De Neve"}>De Neve</MenuItem>
                                <MenuItem value={"Bplate"}>BPlate</MenuItem>
                                <MenuItem value={"Rende"}>Rende</MenuItem>
                                <MenuItem value={"Bcafe"}>Bcafe</MenuItem>
                                <MenuItem value={"The Study"}>The Study</MenuItem>
                                <MenuItem value={"The Drey"}>The Drey</MenuItem>
                                <MenuItem value={"Epicuria Ackerman"}>Epicuria at Ackerman</MenuItem>
                                <MenuItem value={"Food Truck"}>Food Truck</MenuItem>
                                <MenuItem value={"ASUCLA"}>ASUCLA Ticket</MenuItem>
                            </Select>
                        </FormControl>

                        <br />

                        <Stack spacing={2} direction="row">
                            <Button type="submit" variant="contained">Post</Button>
                            {/* <Button type="cancel" variant="contained" color="error">Cancel</Button> */}
                        </Stack>
                    </form>

                </CardContent>
            </Card>
        </Container >
    )
}

export default CreateListing;