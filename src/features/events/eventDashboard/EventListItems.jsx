import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, Stack } from '@mui/material';
import EventListAttendee from './EventListAttendee';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';



export default function EventListItems({event, selectEvent, deleteEvent}){

  return (
    <Card sx={{minWidth: 275, ml:10,mt:2}}>
      <CardContent>
        <Box sx={{display:'flex',ml:5}}>
          <Box>
              <Avatar sx={{mr:5}} src={event.hostPhotoURL}/>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography 
            sx={{ fontSize: 16 }} 
            color="text.secondary" 
            gutterBottom
            >
              {event.title}
            </Typography>

            <Typography 
            sx={{ fontSize: 16 }} 
            color="text.secondary" 
            gutterBottom
            >
              Hosted By {event.hostedBy}
            </Typography>
          </Box>
        </Box>

        <Box sx={{display:"flex",ml:5,mt:2,mb:2}}>
        <QueryBuilderIcon />
        <Typography 
        sx={{ fontSize: 16 }} 
        color="text.secondary" 
        gutterBottom
        marginLeft={1}
        marginRight={1}
        >{event.date}</Typography>
        <LocationOnOutlinedIcon />
        <Typography 
        sx={{ fontSize: 16 }} 
        color="text.secondary" 
        gutterBottom
        marginLeft={1}>{event.venue}</Typography>
        </Box>

        <Box sx={{ml:5, mt:2}}>
          <Stack direction="row" spacing={2}>
            {event.attendees.map(attendee => (
              <EventListAttendee attendee={attendee} key={attendee.id}/>
            ))}
               
          </Stack>
        </Box>
        <Box sx={{ml:5,mt:2}}>
          <Typography
          sx={{ fontSize: 16 }} 
          color="text.secondary" 
          gutterBottom
          >
            {event.description}
          </Typography>
          </Box>
          <Box sx={{display:"flex", flexDirection: 'row-reverse', }}>
          <Button 
           onClick={() => deleteEvent(event.id)} 
           variant="contained"
           color="error"
           >
             Delete</Button>
          <Button 
           onClick={() => selectEvent(event)} 
           variant="contained"
           sx={{mr:2}}
           >
             View</Button>
             </Box>
        

      </CardContent>
    </Card>
  )
}
