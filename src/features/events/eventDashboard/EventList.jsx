import { Box } from '@mui/material';
import * as React from 'react';
import EventListItems from './EventListItems'

export default function EventList({events, selectEvent, deleteEvent}){
  return (
    <Box sx={{mt:2}}>
      {events.map(event => (
        <EventListItems 
         event={event} 
         key={event.id} 
         selectEvent={selectEvent}
         deleteEvent={deleteEvent}
         />
      ))}
    </Box>
  )
}
