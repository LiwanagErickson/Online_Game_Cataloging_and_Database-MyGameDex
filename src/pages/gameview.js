import { Box, Typography, Paper, List, ListItem, Grid, Input } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import global from '../styles/global';
import { GameData } from "../components/json/GameData";
import UserLayout from '../components/UserLayout';

export default function gameview() {
  var [gameid, setgameid] = useState(0);

useEffect(() => {
    const str = window.location.href.toString();
    setgameid(str.substring(str.indexOf('=') + 1));
    console.log(gameid)
  }, []);

  

  console.log(global)
  return (
    
    <>

    <Box justify = "center">
                <Box 
                component="img"
                sx={{
                  height: 360,
                  width: 1920,
                  marginTop: "10px",
                  Opacity: .3,
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                  display: "flex"
              }}
              alt="Game Banner"
              src={GameData.gameData[gameid].banner_url}/>
          <Grid>
          <Box sx={{ display: "flex", justifyContent: "center"}}>
              <Paper elevation={3} sx={{ padding: "12px", display: "flex", flexDirection: "column", marginTop: "4px" }}>
                  <Typography variant="h5">
                      Game
                  </Typography>

                  <List>
                      <ListItem>
                          Name: {GameData.gameData[gameid].name}
                      </ListItem>
                      <ListItem>
                          Genres: {GameData.gameData[gameid].genres.toString(" ")}
                      </ListItem>
                      <ListItem>
                          Descripton: {GameData.gameData[gameid].descripton}
                      </ListItem>
                  </List>
              </Paper>
          </Box>
          </Grid>
      </Box>
      </>
  )
}

gameview.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
