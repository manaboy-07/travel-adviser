/** @format */

import React from "react";
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
  return (
    <div className='container'>
      <Typography variant='h4'>Restaurants</Typography>
      <FormControl className="formControl">
        <InputLabel>Type</InputLabel>
        <Select value={''} onChange={''}>

        </Select>
      </FormControl>
    </div>
  );
}

export default List;
