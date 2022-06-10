import * as React from 'react';
import {Button, Box, Typography, AppBar, Toolbar, IconButton, Grid} from '@mui/material/';
import { useRouter } from "next/router";
import UserLayout from '../components/UserLayout';
import { GenreData } from "../components/json/genre";

//const jsonData = require('../components/json/genre'); 
const genre = ['Action', 'Adventure', 'Horror', 'Multiplayer', 'Sandbox', 'Shooter', 'Simulation', 'Sport', 'Real-time Strategy'];
var num = 0;

function renderButton() {
  for (num = 0; num < GenreData.length; num++) {
    <Button key={genre[num]} href={genre[num]}>{genre[num]}</Button>
    console.log(genre[num])
  }
}

export default function ranking() {
 return (
   <Box component="div" sx={{ width: "100vw", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
   {genre.map((genre) => (
                  <Typography key={genre} href={genre.toString().toLowerCase()}>{genre}</Typography>  
              ))}
     </Box>
 );
}

ranking.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}