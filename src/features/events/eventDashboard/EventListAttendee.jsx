import { Avatar, Box } from '@mui/material';
import * as React from 'react';

export default function EventListAttendee({attendee}){
  return (
    <Box>
        <Avatar alt="image1" src={attendee.photoURL} />
    </Box>
  )
}
