import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2024, 5, 0),
    end: new Date(2024, 5, 0),
  },
  {
    title: 'Vacation',
    start: new Date(2024, 5, 7),
    end: new Date(2024, 5, 10),
  },
  {
    title: 'Conference',
    start: new Date(2024, 5, 20),
    end: new Date(2024, 5, 23),
  },
];

const MyCalendar = () => (
  <div style={{ height: '500pt' }}>
    <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
  </div>
);

export default MyCalendar;
