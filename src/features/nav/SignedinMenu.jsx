import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export default function SignedinMenu() {

  return (<>
    <Box sx={{display:'flex', flexDirection:'row'}}>
              <Avatar alt="Remy Sharp" src='/assets/user.png' />
              <Button 
                color="inherit"
                >
                  Bob
              </Button>
              <Menu>
                  <MenuItem >Profile</MenuItem>
                  <MenuItem >My account</MenuItem>
                  <MenuItem >Logout</MenuItem>
              </Menu>
          </Box>
          </>
  );
}


/*
<Box sx={{display:'flex', flexDirection:'row'}}>
              <Avatar alt="Remy Sharp" src='/assets/user.png' />
              <Button 
                color="inherit"
                >
                  Bob
              </Button>
              <Menu>
                  <MenuItem >Profile</MenuItem>
                  <MenuItem >My account</MenuItem>
                  <MenuItem >Logout</MenuItem>
              </Menu>
          </Box> */