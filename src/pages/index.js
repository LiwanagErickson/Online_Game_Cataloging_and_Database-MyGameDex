import { Box, Typography, Paper } from '@mui/material'
import React from 'react'
import UserLayout from '../components/UserLayout';

export default function index() {
  return (
    <Box>
      <Box sx={{display: "flex", justifyContent:"center" }}>
      <Paper elevation={3} sx={{padding:"12px", display:"flex", flexDirection:"column", marginTop:"4px"}}>
       <Typography variant="h5">
          Welcome to myGameDex!
       </Typography>
      </Paper>
       </Box>
  </Box>
  )
}

index.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
