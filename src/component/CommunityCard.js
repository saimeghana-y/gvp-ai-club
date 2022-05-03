import { Grid } from "@material-ui/core";
import React from 'react'
import './communityCard.css'

function Card(props) {
  return (
    <Grid item container xs={12} lg={4} md={4} style={{ justifyContent: "center" }} >
      
        <div className="container-c">
          <div className="card-c">
            <div class="content-c">
              <a href={props.link}>
                <div class="imgBx-c">
                  <img src={props.img} />
                </div>
                
                <div class="contentBx-c">
                  <h3>{props.title}</h3>
                </div>
                </a>
            </div>
          </div>
        </div>
      
    </Grid>
  );
}
export default Card;
