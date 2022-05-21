import { Box, Typography, Paper } from '@mui/material'
import React from 'react'
import global from '../styles/global';

import UserLayout from '../components/UserLayout';
export default function profile() {
  return (
    <Box>
      <Box sx={{display: "flex", justifyContent:"center" }}>
      <Paper elevation={3} sx={{padding:"12px", display:"flex", flexDirection:"column", marginTop:"4px"}}>
       <Typography variant="h5">
          Profile
       </Typography>
      </Paper>
       </Box>
  </Box>
  )
}

profile.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
