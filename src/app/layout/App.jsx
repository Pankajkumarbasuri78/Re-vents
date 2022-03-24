import * as React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import EventDashboardComponent from '../../features/events/eventDashboard/EventDashboardComponent';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import { EventForm } from '../../features/events/eventform/EventForm';
import HomePage from '../../features/Home/HomePage';
import { Navbarcomponent } from '../../features/nav/Navbarcomponent';

import './styles.css';

function App() {
   const [formOpen, setFormOpen]=useState(false);
   const [selectedEvent, setSelectedEvent] = useState(null);

   function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      
      <Navbarcomponent setFormOpen={handleCreateFormOpen} />
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/events' element={<EventDashboardComponent />}/>
        <Route path='/events/:id' element={<EventDetailedPage />}/>
        <Route path='/createEvent' element={<EventForm />}/>
    </Routes>  
    </>
  );
}

export default App;
/*
<EventDashboardComponent 
       formOpen={formOpen} 
       setFormOpen={setFormOpen}
       selectEvent={handleSelectEvent}
       selectedEvent={selectedEvent}
       /> */

       /**
    const Nav = () => {
    let routes = useRoutes([
      {path:"/", element:<><HomePage /> </>},
      {path:"/events", element: <> <Navbarcomponent /> <EventDashboardComponent /> </>},
      {path:"/events/:id", element: <> <Navbarcomponent /> <EventDetailedPage /> </>},
      {path:"/createEvent", element: <> <Navbarcomponent /> <EventForm /> </>},
    ])
    return routes;
  };
        */