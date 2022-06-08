import { Box, Typography, Paper, List, ListItem, Grid } from '@mui/material'
import React from 'react'
import global from '../styles/global';
import { GameData } from "../components/json/GameData";
import UserLayout from '../components/UserLayout';
import { BlurLinear } from '@mui/icons-material';
import { maxHeight, maxWidth } from '@mui/system';
export default function gameview() {

  var game_id = 3;
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
              src={GameData[game_id].banner_url}/>
          <Grid>
          <Box sx={{ display: "flex", justifyContent: "center"}}>
              <Paper elevation={3} sx={{ padding: "12px", display: "flex", flexDirection: "column", marginTop: "4px" }}>
                  <Typography variant="h5">
                      Game
                  </Typography>

                  <List>
                      <ListItem>
                          Name: {GameData[game_id].name}
                      </ListItem>
                      <ListItem>
                          Genres: {GameData[game_id].genres.toString(" ")}
                      </ListItem>
                      <ListItem>
                          Descripton: {GameData[game_id].descripton}
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
