import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
//import SignoutMenu from './SignoutMenu';
//import SignedinMenu from './SignedinMenu';



export const Navbarcomponent = ({setFormOpen}) => {

  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Box sx={{display:'flex', flexDirection:'row'}}>
                <Avatar component={Link} to="/" src="/assets/logo.png"/>
              <Button 
               onClick={() => setFormOpen(true)} 
               color="inherit"
               component={Link} to="/"
               >
                 Re-vents
              </Button>
              </Box>
              <Button component={Link} to="/events" color="inherit">Events</Button>
              {/*<Button color="inherit">Events</Button>*/}
              <Button 
               onClick={() => setFormOpen(true)} 
               sx={{mr:80}} 
               color="inherit"
               component={Link} to="/createEvent"
               >
                 Create Event
              </Button>
              {/*<SignoutMenu />
              <SignedinMenu />*/}
            </Toolbar>
          </AppBar>
        </Box>
  )
}