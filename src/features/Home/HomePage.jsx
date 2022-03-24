import { Avatar, Box, Button, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate()
  return (
    
      <Box 
       sx={{display:'flex', 
       flexDirection:'row', 
       bgcolor: 'info.main', 
       justifyContent: 'center',
       alignItems:'center',
       height:563
      }}
       >
         <Box sx={{display:'flex', flexDirection:'column'}}>
           <Box sx={{display:'flex', flexDirection:'row'}}>
              <Avatar sx={{ width: 56, height: 56 }} src="/assets/logo.png" />
              <Typography 
              variant="h3" 
              component="div" 
              gutterBottom
              >
                Re-vents
              </Typography>
              </Box>
              <Button 
              onClick={() => navigate('/events')  }
              variant="outlined" 
              color="error" 
              endIcon={<ArrowForwardIcon />}
              sx={{mr:5,ml:5}}
              >
               Get started
              </Button>
            </Box>
      </Box>
     
  )
}
