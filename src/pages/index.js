import { Box, Typography, Paper, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import React from 'react'
import UserLayout from '../components/UserLayout';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


export default function index() {
  return (
    <React.Fragment>
    <CssBaseline />
    
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
         <Grid container>
           <Grid item sm>
       <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\Valo.jpg"
          alt="Valorant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valorant
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Valorant (stylized as VALORANT) is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\Pubg.png"
          alt="PUBG"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PUBG
          </Typography>
          <Typography variant="body2" color="text.secondary">
          PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds, or simply PUBG) is an online multiplayer battle royale game developed and published by PUBG Studios, a subsidiary of Krafton.   
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\default.jpg"
          alt="Pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Pokémon Legends: Arceus
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    </Container>
  </React.Fragment>
);
}



index.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
