import { Box, Typography, Paper, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import React, {useState, useEffect, Router} from 'react'
import UserLayout from '../components/UserLayout';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { GameData } from "../components/json/GameData.js";
import Link from "next/link";


const index = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    
    {/*First row */} 
    <Box sx={{ my: 4 }}
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
      <Paper elevation={3} sx={{padding:"12px", display:"flex", flexDirection:"column", marginTop:"4px",}}>
       <Typography variant="h5">
          Welcome to my GameDex!
       </Typography>
      </Paper>
       </Box>
    <Container maxWidth="lg">
       <Box sx={{ my: 4, ml: 1}}
        display="flex" 
        alignItems="left"
        justifyContent="left"
      >
        <Typography variant="h5">
          Top Games 
       </Typography>
      </Box>
      <Grid container spacing={3}>
      {GameData.gameData.slice(0, 12).map((gameData) => (
        <Grid item sm key={gameData.id}>
        <Card sx={{ minWidth: 250 }}>
        <Link href={'/gameview?id=' + gameData.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image= {gameData.banner_url}
            alt= {gameData.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {gameData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {gameData.descripton}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
      </Grid>
      ))}
      </Grid>
      </Container>
  </React.Fragment>

  
);
}
index.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}

export default index;