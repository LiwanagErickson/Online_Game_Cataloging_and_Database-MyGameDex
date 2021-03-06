import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import UserLayout from '../components/UserLayout';
import { Box, Typography, Paper, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { spacing } from '@mui/system';


export default function aboutus() {
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
          Hi there! We are programmers from BSIT 3C
       </Typography>
      </Paper>
       </Box>
     
       <Container maxWidth="lg">
         <Grid container>
           <Grid item sm>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= "images\profile\mEE.jpg"
          alt="Ian"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Front-end dev
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hi I'm Ian and I like playing mobile games.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= "images\profile\1.jpg"
          alt="Erickson"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Full stack
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Erickson
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= "images\profile\default.jpg"
          alt="Lester"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Front-end dev
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lester
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

aboutus.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
