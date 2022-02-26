import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  root: {
    background:"#08022A"
  },
  link: {
    textDecoration: "none",
    color: "#817C9D",
    fontSize: "17px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));



function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.root}>
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <Drawer />
        ) : (
          <div className={classes.navlinks}>
            <NavLink to="/" className={classes.link}>
              HOME
            </NavLink>
            <NavLink activeStyle={{ color:'white' }} to="/about" className={classes.link}>
              ABOUT
            </NavLink>
            <NavLink activeStyle={{ color:'white' }} to="/contact" className={classes.link}>
              CONTACT
            </NavLink>
            <NavLink activeStyle={{ color:'white' }} to="/faq" className={classes.link}>
              FAQ
            </NavLink>
            <NavLink activeStyle={{ color:'white' }} to="/team" className={classes.link}>
              TEAM
            </NavLink>            
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;