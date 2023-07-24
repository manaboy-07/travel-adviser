/** @format */

import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { SearchOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
function Head() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5'>Travel Advisor</Typography>
          <Box display='flex'>
            <Typography variant='h6'>Explore new places</Typography>
            {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
            <div>
              <div>
                <SearchOutlined />
              </div>
              <InputBase placeholder='Search…' />
            </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Head;
