import { Box, Typography, Paper, Input, InputLabel, TextField, Button, Select, MenuItem } from '@mui/material'
import React from 'react'
import global from '../styles/global';

import UserLayout from '../components/UserLayout';
export default function settings() {
  const options = [
    "Visible Profile",
    "Hidden Profile",
  ]

  return (
    <Box>
      <Box sx={{display: "flex", justifyContent:"center" }}>
      <Paper elevation={3} sx={{padding:"12px", display:"flex", flexDirection:"column", marginTop:"4px"}}>
       <Typography variant="h5">
          Account Settings
       </Typography>
      </Paper> 
      </Box>
      <Box sx={{width:"100vw", display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <Paper elevation={3} sx={{padding:"24px", display:"flex", flexDirection:"column", marginTop:"12px"}}>
        <TextField label="Username" type="text" name="username"/>
        <TextField label="Email Address" type="email" name="email" sx={{marginTop:"12px"}}/>
        <TextField label="Password" name="password" type="password" sx={{marginTop:"12px"}}/>
        <TextField label="Confirm Password" name="cpassword" type="password" sx={{marginTop:"12px"}}/>
        <InputLabel id="select-label">Profile Privacy Option</InputLabel>
        <Select label="Theme" labelId="select-label">
        {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
            >
              {option}
            </MenuItem>
          ))}

        </Select>
        <Button variant="contained" sx={{...global.button1,marginTop:"12px"}}>
          Save
          </Button>
          <Box sx={{display:"flex", justifyContent: "center", marginTop:"12px"}}>
         </Box>
      </Paper>
      </Box>
      
  </Box>
  )
}

settings.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
