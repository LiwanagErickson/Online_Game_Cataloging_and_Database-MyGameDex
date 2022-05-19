import * as React from 'react';
import {Button, Box, Typography, AppBar, Toolbar, IconButton, Grid} from '@mui/material/';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/router";
import Script from 'next/script';

const AccountType = true;
const genre = ['Action', 'Adventure', 'Horror', 'Multiplayer', 'Sandbox', 'Shooter', 'Simulation', 'Sport', 'Real-time Strategy'];

export default function ranking() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const UnhideAdminDashboard = () => {
    console.log("test");
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const gotoRankings = ()=>{
    router.push("/rankings")
  }
  const gotoGenres = ()=>{
    router.push("/genres")
  }
  const gotoAboutUS = ()=>{
    router.push("/aboutus")
  }
  const gotoSettings = ()=>{
    router.push("/settings")
  }
  const gotoProfile = ()=>{
    router.push("/profile")
  }
  const gotoAdminDashboard = ()=>{
    router.push("/admindashboard")
  }
  UnhideAdminDashboard;
 return (
  <><Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  ><AppBar position="static">
     <Container maxWidth="xl">
       <Toolbar disableGutters>
         <Typography
           variant="h6"
           noWrap
           component="a"
           href="/"
           sx={{
             mr: 2,
             display: { xs: 'flex', md: 'flex' },
             fontFamily: 'monospace',
             fontWeight: 700,
             letterSpacing: '.3rem',
             color: 'inherit',
             textDecoration: 'none',
           }}
         >
           myGameDex
         </Typography>
         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
         <Button
                   key={'genres'}
                   onClick={gotoGenres}
                   sx={{ my: 2, color: 'white', display: 'block' }}
                 >
                   Genres
                 </Button><Button
                   key={'rankings'}
                   onClick={gotoRankings}
                   sx={{ my: 2, color: 'white', display: 'block' }}
                 >
                     Rankings
                   </Button><Button
                     key={'aboutus'}
                     onClick={gotoAboutUS}
                     sx={{ my: 2, color: 'white', display: 'block' }}
                   >
                     About US
                   </Button>
                   <Button
                     key={'admindashboard'}
                     onClick={gotoAdminDashboard}
                     sx={{ my: 2, color: 'white', display: 'hide' }}
                   ></Button>
         </Box>
         <Box sx={{ flexGrow: 0 }}>
           <Tooltip title="Open settings">
             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Profile" src="/images/profile/1.jpg" />
             </IconButton>
           </Tooltip>
           <Menu
             sx={{ mt: '45px' }}
             id="menu-appbar"
             anchorEl={anchorElUser}
             anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
             open={Boolean(anchorElUser)}
             onClose={handleCloseUserMenu}
           > 
              <MenuItem key={'Profile'} onClick={gotoProfile}>
                 <Typography textAlign="center">{'Profile'}</Typography>
              </MenuItem>
              <MenuItem key={'Account Settings'} onClick={gotoSettings}>
                 <Typography textAlign="center">{'Account Settings'}</Typography>
              </MenuItem>
              <MenuItem key={'Logout'} onClick={handleCloseUserMenu}>
                 <Typography textAlign="center">{'Logout'}</Typography>
              </MenuItem>
           </Menu>
         </Box>
       </Toolbar>
     </Container>
   </AppBar>
   </Grid>
   <Box component="div" sx={{ width: "100vw", height: "40vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
   {genre.map((genre) => (
                  <Button textAlign="center">{genre}</Button>
              ))}
     </Box>
     </>
 );
};