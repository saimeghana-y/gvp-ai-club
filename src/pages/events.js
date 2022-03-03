import { Box,Grid } from "@material-ui/core";
import React from 'react'
import Event from "../component/EventCard"
import data from "../component/Teamdata.js"

function createCard(data){
  return ( <Event
               key={data.id}
               img={data.img}
               title={data.title}
               desc={data.desc}
               inst={data.inst}
               fac={data.fac}
               twt={data.twt}
           />
  );
}


function Teamm() {
  return (
    <Box style={ {backgroundColor:"#08022A"}}>

      <Grid container spacing={1} >
        {data.map(createCard)}
      </Grid>
    </Box>
      
  );
}
export default Teamm;