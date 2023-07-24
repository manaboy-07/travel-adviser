/** @format */

import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography, Paper, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import { Rating } from '@mui/material';

const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div>
      <GoogleMapReact
        bootstrapURLkeys={{ key: "" }}
        center={coordinates}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={""}
        onChildClick={""}
        options={""}></GoogleMapReact>
    </div>
  );
};

export default Map;
