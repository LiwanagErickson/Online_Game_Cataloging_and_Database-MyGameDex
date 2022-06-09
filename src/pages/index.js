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
        justifyContent="left">
          <Typography variant="h5">
          Top Played Games 
       </Typography>

      </Box>
      <Grid container>
      {GameData.gameData.slice(0, 4).map((gameData) => (
        <Grid item sm>
        <Card sx={{ maxWidth: 250 }}>
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

      
       <Box sx={{ my: 4, ml: 1}}
        display="flex" 
        alignItems="left"
        justifyContent="left"
      >
        <Typography variant="h5">
          New Games 
       </Typography>
      </Box>

      <Grid container>
      {GameData.gameData.slice(0, 4).reverse().map((gameData) => (
        <Grid item sm>
        <Card sx={{ maxWidth: 250 }}>
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