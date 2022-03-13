import { Grid } from "@material-ui/core";
import React from 'react'
import './communityCard.css'
import instagram from "../images/instagram.png"

function Card() {
  return (
    <Grid item container xs={12} lg={4}md={4} style={{justifyContent:"center"}} >
    <a href="http://www.google.com">
    <div className="containero">
      <div className="cardo">
      <div class="contento">
            <div class="imgBxo">
              <img src={instagram} />
            </div>
            <div class="contentBxo">
            <a href="https://www.instagram.com/?hl=en"><h3>Instagram</h3></a>
            </div>
          </div>
      </div>
    </div>
    </a>
    </Grid>
  );
}
export default Card;
