import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


class Calendar extends Component {
    render() {
        return (
            <FullCalendar

                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}

                events={[
                    { title: 'Vacaciones', date: '2019-10-01' },
                    { title: 'vacaiones', date: '2019-04-02' }
                ]}
            />
        )
    }
}

export default Calendar;
