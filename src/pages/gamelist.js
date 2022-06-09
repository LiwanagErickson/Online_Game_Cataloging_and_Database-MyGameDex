import * as React from 'react';
import ReactDOM from 'react-dom';
import {Box, Button} from '@mui/material';
import { GameData } from "../components/json/GameData";
import UserLayout from '../components/UserLayout';

export default function gamelist() {
  return (
  <Box component="div" sx={{ width: "100vw", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
   {GameData.gameData.map((gameData) => (
                  <Button href={'/gameview?id=' + gameData.id}>{gameData.name}</Button>  
              ))}
     </Box>
  );
}
gamelist.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
