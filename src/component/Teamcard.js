import { Box, Typography } from "@material-ui/core";
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './team.css'

function Team(props) {
  return (
  <Box style={{backgroundColor:"#161623"}}>
    <div className="container">
      <div className="card">
        <div class="content">
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
  </Box>
  );
}
export default Team;
