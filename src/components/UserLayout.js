import * as React from 'react';
import {Button, Box, Typography, AppBar, Toolbar, IconButton, Grid, Menu, Container, Avatar, Tooltip, MenuItem, Divider, SearchIconWrapper, StyledInputBase} from '@mui/material/';
import { useRouter } from "next/router";
import Script from 'next/script';
import Image from 'next/image';
import Head from 'next/head';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import global from '../styles/global';

const AccountType = true;
const IsLoggedIn = true;

export default function UserLayout({children}) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();


  const handleOpenUserMenu = (event) => {
    if(IsLoggedIn) {
      setAnchorElUser(event.currentTarget);
    } else {
      router.push("/signin")
    }
  };

  const UnhideAdminDashboard = () => {
    console.log("test");
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const gotoGameList = ()=>{
    router.push("/gamelist")
  }
  const gotoGenres = ()=>{
    router.push("/genres")
  }
  const gotoAboutUS = ()=>{
    router.push("/aboutus")
  }
  const gotoSettings = ()=>{
    if(IsLoggedIn) {
      router.push("/settings")
    } else {
      router.push("/signin")
    }
  }
  const gotoProfile = ()=>{
    if(IsLoggedIn) {
      router.push("/profile")
    } else {
      router.push("/signin")
    }
  }
  const gotoAdminDashboard = ()=>{
    router.push("/admindashboard")
  }
  UnhideAdminDashboard;
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
 return (
  <Box>
    <Head>
      <title>Home - myGameDex</title>
    </Head>
  <Grid
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
             display: "flex"
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
                   onClick={gotoGameList}
                   sx={{ my: 2, color: 'white', display: 'block' }}
                 >
                     Games
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
         <Box>
         <Search  sx={{marginRight: "10px", display: "flex"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
         <Box sx={{ flexGrow: 0 }}>
           <Tooltip title="Open settings">
             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Profile" src="/images/profile/default.jpg" />
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
              <Image src="/assets/svg/profile.svg" alt="Profile" width="20px" height={15}/>
                 <Typography sx={{marginLeft: "10px"}} textAlign="center">{'Profile'}</Typography>
              </MenuItem>
              <MenuItem key={'Account Settings'} onClick={gotoSettings}>
                 <Image src="/assets/svg/settings.svg" alt="Settings" width="20px" height={15}/>
                 <Typography sx={{marginLeft: "10px"}} textAlign="center">{'Account Settings'}</Typography>
              </MenuItem>
              <Divider/>
              <MenuItem key={'Logout'} onClick={handleCloseUserMenu}>
                 <Image src="/assets/svg/signout.svg" alt="Sign out" width="20px" height={15}/>
                 <Typography sx={{marginLeft: "10px"}} textAlign="center">{'Sign out'}</Typography>
              </MenuItem>
           </Menu>
         </Box>
       </Toolbar>
     </Container>
   </AppBar>
   </Grid>
   <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
     </Grid>
     <Box>{children}</Box>
     </Box>
 );
};