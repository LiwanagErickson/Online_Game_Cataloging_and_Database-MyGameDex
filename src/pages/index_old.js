import { Box, Typography, Paper, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import React from 'react'
import UserLayout from '../components/UserLayout';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function index() {
  global.gameid = 1

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
          Welcome to my GameDex! 
       </Typography>
      </Paper>
       </Box>
     
       

       <Container maxWidth="lg">
       <Box sx={{ my: 4, ml: 5}}
        display="flex" 
        alignItems="left"
        justifyContent="left"
      >
        <Typography variant="h5">
          Top Popular Games 
       </Typography>

        </Box>
    {/*First row */}
         <Grid container>
           <Grid item sm>
       <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\Valo.jpg"
          alt="Valorant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valorant
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Valorant (stylized as VALORANT) is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\Pubg.png"
          alt="PUBG"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PUBG
          </Typography>
          <Typography variant="body2" color="text.secondary">
          PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds, or simply PUBG) is an online multiplayer battle royale game developed and published by PUBG Studios, a subsidiary of Krafton.   
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\fortniite1.jpg"
          alt="Fortnite"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Fortnite
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fortnite is a Battle Royale game developed by Epic games that can be played on Nintendo Switch, PlayStation 5, Android, Windows, iOS, Xbox Series X|S, Xbox One, PlayStation 4, and Mac.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
    </Grid>

    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\minecraft.png"
          alt="Minecraft"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Minecraft
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language. Following several early private testing versions.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid> {/*end of 1st row */}


    {/*Second row */} 
    <Box sx={{ my: 4, ml: 5}}
        display="flex" 
        alignItems="left"
        justifyContent="left"
      >
        <Typography variant="h5">
          Top Played Games 
       </Typography>

        </Box>

        <Grid container>
        <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\fortniite1.jpg"
          alt="Fortnite"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Fortnite
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fortnite is a Battle Royale game developed by Epic games that can be played on Nintendo Switch, PlayStation 5, Android, Windows, iOS, Xbox Series X|S, Xbox One, PlayStation 4, and Mac.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\csgo.jpg"
          alt="CSGO"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CS:GO
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series.   
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\lol.jpg"
          alt="LOL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          League of Legends
          </Typography>
          <Typography variant="body2" color="text.secondary">
          League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
    </Grid>

    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\roblox.png"
          alt="Roblox"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Roblox
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Roblox is an online game platform and game creation system developed by Roblox Corporation that allows users to program games and play games created by other users. Created by David Baszucki and Erik Cassel
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
{/*Third row */} 
    <Box sx={{ my: 4, ml: 5}}
        display="flex" 
        alignItems="left"
        justifyContent="left"
      >
        <Typography variant="h5">
          Top Grossing Games 
       </Typography>

        </Box>

        <Grid container>
           <Grid item sm>
       <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\gta.png"
          alt="Grand Theft Auto V"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Grand Theft Auto V
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following Grand Theft Auto IV.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\tetris.jpg"
          alt="Tetris"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tetris
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Tetris is a puzzle video game developed by EA Mobile and published by Electronic Arts for iOS, Android, BlackBerry OS, PlayStation 3, PlayStation Portable, Nintendo switch, and Windows Phone.   
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\wii.jpg"
          alt="Wii"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Wii Sports
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Wii Sports is a 2006 sports simulation video game developed and published by Nintendo for the Wii video game console. The game was released in North America along with the Wii on November 19, 2006
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
    </Grid>

    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\smb.png"
          alt="Super Mario"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Super Mario Bros.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Super Mario Bros. is a platform game developed and published by Nintendo. The successor to the 1983 arcade game Mario Bros. and the first in the Super Mario series, it was released in 1985.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
{/*Fourth row */} 
<Box sx={{ my: 4, ml: 5}}
        display="flex" 
        alignItems="left"
        justifyContent="left"
      >
        <Typography variant="h5">
          Top Performing Games 
       </Typography>

        </Box>

        <Grid container>
           <Grid item sm>
       <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\er.jpg"
          alt="Elden Ring"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Elden Ring
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game was directed by Hidetaka Miyazaki  and made in collaboration with fantasy novelist George Martin
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\rdr.png"
          alt="RDR"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Dead Redemption 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.   
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\d2.jpg"
          alt="Dota 2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          DOTA 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Dota 2 is a multiplayer online battle arena video game developed and published by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
    </Grid>

    <Grid item sm>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= "images\profile\ML.jpg"
          alt="ML"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile Legends: Bang Bang
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Mobile Legends: Bang Bang, commonly referred to as ML or MLBB, is a mobile multiplayer online battle arena game developed and published by Moonton, a subsidiary of ByteDance.
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



index.getLayout = function getLayout(page){
  return <UserLayout>{page}</UserLayout>
}
