import { Box, Typography } from "@material-ui/core";
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './team.css'

function Team() {
  return (
  <Box style={{backgroundColor:"#161623"}}>
    <div className="container">
      <div className="card">
        <div class="content">
          <div class="imgBx"> <img src="do_epic_shit.png"/></div>
          <div class="contentBx">
            <h3>Do Epic Shit</h3>
          </div>
        </div>
        <ul class="sci">
        <li>
          <a href="instagram.com"><InstagramIcon/></a>
        </li>
        <li>
          <a href="facebook.com"><FacebookIcon/></a>
        </li>
        <li>
          <a href="twitter.com"><TwitterIcon/></a>
        </li>
      </ul>
      </div>
    </div>
  </Box>
  );
}
export default Team;
