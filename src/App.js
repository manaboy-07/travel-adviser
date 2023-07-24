/** @format */

import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";
import Header from "./components/Header/Header";
import Head from "./components/Head/Head";
import Map from "./components/Map/Map";
import List from "./components/List/List";
function App() {
  return (
    <>
     
      
      <Head/>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
      <h2>BIG</h2>
    </>
  );
}

export default App;
