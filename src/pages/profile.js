import { Box, Typography, Paper, List, ListItem } from '@mui/material'
import React from 'react'
import global from '../styles/global';
import { ProfileData } from "../components/json/profile";

import UserLayout from '../components/UserLayout';
export default function profile() {

  var usernum = 1;

  return (
    <Box>
      <Box sx={{display: "flex", justifyContent:"center" }}>
      <Paper elevation={3} sx={{padding:"12px", display:"flex", flexDirection:"column", marginTop:"4px"}}>
       <Typography variant="h5">
          Profile
       </Typography>
        <List>
          <ListItem>
          Name: "User Name"
          </ListItem>
          <ListItem>
          Age:  "User Age"
          </ListItem>
          <ListItem>
          Gender: "User Gender"
          </ListItem>
          <ListItem>
          Email: "User Email"
          </ListItem>
        </List>
      </Paper>
       </Box>
  </Box>
  )
}

profile.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
