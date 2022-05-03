import { Link } from 'react-router-dom'
import { Typography, Box, makeStyles, Grid, Button } from "@material-ui/core";
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


const useStyles = makeStyles((theme) => ({
  gridRight: {
    justifyContent: "right"
  },
  gridCenter: {
    marginTop: 170,
    justifyContent: "center"
  },
  gridLeft: {
    marginTop: 170,
    justifyContent: "left"
  },
  padTop: {
    paddingTop: 120,
  },
  righttext: {
    color: "#817C9D",
    paddingLeft: 50,
    paddingRight: 200,
    textAlign: "justify",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 45,
      paddingRight: 45,
    },
  },
  lefttext: {
    color: "#817C9D",
    paddingLeft: 165,
    paddingRight: 135,
    marginTop: -70,
    textAlign: "justify",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 45,
      paddingRight: 45,

    },
  },
  webGrid: {
    marginTop: 100,
    justifyContent: "center"
  },
  webRight: {
    marginTop: 50,
    justifyContent: "left"
  },
  fieldsLeftHeading: {
    color: "#9895aa",
    fontWeight: "bold",
    paddingTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: -100,
    },
  },
  fieldsRightHeading: {
    color: "#9895aa",
    fontWeight: "bold",
    paddingTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: -100,
    },
  },
  footerHeading: {
    color: "#9895aa",
    fontWeight: "bold",
    paddingTop: 30,
  },
  fieldsLeftText: {
    color: "#817C9D",
    paddingLeft: 165,
    paddingRight: 135,
    marginTop: -70,
    textAlign: "justify",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 45,
      paddingRight: 45,
      paddingTop: 70,
    },
  },
  fieldsTop: {
    [theme.breakpoints.down("sm")]: {
      marginTop: -100
    },
  },
  teamText: {
    color: "#817C9D",
    paddingLeft: 165,
    paddingRight: 135,
    marginTop: 70,
    textAlign: "justify",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 45,
      paddingRight: 45,
      marginTop: -70,
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
    marginTop: 50
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: "#08022A", paddingRight:""}}>
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





        <Grid item container xs={12} lg={6} md={6} className={classes.gridLeft}>

          <img src={heading} className="heading"></img>
          <Typography className={classes.righttext}>We are a  passionate group of people who work towards
            bringing a change in the ecosystem of development around the campus.
            We want to create a healthy environment for the budding developers
            to create solutions for real life problems and promote the "developers"
            culture.</Typography>
          <div class="glass-toolbar">
            <Button class="glass-button" component={Link} to="/events" >RSVP to Events</Button>
          </div>
        </Grid>
      </Grid>



      {/* // ----- RECENT EVENTS ----- */}

      <Grid container spacing={1} className="web-grid">
        <Grid item container xs={12} lg={12} md={12} style={{ justifyContent: "center" }} >
          <img src={eventsHeading} className="fields-heading"></img>
        </Grid>
      </Grid>


      <Grid container >

        <Event 
          img="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/20210904_182226.png"
          title= "Become the next GDSC Lead"
          time= "Fri, Apr 8, 7:00 PM (IST)"
          desc= "If you are someone who wants to improve your leadership skills or want to use them to build a local community on our campus and want to apply for the GDSC Lead for the next batch, This session is for you!"
          link= "https://gdsc.community.dev/events/details/developer-student-clubs-gayatri-vidya-parishad-college-of-engineering-visakhapatnam-presents-become-the-next-gdsc-lead-for-gvpce-ama-session/"
        />
        <Event 
          img= "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Copy%20of%20Flutter%20Festival_J9dOaED.png"
          title= "Flutter Festival"
          time= "Mon, Mar 28, 5:30 PM (IST)"
          desc= "Starting right from the basics and diving into building different applications with flutter gives you everything to get started and make you ready for building amazingly beautiful applications."
          link= "https://gdsc.community.dev/events/details/developer-student-clubs-gayatri-vidya-parishad-college-of-engineering-visakhapatnam-presents-flutter-festival-gdsc-gvpce-2/"
        />
        <Event
            img= "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Copy%20of%20Flutter%20Festival_J9dOaED.png"
            title= "Flutter Festival"
            time= "Sun, Mar 27, 7:00 PM (IST)"
            desc= "Starting right from the basics and diving into building different applications with flutter gives you everything to get started and make you ready for building amazingly beautiful applications."
            link= "https://gdsc.community.dev/events/details/developer-student-clubs-gayatri-vidya-parishad-college-of-engineering-visakhapatnam-presents-flutter-festival-gdsc-gvpce-2/"
        />

      </Grid>


      <Grid container spacing={1} style={{ justifyContent: "center" }}>
        <div class="glass-toolbar">
          <Button class="glass-button" component={Link} to="/events" >More Events</Button>
        </div>
      </Grid>

      {/* // ------ TEAM ----- */}


      <Grid container spacing={1} className="web-grid">
        <Grid item container xs={12} lg={12} md={12} style={{ justifyContent: "center" }} >
          <img src={teamHeading} className="fields-heading"></img>
        </Grid>
      </Grid>


      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography className={classes.teamText}>A Team is as efficient as the members of its team are. Teamwork has the best balance of functionality, price and ease of use. This is a rundown of how explicable each individual is and how they supplement the team.</Typography>
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webRight}>
          <LazyLoadImage
            effect="opacity"
            className="vert-move field-image"
            src={twoComp} 
            style={{width:"400px",paddingLeft:"50px", height:"400px"}}/>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <div class="glass-toolbar">
          <Button class="glass-button" component={Link} to="/team" >Meet the team</Button>
        </div>
      </Grid>


      {/* // ----- fields heading ------ */}
      <Grid container spacing={1} className={classes.fieldsTop}>
        <Grid item container xs={12} lg={12} md={12} style={{ justifyContent: "center", marginTop: 50 }} >
          <img src={fieldHeading} className="fields-heading"></img>
        </Grid>
      </Grid>



      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography variant="h4" className={classes.fieldsLeftHeading}>Web Development </Typography>
          <Typography className={classes.fieldsLeftText}>We focus on designing and maintaining websites to tackle real-time difficulties in this domain. It's the effort that goes on behind the scenes to make a website seem good, work quickly, and perform effectively while providing a seamless user experience.</Typography>
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webRight}>
          <LazyLoadImage
            effect="opacity"
            className="vert-move field-image"
            src={twoStats}
            style={{width:"400px",paddingLeft:"50px", height:"400px"}} />
        </Grid>
      </Grid>

      {/* // ---- ML ----- */}

      <Grid container spacing={1} >
        <Grid item xs={12} lg={6} md={6} container style={{ justifyContent: "right", marginTop: 50, }}>
          <LazyLoadImage
            effect="opacity"
            className="vert-move field-hide-image"
            src={oneStats}
            style={{width:"400px",paddingLeft:"50px", height:"400px"}} />
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography variant="h4" className={classes.fieldsRightHeading}>Machine Learning</Typography>
          <Typography className={classes.fieldsLeftText}>We try to remodel a simplistic machine into a machine having the ability of the mind. This technology-driven world has seen the emergence of machine learning. It is an outstanding field that enables our machines or electronic device to become more intelligent.</Typography>
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className="field-reveal-image">
          <LazyLoadImage
            effect="opacity"
            className="vert-move field-reveal-image"
            src={oneStats}
            style={{width:"400px",paddingLeft:"50px",marginLeft:"-25px", height:"400px"}} />
        </Grid>
      </Grid>


      {/* // ---- App dev ----- */}


      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography variant="h4" className={classes.fieldsLeftHeading}>App Development </Typography>
          <Typography className={classes.fieldsLeftText}>We learn learn Android in the best way by developing some basic projects to some advanced projects. There’s a serious need for Android development and in the world advancing technically with every day that goes by, the need for good android developers today is more than ever before.</Typography>
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webRight}>
          <LazyLoadImage
            effect="opacity"
            className="vert-move field-image"
            src={fippl}
            style={{width:"400px",paddingLeft:"50px", height:"400px"}} />
        </Grid>
      </Grid>


      {/* // ---- Cloud Computing ----- */}

      <Grid container spacing={1} >
        <Grid item xs={12} lg={6} md={6} container style={{ justifyContent: "right", marginTop: 50, }}>
          <LazyLoadImage
            effect="opacity"
            className="vert-move field-hide-image"
            src={statsAir}
            style={{width:"400px", height:"400px"}} />
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography variant="h4" className={classes.fieldsRightHeading}>Cloud Computing</Typography>
          <Typography className={classes.fieldsLeftText}>One of the most significant ways to acquire a skill is to apply it, and what better way to accomplish this than to work on projects? It is most commonly used for the efficient and steady functioning of businesses with less human intervention.</Typography>
        </Grid>
      </Grid>

    </Box>
  );
}
export default Home;