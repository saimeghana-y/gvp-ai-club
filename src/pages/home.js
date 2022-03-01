import { Link, NavLink } from 'react-router-dom'
import { Typography,Box,makeStyles, Grid, Button  } from "@material-ui/core";
import logoAI from "../images/ai club logo.png"
import logoGDSC from "../images/gdsc logo.png"
import leftPlanet from "../images/left planet.png"
import rightPlanet from "../images/right planet.png"
import heading from "../images/Main Heading.png"
import fieldHeading from "../images/fields heading.png"
import teamHeading from "../images/team heading.png"
import eventsHeading from "../images/recent events.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Event from "../component/EventCard"
import fippl from "../images/five people.png"
import coffeeLaptop from "../images/laptop coffee.png"
import oneStats from "../images/one man stats.png"
import statsAir from "../images/stats in air.png"
import twoComp from "../images/two girls comp.png"
import twoStats from "../images/two people stats.png"
import './home.css'
import './footerIcons.scss'


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
  righttext:{
    color:"#817C9D",
    paddingLeft:50,
    paddingRight:200,
    textAlign:"justify",
    fontSize:18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft:30,
      paddingRight:30,
    },
  },
  lefttext:{
    color:"#817C9D",
    paddingLeft:165,
    paddingRight:135,
    marginTop:-70,
    textAlign:"justify",
    fontSize:18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft:30,
      paddingRight:30,
      
    },
  },
  webGrid:{
    marginTop:100,
    justifyContent:"center"
  },
  webRight:{
    marginTop:50,
    justifyContent:"left"
  },
  fieldsLeftHeading:{
    color:"#9895aa", 
    fontWeight:"bold", 
    paddingTop:30,
    [theme.breakpoints.down("sm")]: {
      marginTop:-100,
    },
  },
  fieldsRightHeading:{
    color:"#9895aa", 
    fontWeight:"bold", 
    paddingTop:30,
    [theme.breakpoints.down("sm")]: {
      marginTop:-100,
    },
  },
  footerHeading:{
    color:"#9895aa", 
    fontWeight:"bold", 
    paddingTop:30,
  },
  fieldsLeftText:{
    color:"#817C9D",
    paddingLeft:165,
    paddingRight:135,
    marginTop:-70,
    textAlign:"justify",
    fontSize:18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft:30,
      paddingRight:30,
      paddingTop:70,
    },
  },
  fieldsTop:{
    [theme.breakpoints.down("sm")]: {
      marginTop:-100
    },
  },
  teamText:{
    color:"#817C9D",
    paddingLeft:165,
    paddingRight:135,
    marginTop:70,
    textAlign:"justify",
    fontSize:18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft:30,
      paddingRight:30,
      marginTop:-70,
    },
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
  navlinks: {
    display: "flex",
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(7),
    marginTop:50
  },
}));

