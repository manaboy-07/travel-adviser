/** @format */

import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import './style.css'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import { Place } from "@mui/icons-material";
function List() {
  const [type, setType] = useState("")
  const [rating, setRating] = useState("")
  const places = [
    {name: 'Cool place'},
    {name: 'Best Place'},
    {name: 'Cool place'},
    {name: 'Best Place'},
    {name: 'Cool place'},
    {name: 'Best Place'},
    {name: 'Cool place'},
    {name: 'Best Place'},
  ]
  return (
    <div className='container'>
      <Typography variant='h4'>Restaurants, Hotels & Attractions near you</Typography>
      <FormControl className="formControl">
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
         <MenuItem value="restaurants">Restaurants</MenuItem>
         <MenuItem value="hotels">Hotels</MenuItem>
         <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="formControl">
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
         <MenuItem value={0}>All</MenuItem>
         <MenuItem value={3}>Above 3.0</MenuItem>
         <MenuItem value={4}>Above 4.0</MenuItem>
         <MenuItem value={4.5}>Above 4.5</MenuItem>
         
        </Select>
      </FormControl>
      <Grid container spacing={3} className="list">
         {places?.map((place, i) =>{
           return(
            // from extra small all the way to big devices take the full witdh 12 spaces
            <Grid item key={i} xs={12}>
               <PlaceDetails place={place}/>
            </Grid>
           )
         })}
      </Grid>
    </div>
  );
}

export default List;
