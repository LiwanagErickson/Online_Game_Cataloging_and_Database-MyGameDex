import {Box, Paper, TextField, Button, Typography, Link}from "@mui/material";
import { useRouter } from "next/router";
import global from "../styles/global";
import Head from "next/head";
const style = {
  linkStyle:{
    cursor:"pointer",
    color:"primary.main"
  },
};
export default function SignIn() {
  const router = useRouter();
  const gotoSignIn = ()=>{
    router.push("/sign-in")
  }
  return (
    <Box sx={{width:"100vw", height: "100vh", display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <Head>
        <title>
          Register
        </title>
      </Head>
      <Box>
        <Typography variant="h5">Create New Account</Typography>
      </Box>
      <Paper elevation={3} sx={{padding:"24px", display:"flex", flexDirection:"column", marginTop:"12px"}}>
        <TextField label="Email Address" type="email" name="email"/>
        <TextField label="Password" name="password" type="password" sx={{marginTop:"12px"}}/>
        <TextField label="Confirm Password" name="cpassword" type="password" sx={{marginTop:"12px"}}/>
        <Button variant="contained" sx={{...global.button1,marginTop:"12px"}}>
          Register
          </Button>
          <Box sx={{display:"flex", justifyContent: "center", marginTop:"12px"}}>
         <Typography variant="subtitle2" onClick={gotoSignIn} sx={style.linkStyle}>Already Have an Account? Sign in</Typography>
         </Box>
      </Paper>
    </Box>
  );
}
