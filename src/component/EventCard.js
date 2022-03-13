import { Grid } from "@material-ui/core";
import React from 'react'
import './eventCard.css'

function Event() {
  return (
    <Grid item container xs={12} lg={4}md={4} style={{justifyContent:"center"}} >
    <a href="http://www.google.com">
    <div className="containero">
      <div className="cardo">
        <div class="contento">
          <div class="imgOuto"> <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/InfoSession_sVkBcQw.png"/></div>
          <div class="contentBxo">
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
                </Grid>
  );
}
export default Event;
