import * as React from 'react';
import {Button, Box, Typography } from '@mui/material/';

export default function index() {
 return (
  <Box component="span" sx={{border: '5px solid red', display: 'flex'}}>
      <Typography variant="h1" component="h1">
        Hello World
      </Typography>
    </Box>
 );
}