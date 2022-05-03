import * as React from 'react';
import {Button, Box, Typography } from '@mui/material/';

export default function index() {
 return (
  <Box component="span" sx={{width:"100vw", height: "40vh", display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <Typography variant="h1" component="h1">
        Welcome to myGameDex!
      </Typography>
      <Typography variant="h5" component="h5" sx={{color: "red"}}>
        Online Game Cataloging and Database
      </Typography>
    </Box>
 );
}