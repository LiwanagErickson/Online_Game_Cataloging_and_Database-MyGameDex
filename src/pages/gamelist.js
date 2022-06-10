import * as React from 'react';
import ReactDOM from 'react-dom';
import {Box, Button, Grid} from '@mui/material';
import { GameData } from "../components/json/GameData";
import UserLayout from '../components/UserLayout';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function gamelist() {
  return (
<React.Fragment>
    <CssBaseline />


    <Container maxWidth="lg">
    <Grid container>
  <Box component="div" sx={{ width: "100vw", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",my: 6, ml: 5 }}>
   {GameData.gameData.map((gameData) => (
                  <Button href={'/gameview?id=' + gameData.id}>{gameData.name}</Button>  
              ))}
     </Box>
    </Grid>
     </Container>
  </React.Fragment>


  );
  
}
gamelist.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
