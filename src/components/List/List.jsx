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
function List() {
  const [type, setType] = useState("")
  const [rating, setRating] = useState("")
  return (
    <div className='container'>
      <Typography variant='h4'>Restaurants</Typography>
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
        <Select value={type} onChange={(e) => setRating(e.target.value)}>
         <MenuItem value={0}>All</MenuItem>
         <MenuItem value={3}>Above 3.0</MenuItem>
         <MenuItem value={4}>Above 4.0</MenuItem>
         <MenuItem value={4.5}>Above 4.5</MenuItem>
         
        </Select>
      </FormControl>
    </div>
  );
}

export default List;
