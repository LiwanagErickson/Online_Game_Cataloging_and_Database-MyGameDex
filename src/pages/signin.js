import {Box, Paper, TextField, Button, Typography, Link, Snackbar, Alert, ImageList, ImageListItem, Grid}from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import global from "../styles/global";
import Head from "next/dist/shared/lib/head";
import Image from 'next/image';
const style = {
  linkStyle:{
    cursor:"pointer",
    color:"primary.main"
  },
};
export default function SignIn() {
  const router = useRouter();

  const initialState={
    email:"",
    password:"",
  };
  const [state, setState] = useState(initialState);

  const messageInitialState= {
    text: "",
    severity: ""
  }
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const gotoRegister = ()=>{
    router.push("/register")
  }
  const handleChange= (prop) => (e) =>{
    setState(prevItem => ({
      ...prevItem, 
      [prop]: e.target.value,
    }));
  }
  const signIn = () => {
    router.push("/")
  }
  const handleClose = () =>{
    setOpen(false);
  }
  const itemData = [
    {
      img: 'https://www.platinumgames.com/wp-content/uploads/2016/03/nier_ec_en.jpg',
      title: 'nier',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/883710/capsule_616x353.jpg?t=1644282201',
      title: 're2',
    },
    {
      img: 'http://www.devilmaycry5.com/assets/img/common/share.png',
      title: 'dmc5',
    },
    {
      img: 'https://cdn.vox-cdn.com/thumbor/dR4fzTQYyAZoEcaOu3-AU55F0LU=/0x0:1920x1200/1200x800/filters:focal(848x227:1154x533)/cdn.vox-cdn.com/uploads/chorus_image/image/70690044/persona_5.0.jpg',
      title: 'persona5',
      cols: 2,
    },
    {
      img: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Elden-Ring-release-date-1507736.jpg?r=1634567662060',
      title: 'eldenring',
      cols: 2,
    },
    {
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1644436409',
      title: 'Honey',
      author: 'darksouls',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ytimg.com/vi/ZMLk9-tZ-_A/maxresdefault.jpg',
      title: 'monsterhunter',
    },
    {
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1603904569',
      title: 'sekiro',
    },
    {
      img: 'https://compass-ssl.xbox.com/assets/f7/42/f742c68d-8a08-44a5-8c18-0667ab11a8ba.jpg?n=CODE-VEIN_GLP-Page-Hero-1084_1920x1080.jpg',
      title: 'codevein',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://s2.gaming-cdn.com/images/products/268/orig/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg',
      title: 'witcher',
    },
    {
      img: 'https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S1_2560x1440-85f829541a833442eaace75d02e0f07d',
      title: 'Sea star',
    },
    {
      img: 'https://gepig.com/game_cover_460w/6169.jpg',
      title: 'Bike',
      cols: 2,
    },
  ];
  return (
    <Box sx={{width:"100vw", height: "100vh", display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <Head>
        <title>
          Sign in - myGameDex
        </title>
      </Head>
      <Grid sx={{display: "flex"}}>
      <Box sx={{display: "flex", alignItems:"center", flexDirection:"column"}}>
        <Typography variant="h3">
          myGameDex Online Game Cataloging and Database
        </Typography>
        <Paper elevation={3} sx={{padding:"24px", display:"flex", flexDirection:"column", marginTop:"12px"}}>
        <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
         {itemData.map((item) => ( 
        <ImageListItem key={item.img}>
        <img
        src={`${item.img}?w=161&fit=crop&auto=format`}
        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
      </ImageListItem>
       ))}
        </ImageList>
        </Paper>
    </Box>
      <Paper elevation={3} sx={{padding:"24px", display:"flex", flexDirection:"column", marginTop:"12px", marginLeft: "12vw"}}>
        <Typography sx={{display: "flex", justifyContent: "center", marginBottom: "2vh"}}>
          Sign In
        </Typography>
        <TextField label="Username" type="text" name="username" onChange={handleChange("username")}/>
        <TextField label="Password" name="password" type="password" sx={{marginTop:"12px"}} onChange={handleChange("password")} />
        <Button variant="contained" color="primary" sx={{...global.button1, marginTop:"12px"}} onClick={signIn}>
          Sign In
          </Button>
          <Box sx={{display:"flex", justifyContent: "center", marginTop:"12px"}}>
         <Typography variant="subtitle2" onClick={gotoRegister} sx={style.linkStyle}>Create New Account</Typography>
         </Box>
      </Paper>
        </Grid>
    </Box>
  );
}