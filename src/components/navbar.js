import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundImage: "linear-gradient(to bottom, lightgrey , white)",
  },

  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  typo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  logo: {
    marginTop: "1rem",
    marginLeft: "1rem",
    height: "5rem",
    width: "5rem",
  },

  title: {
    fontSize: "2rem",
    color: "black",
  },
  buttons: {
    padding: "1rem",
    margin: "1rem",
    fontSize: "1rem",
    backgroundColor: "black",
    color: "white",

    borderRadius: "2vmax",
    "&:hover": {
      backgroundColor: "darkgrey",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.typo}>
          <img className={classes.logo} src={logo} alt="siteLogo"></img>
          <h3 className={classes.title}> BIG BANG</h3>
        </Typography>

        <Typography variant="h6" className={classes.typo}>
          <button
            onClick={() =>
              alert(
                "This page has not been created yet. This is only a test site"
              )
            }
            className={classes.buttons}
          >
            Services
          </button>
          <button
            onClick={() =>
              alert(
                "This page has not been created yet. This is only a test site"
              )
            }
            className={classes.buttons}
          >
            {" "}
            About
          </button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
