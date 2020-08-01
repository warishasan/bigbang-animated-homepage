import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from "../images/logo.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appBar: {
    backgroundImage:  "linear-gradient(to bottom, lightgrey , white)"
  },
  title: {
   color: "black",
   fontSize: "40px",
   minWidth : "200px",
   textShadow: "2px 5px 5px black",
   marginLeft: "20px"
  
  },
  logo:{
      marginTop:"5px",
      marginLeft: "30px",
      height: "100px",
      width: "100px"
  },
  buttonGroup:{
      marginLeft: "900px",
      display: "flex",
      flexDirection: "row"
  },
  buttons:{
      padding:"10px",
      margin: "20px",
      width : "150px",
      fontSize: "18px",
      backgroundColor:"black",
      color: "white",
      borderRadius: "15px",
      '&:hover': {
        backgroundColor: "darkgrey"
    
    },

  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
        <img className = {classes.logo} src = {logo} alt = "siteLogo"></img>
          <Typography variant="h6" className={classes.title}>
            BIG BANG
          </Typography>
          <div className = {classes.buttonGroup}>
          <button  className = {classes.buttons}>Home</button>
          <button onClick ={()=> alert("This page has not been created yet. This is only a test site")} className = {classes.buttons}>Services</button>
          <button onClick ={()=> alert("This page has not been created yet. This is only a test site")}  className = {classes.buttons}> About</button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}