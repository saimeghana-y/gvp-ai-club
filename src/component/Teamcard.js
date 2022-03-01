import { Box, Grid, Typography,makeStyles } from "@material-ui/core";
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './team.css'


const useStyles = makeStyles((theme)=>({
  gridRight:{
    justifyContent:"right",
    marginTop:30,
    paddingTop:0
  },
  gridCenter:{
    marginTop:30,
    justifyContent:"center",
  },
  gridLeft:{
    marginTop:30,
    justifyContent:"left"
  }

}));

function Team(props) {
  const checked=true;
  const classes = useStyles();
  return (
  <Box style={{backgroundColor:"#08022A"}}>
  <Grid item container lg={5} xs={12}  md={4} className={classes.gridCenter}>
    <div className="container">
      <div className="card">
        <div class="content">
          <p>{props.key}</p>
          <div class="imgBx"> <img src={props.img}/></div>
          <div class="contentBx">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
          </div>
        </div>
        <ul class="sci">
        <li>
          <a href={props.inst}><InstagramIcon/></a>
        </li>
        <li>
          <a href={props.fac}><FacebookIcon/></a>
        </li>
        <li>
          <a href={props.twt}><TwitterIcon/></a>
        </li>
      </ul>
      </div>
    </div>
    </Grid>
  </Box>
  );
}
export default Team;
