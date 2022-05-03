import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(22),
    paddingTop: 30
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  root: {
    background:"#08022A",
    marginTop:-35,
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
            <NavLink activeStyle={{ color:'white' }} to="/events" className={classes.link}>
              EVENTS
            </NavLink>
            <NavLink activeStyle={{ color:'white' }} to="/community" className={classes.link}>
            COMMUNITY
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
