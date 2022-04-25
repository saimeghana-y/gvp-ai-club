import { Box, Grid, Typography,makeStyles } from "@material-ui/core";
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './team.css'

function Team(props) {
  return (
  <Grid item container xs={12} lg={4}md={4} style={{justifyContent:"center"}} >
    <div className="containert">
      <div className="cardt">
        <div class="contentt">
          <p>{props.key}</p>
          <div class="imgBxt"> <img src={props.img}/></div>
          <div class="contentBxt">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
          </div>
        </div>
        <ul class="sci">
        <li>
          <a href={props.git}><GitHub/></a>
        </li>
        <li>
          <a href={props.link}><LinkedInIcon/></a>
        </li>
        <li>
          <a href={props.twt}><TwitterIcon/></a>
        </li>
      </ul>
      </div>
    </div>
    </Grid>
  );
}
export default Team;
