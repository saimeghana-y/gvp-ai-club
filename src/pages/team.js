import { Box, Typography,Grid,makeStyles } from "@material-ui/core";
import React from 'react'
import Team from "../component/Teamcard.js"


const useStyles = makeStyles((theme)=>({
  gridRight:{
    justifyContent:"right",
    marginTop:30,
    paddingTop:0
  },
  gridCenter:{
    marginTop:30,
    justifyContent:"center",
    paddingLeft:-10
  },
  gridLeft:{
    marginTop:30,
    justifyContent:"left"
  },
  display:{
    display: "inline-flex"
  }

}));
function Teamm() {
  const checked=true;
  const classes = useStyles();
  return (
    <Box style={ {backgroundColor:"#08022A"}}>
      <Grid container spacing={1} className={classes.display}>
       <Grid item  md={4} className={classes.gridLeft} >
         <Team 
         img="do_epic_shit.png"
         title="left"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
       <Grid item md={4} className={classes.gridCenter}>
        <Team 
         img="do_epic_shit.png"
         title="centre"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
       <Grid item  md={4} className={classes.gridRight}>
        <Team 
         img="do_epic_shit.png"
         title="right"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
      </Grid>

      <Grid container spacing={1} className={classes.display}>
       <Grid item  md={4} className={classes.gridLeft} >
         <Team 
         img="do_epic_shit.png"
         title="left"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
       <Grid item md={4} className={classes.gridCenter}>
        <Team 
         img="do_epic_shit.png"
         title="centre"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
       <Grid item  md={4} className={classes.gridRight}>
        <Team 
         img="do_epic_shit.png"
         title="right"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.display}>
       <Grid item  md={4} className={classes.gridLeft} >
         <Team 
         img="do_epic_shit.png"
         title="left"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
       <Grid item md={4} className={classes.gridCenter}>
        <Team 
         img="do_epic_shit.png"
         title="centre"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
       <Grid item  md={4} className={classes.gridRight}>
        <Team 
         img="do_epic_shit.png"
         title="right"
         desc="description"
         inst="instagram.com"
         fac="facebook.com"
         twt="twitter.com"
        />
       </Grid>
      </Grid>
    </Box>
  );
}
export default Teamm;