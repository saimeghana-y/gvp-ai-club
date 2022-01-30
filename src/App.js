import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About'
import Events from './Events'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton'
import Project from './Project';
import Team from './Team'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <IconButton id="icon-button">
      <ArrowDownwardIcon  style={{fontSize:50}} />
      </IconButton>
      <About/>
      <Events/>
      <Project/>
      <Team/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
