import { Button, Card, FormControl, Grid, TextField,Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import cuid from 'cuid';


export const EventForm = ({setFormOpen, setEvents, createEvent,selectedEvent, updateEvent}) => {
  const initialValue = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
  };
  const [values, setValue] = useState(initialValue);

  function handleFormSubmit(){
    selectedEvent ? updateEvent({...selectedEvent, ...values})
    : createEvent({
      ...values, 
      id: cuid(),
      hostedBy:'Bob', 
      attendees: [],
      hostPhotoURL:'/assets/user.png',
    })
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const {name,value} =e.target;
    setValue({...values, [name]: value});// copy the whole values and change the value of specific name
  }

  return (
    <Card sx={{mt:2}}  onSubmit={handleFormSubmit}>
      <Typography 
        sx={{ fontSize: 20,ml:3,mb:2,mt:2 }} 
        >{selectedEvent ? 'Edit the Event' : 'Create new Event'}</Typography>
    <FormControl 
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '50ch' }
    }}
    noValidate
    autoComplete="off"
    >
        <Grid container>
            <Grid item>
                <TextField 
                variant='outlined' 
                label="Event title" 
                fullWidth
                required
                name='title'
                value={values.title}
                onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item>
                <TextField 
                variant='outlined' 
                label="category" 
                fullWidth
                required
                name='category'
                value={values.category}
                onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item>
                <TextField 
                variant='outlined' 
                label="description" 
                fullWidth
                required
                name='description'
                value={values.description}
                onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item>
                <TextField 
                variant='outlined' 
                label="city" 
                fullWidth
                required
                name='city'
                value={values.city}
                onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item>
                <TextField 
                variant='outlined' 
                label="venue" 
                fullWidth
                required
                name='venue'
                value={values.venue}
                onChange={(e) => handleInputChange(e)}
                />
            </Grid>
        </Grid>
    </FormControl>
    <Box sx={{display:'flex',justifyContent: 'flex-end',m:1}}>
    <Button 
    onClick={() => setFormOpen(false)} 
    type='submit'
    variant="contained" 
    sx={{mr:1}}
    >
      Cancel
      </Button>
    <Button 
    onClick={()=>{handleFormSubmit();setFormOpen(false);}} 
    variant="contained"
    >
      Submit</Button>
    </Box>
    </Card>
  )
}
