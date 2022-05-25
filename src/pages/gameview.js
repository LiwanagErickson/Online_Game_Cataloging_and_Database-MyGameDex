import { Box, Typography, Paper, List, ListItem } from '@mui/material'
import React from 'react'
import global from '../styles/global';
import { GameData } from "../components/json/GameData";

import UserLayout from '../components/UserLayout';
export default function gameview() {

  var game_id = 1;

  return (
    <><Box justify = "center">
          <Box sx={{ display: "flex", justifyContent: "center",}}>
              <Paper elevation={3} sx={{ padding: "12px", display: "flex", flexDirection: "column", marginTop: "4px" }}>
                  <Typography variant="h5">
                      Game
                  </Typography>
                  <Box
                component="img"
                sx={{
                  height: 500,
                  width: 1460,
                  marginTop: "10px"
                  
              }}
              alt="Game Banner"
              src={GameData[game_id].banner_url}/>
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
      </Box>
      </>
  )
}

gameview.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