function About() {
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
            <img src={rightPlanet} className="moveUp remove"></img>
            <img src={logoGDSC} className="zoom-in-out-box paddLeft moveMobile" ></img>
            </Grid>
          </Grid>

        </Grid>





        <Grid item container xs={12} lg={6}md={6} className={classes.gridLeft}>
        
        <img src={heading} className="heading"></img>
        <Typography  className={classes.righttext}>We are a  passionate group of people who work towards 
                    bringing a change in the ecosystem of development around the campus.
                    We want to create a healthy environment for the budding developers 
                    to create solutions for real life problems and promote the "developers"
                    culture.</Typography>
        <div class="glass-toolbar">
          <Button class="glass-button" component={Link} to="/team" >RSVP to Events</Button>
        </div>
        </Grid>
      </Grid>
      

{/* // ----- fields heading ------ */}
      <Grid container spacing={1} className={classes.fieldsTop}>
                <Grid item container xs={12} lg={12}md={12} style={{justifyContent:"center", marginTop:50}} >
                <img src={fieldHeading} className="fields-heading"></img>
                  </Grid>
      </Grid>



      <Grid container spacing={1}>
           <Grid item xs={12} lg={6}md={6} container className={classes.webGrid}>
             <Typography variant="h4" className={classes.fieldsLeftHeading}>Web Development </Typography>
            <Typography  className={classes.fieldsLeftText}>We are a  passionate group of people who work towards 
                        bringing a change in the ecosystem of development around the campus.
                        We want to create a healthy environment for the budding developers 
                        to create solutions for real life problems and promote the "developers"
                        culture.</Typography>
            </Grid>

           <Grid item xs={12} lg={6}md={6} container className={classes.webRight}>
           <LazyLoadImage
              effect="opacity"
              className="vert-move field-image"
              src={twoStats} />
            </Grid>
      </Grid>

{/* // ---- ML ----- */}

      <Grid container spacing={1} >
           <Grid item xs={12} lg={6}md={6} container style={{justifyContent:"right", marginTop:50,}}>
           <LazyLoadImage
              effect="opacity"
              className="vert-move field-hide-image"
              src={oneStats} />
            </Grid>

           <Grid item xs={12} lg={6}md={6} container className={classes.webGrid}>
             <Typography variant="h4" className={classes.fieldsRightHeading}>Machine Learning</Typography>
            <Typography  className={classes.fieldsLeftText}>We are a  passionate group of people who work towards 
                        bringing a change in the ecosystem of development around the campus.
                        We want to create a healthy environment for the budding developers 
                        to create solutions for real life problems and promote the "developers"
                        culture.</Typography>
            </Grid>

            <Grid item xs={12} lg={6}md={6} container className="field-reveal-image">
           <LazyLoadImage
              effect="opacity"
              className="vert-move field-reveal-image"
              src={oneStats} />
            </Grid>
      </Grid>


{/* // ---- App dev ----- */}


      <Grid container spacing={1}>
           <Grid item xs={12} lg={6}md={6} container className={classes.webGrid}>
             <Typography variant="h4" className={classes.fieldsLeftHeading}>App Development </Typography>
            <Typography  className={classes.fieldsLeftText}>We are a  passionate group of people who work towards 
                        bringing a change in the ecosystem of development around the campus.
                        We want to create a healthy environment for the budding developers 
                        to create solutions for real life problems and promote the "developers"
                        culture.</Typography>
            </Grid>

           <Grid item xs={12} lg={6}md={6} container className={classes.webRight}>
           <LazyLoadImage
              effect="opacity"
              className="vert-move field-image"
              src={fippl} />
            </Grid>
      </Grid>


{/* // ---- Cloud Computing ----- */}

      <Grid container spacing={1} >
          <Grid item xs={12} lg={6}md={6} container style={{justifyContent:"right", marginTop:50,}}>
          <LazyLoadImage
              effect="opacity"
              className="vert-move field-hide-image"
              src={statsAir} />
            </Grid>

          <Grid item xs={12} lg={6}md={6} container className={classes.webGrid}>
            <Typography variant="h4" className={classes.fieldsRightHeading}>Cloud Computing</Typography>
            <Typography  className={classes.fieldsLeftText}>We are a  passionate group of people who work towards 
                        bringing a change in the ecosystem of development around the campus.
                        We want to create a healthy environment for the budding developers 
                        to create solutions for real life problems and promote the "developers"
                        culture.</Typography>
            </Grid>
      </Grid>

{/* // ----- RECENT EVENTS ----- */}

      <Grid container spacing={1} className="web-grid">
                <Grid item container xs={12} lg={12}md={12} style={{justifyContent:"center"}} >
                <img src={eventsHeading} className="fields-heading"></img>
                  </Grid>
      </Grid>


      <Grid container spacing={1}>
                <Grid item container xs={12} lg={4}md={4} style={{justifyContent:"center",}} >
                <Event/>
                </Grid>

                <Grid item container xs={12} lg={4}md={4} style={{justifyContent:"center",}} >
                <Event/>
                </Grid>

                <Grid item container xs={12} lg={4}md={4} style={{justifyContent:"center",}} >
                <Event/>
                </Grid>
      </Grid>
      

      <Grid container spacing={1} style={{justifyContent:"center"}}>
      <div class="glass-toolbar">
          <Button class="glass-button" component={Link} to="/team" >More Events</Button>
      </div>
      </Grid>

{/* // ------ TEAM ----- */}


<Grid container spacing={1} className="web-grid">
                <Grid item container xs={12} lg={12}md={12} style={{justifyContent:"center"}} >
                <img src={teamHeading} className="fields-heading"></img>
                  </Grid>
      </Grid>


<Grid container spacing={1}>
           <Grid item xs={12} lg={6}md={6} container className={classes.webGrid}>
            <Typography  className={classes.teamText}>We are a  passionate group of people who work towards 
                        bringing a change in the ecosystem of development around the campus.
                        We want to create a healthy environment for the budding developers 
                        to create solutions for real life problems and promote the "developers"
                        culture.</Typography>
            </Grid>

           <Grid item xs={12} lg={6}md={6} container className={classes.webRight}>
           <LazyLoadImage
              effect="opacity"
              className="vert-move field-image"
              src={twoComp} />
            </Grid>
</Grid>

<Grid container spacing={1} style={{justifyContent:"center", marginBottom:"50px"}}>
      <div class="glass-toolbar">
          <Button class="glass-button" component={Link} to="/team" >Meet the team</Button>
      </div>
</Grid>


{/* // ----- Footer ----- */}


      <Grid container spacing={1} style={{backgroundColor:"black"}}>


{/* // -- quick links -- */}


        <Grid item xs={12} lg={12}md={12} container style={{justifyContent:"center", color:"#817C9D", marginTop:"30px"}}>
            <Typography variant="h4" className={classes.footerHeading}>Quick Links</Typography>
        </Grid>

        <Grid container spacing={1}>
            <div className={classes.navlinks}>
            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center",}}>
                <NavLink to="/" className={classes.link}>
                  HOME
                </NavLink>
            </Grid>

            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center",}}>
                <NavLink activeStyle={{ color:'white' }} to="/about" className={classes.link}>
                  ABOUT
                </NavLink>
            </Grid>


            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center", color:"#817C9D"}}>
                <NavLink activeStyle={{ color:'white' }} to="/contact" className={classes.link}>
                  CONTACT
                </NavLink>
            </Grid>


            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center", color:"#817C9D"}}>
                <NavLink activeStyle={{ color:'white' }} to="/faq" className={classes.link}>
                  FAQ
                </NavLink>
            </Grid>


            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center", color:"#817C9D"}}>
                <NavLink activeStyle={{ color:'white' }} to="/team" className={classes.link}>
                  TEAM
                </NavLink> 
            </Grid>
              
              </div>
        </Grid>
{/* // -- socials -- */}


          <Grid item xs={12} lg={12}md={12} container style={{justifyContent:"center", color:"#817C9D"}}>
                <Typography variant="h4" className={classes.footerHeading}>Socials</Typography>
          </Grid>

        
           <Grid item xs={12} lg={12}md={12} container style={{justifyContent:"center", paddingTop:"30px"}}>

              <ul class="social-networks spin-icon">
                <li><a href="https://www.linkedin.com/" class="icon-linkedin">LinkedIn</a></li>
                <li><a href="https://twitter.com/" class="icon-twitter">Twitter</a></li>
                <li><a href="https://www.facebook.com/" class="icon-facebook">Facebook</a></li>
                <li><a href="https://github.com" class="icon-github">GitHub</a></li>
                <li><a href="https://instagram.com" class="icon-instagram">Instagram</a></li>
              </ul>

            </Grid>

          <Grid item xs={12} lg={12}md={12} container style={{justifyContent:"center", color:"#817C9D"}}>
            <Typography component="p" style={{marginBottom:"30px"}}>
              @2022 All right reserved
            </Typography>
          </Grid>
      </Grid>
    

    </Box>
  );
}
export default About;