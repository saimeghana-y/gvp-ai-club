import { Box, Typography } from "@material-ui/core";
import React from 'react'
import './eventCard.css'

function Team() {
  return (
  <Box>
    <a href="http://www.google.com">
    <div className="container">
      <div className="card">
        <div class="content">
          <div class="imgOut"> <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/InfoSession_sVkBcQw.png"/></div>
          <div class="contentBx">
            <h3>Do Epic Shit</h3>
            <h4>4 Dec 2021 - 5 Dec 2021</h4>
            <p>We are a  passionate group of people who work towards 
                        bringing a change in the ecosystem of development around the campus.
                        We want to create a healthy environment for the budding developers 
                        to create </p>
          </div>
        </div>
      </div>
    </div>
    </a>
  </Box>
  );
}
export default Team;
