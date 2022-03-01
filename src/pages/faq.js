import React from "react";
import { Box, Typography, Grid, makeStyles } from "@material-ui/core";
import './Community.css';
import instagram from "../images/instagram.png"



function Community() {
  return (
    <Box>
      {/* <Grid item container lg={4} xs={12}  md={8}> */}
      <div className="container">
        <div className="card">
          <div class="content">
            <div class="imgBx">
              <img src={instagram} />
            </div>
            <div class="contentBx">
            <a href="https://www.instagram.com/?hl=en"><h3>Instagram</h3></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div class="content">
            <div class="imgBx">
              <img src={instagram} />
            </div>
            <div class="contentBx">
            <a href="https://www.instagram.com/?hl=en"><h3>Instagram</h3></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div class="content">
            <div class="imgBx">
              <img src={instagram} />
            </div>
            <div class="contentBx">
            <a href="https://www.instagram.com/?hl=en"><h3>Instagram</h3></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div class="content">
            <div class="imgBx">
              <img src={instagram} />
            </div>
            <div class="contentBx">
            <a href="https://www.instagram.com/?hl=en"><h3>Instagram</h3></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div class="content">
            <div class="imgBx">
              <img src={instagram} />
            </div>
            <div class="contentBx">
            <a href="https://www.instagram.com/?hl=en"><h3>Instagram</h3></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div class="content">
            <div class="imgBx">
              <img src={instagram} />
            </div>
            <div class="contentBx">
            <a href="https://www.instagram.com/?hl=en"><h3>Instagram</h3></a>
            </div>
          </div>
        </div>
      </div>
      {/* </Grid> */}
    </Box>
  );
}

export default Community;