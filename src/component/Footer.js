import { NavLink } from 'react-router-dom'
import { Typography,Box,makeStyles, Grid } from "@material-ui/core"
import './footerIcons.scss'


const useStyles = makeStyles((theme)=>({
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
    marginLeft: theme.spacing(22),
    marginBottom: theme.spacing(7),
    marginTop:50,
    [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(-20),
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box style={ {backgroundColor:"#08022A"}}>


{/* // ----- Footer ----- */}


      <Grid container spacing={1} style={{backgroundColor:"black"}}>


{/* // -- quick links -- */}


        <Grid item xs={12} lg={12}md={12} container style={{justifyContent:"center", color:"#817C9D", marginTop:"30px"}}>
            <Typography variant="h4" className={classes.footerHeading}>Quick Links</Typography>
        </Grid>

        <div className={classes.navlinks}>
        <Grid container spacing={1}>
            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center",}}>
                <NavLink to="/" className={classes.link}>
                  HOME
                </NavLink>
            </Grid>

            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center",}}>
                <NavLink activeStyle={{ color:'white' }} to="/events" className={classes.link}>
                  EVENTS
                </NavLink>
            </Grid>

            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center", color:"#817C9D"}}>
                <NavLink activeStyle={{ color:'white' }} to="/community" className={classes.link}>
                  COMMUNITY
                </NavLink>
            </Grid>


            <Grid item xs={12} lg={3}md={4} container style={{justifyContent:"center", color:"#817C9D"}}>
                <NavLink activeStyle={{ color:'white' }} to="/team" className={classes.link}>
                  TEAM
                </NavLink> 
            </Grid>
              
        </Grid>
              </div>
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
export default Home;