
import React, { useState } from 'react';
import EventForm from './EventForm/EventMain/EventMain';
import EventList from './EventForm/EventList/EventList';

const App = () => {
  const [events, setEvents] = useState([]);

  const handleEventSubmit = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div style={{
      display:'flex',
      alignItems:'center'
      , flexDirection:"column"
    }}>

      <EventForm onEventSubmit={handleEventSubmit} />
      <EventList events={events} />
    </div>
  );
};

export default App;
