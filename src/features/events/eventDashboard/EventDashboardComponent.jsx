import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { sampleData } from '../../../app/sampleData';
import { EventForm } from '../eventform/EventForm';
import EventList from './EventList';


const EventDashboardComponent = ({formOpen, setFormOpen,selectEvent,selectedEvent}) => {
  const [events, setEvents]= useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events,event]);
  }

  function handleUpdateEvent(updatedEvent) {
    setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
    selectEvent(null);
  }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter(evt => evt.id !== eventId));
  }

  return (
    <Grid container spacing={2} >
      <Grid item xs={12} md={8} lg={8} >
        <Paper elevation={0}>
          <EventList 
           events={events} 
           selectEvent={selectEvent}
           deleteEvent={handleDeleteEvent}
           />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper>
          {formOpen && 
          <EventForm 
          setFormOpen={setFormOpen} 
          setEvents={setEvents} 
          createEvent={handleCreateEvent}
          selectedEvent={selectedEvent}
          updateEvent={handleUpdateEvent}
          key={selectedEvent ? selectedEvent.id : null}
          />}   {/*if formOpen is true then render EventFrom */}
        </Paper>
      </Grid>
    </Grid>
  )
}
export default EventDashboardComponent;
