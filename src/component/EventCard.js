import { Grid } from "@material-ui/core";
import React from 'react'
import './eventCard.css'

function Event(props) {
  return (
    <Grid item container xs={12} lg={4}md={4} style={{justifyContent:"center"}} >
    <a href={props.link}>
    <div className="containero">
      <div className="cardo">
        <div class="contento">
          <div class="imgOuto"> <img src={props.img}/></div>
          <div class="contentBxo">
            <h3>{props.title}</h3>
            <h4>{props.time}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
    </a>
                </Grid>
  );
}
export default Event;
