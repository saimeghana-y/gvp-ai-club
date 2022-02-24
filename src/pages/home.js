import { Typography,Box,Toolbar,makeStyles,Slide, createTheme, Grid,Zoom  } from "@material-ui/core";
import logoAI from "../images/ai club logo.png"
import logoGDSC from "../images/gdsc logo.png"
import leftPlanet from "../images/left planet.png"
import rightPlanrt from "../images/right planet.png"
import heading from "../images/Main Heading.png"

import './home.css'

const useStyles = makeStyles((theme)=>({
  gridRight:{
    justifyContent:"right"
  },
  gridCenter:{
    marginTop:170,
    justifyContent:"center"
  },
  gridLeft:{
    marginTop:170,
    justifyContent:"left"
  },
  padTop:{
    paddingTop:120,
  },
  text:{
    color:"#817C9D",
    paddingLeft:50,
    paddingRight:200,
    textAlign:"justify",
    fontSize:18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft:30,
      paddingRight:30,
      
    },
  }
}));

function About() {
  const checked=true;
  const classes = useStyles();
  return (
    <Box style={ {backgroundColor:"#08022A"}}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6} className="padBack">

          <Grid container spacing={1} className={classes.padTop}>
            <Grid item xs={6} container className={classes.gridRight}>
            <img src={logoAI} className="zoom-in-out-box moveMobile"></img>
            <img src={leftPlanet} className="moveDown remove"></img>
            </Grid>

            <Grid item xs={6} container className={classes.gridCenter}>
            <img src={rightPlanrt} className="moveUp remove"></img>
            <img src={logoGDSC} className="zoom-in-out-box paddLeft moveMobile" ></img>
            </Grid>
          </Grid>

        </Grid>

        <Grid item container xs={12} lg={6}md={6} className={classes.gridLeft}>
        
        <img src={heading} className="heading"></img>
        <Typography  className={classes.text}>We are a  passionate group of people who work towards 
                    bringing a change in the ecosystem of development around the campus.
                    We want to create a healthy environment for the budding developers 
                    to create solutions for real life problems and promote the "developers"
                    culture.</Typography>
        <div class="glass-toolbar">
          <button class="glass-button">RSVP to Events</button>
        </div>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
           <Grid item xs={12} lg={6}md={6} container className={classes.gridCenter}>
             <h1 style={{backgroundColor:'white'}}>Heading</h1>
            </Grid>
           <Grid item xs={12} lg={6}md={6} container className={classes.gridCenter}>
             <h1 style={{backgroundColor:'white'}}>Heading</h1>
            </Grid>
   
      </Grid>
    </Box>
  );
}
export default About;