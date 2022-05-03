import { Box,Grid } from "@material-ui/core";
import React from 'react'
import Event from "../component/EventCard"
import data from "../component/Eventdata"

function createCard(data){
  return ( <Event
               img={data.img}
               title={data.title}
               desc={data.desc}
               time={data.time}
               link={data.link}
           />
  );
}


function Events() {
  return (
    <Box style={ {backgroundColor:"#08022A"}}>

      <Grid container spacing={0} style={{paddingTop:50}}>
        {data.map(createCard)}
      </Grid>
    </Box>
      
  );
}
export default Events;