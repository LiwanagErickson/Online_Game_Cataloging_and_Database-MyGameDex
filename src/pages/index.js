import * as React from 'react';
import {Button, Box, Typography, AppBar, Toolbar, IconButton} from '@mui/material/';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Genres', 'Rankings', 'About US'];
const settings = ['Profile', 'Account Settings', 'Logout'];

export default function index() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 return (
  <><AppBar position="static">
     <Container maxWidth="xl">
       <Toolbar disableGutters>
       <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
         <Typography
           variant="h6"
           noWrap
           component="a"
           href="/"
           sx={{
             mr: 2,
             display: { xs: 'none', md: 'flex' },
             fontFamily: 'monospace',
             fontWeight: 700,
             letterSpacing: '.3rem',
             color: 'inherit',
             textDecoration: 'none',
           }}
         >
           myGameDex
         </Typography>

         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           <IconButton
             size="large"
             aria-label="account of current user"
             aria-controls="menu-appbar"
             aria-haspopup="true"
             onClick={handleOpenNavMenu}
             color="inherit"
           >
             <MenuIcon />
           </IconButton>
           <Menu
             id="menu-appbar"
             anchorEl={anchorElNav}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
             }}
             open={Boolean(anchorElNav)}
             onClose={handleCloseNavMenu}
             sx={{
               display: { xs: 'block', md: 'none' },
             }}
           >
             {pages.map((page) => (
               <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <Typography textAlign="center">{page}</Typography>
               </MenuItem>
             ))}
           </Menu>
         </Box>
         <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
         <Typography
           variant="h5"
           noWrap
           component="a"
           href=""
           sx={{
             mr: 2,
             display: { xs: 'flex', md: 'none' },
             flexGrow: 1,
             fontFamily: 'monospace',
             fontWeight: 700,
             letterSpacing: '.3rem',
             color: 'inherit',
             textDecoration: 'none',
           }}
         >
           LOGO
         </Typography>
         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           {pages.map((page) => (
             <Button
               key={page}
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white', display: 'block' }}
             >
               {page}
             </Button>
           ))}
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
             {settings.map((setting) => (
               <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <Typography textAlign="center">{setting}</Typography>
               </MenuItem>
             ))}
           </Menu>
         </Box>
       </Toolbar>
     </Container>
   </AppBar><Box component="span" sx={{ width: "100vw", height: "40vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
       <Typography variant="h1" component="h1">
         Welcome to myGameDex!
       </Typography>
       <Typography variant="h5" component="h5" sx={{ color: "red" }}>
         Online Game Cataloging and Database
       </Typography>
     </Box></>
 );
};